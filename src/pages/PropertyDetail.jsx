/* global BigInt */
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiHome, FiMaximize2, FiCalendar, FiTrendingUp, FiUsers, FiDollarSign, FiGrid } from 'react-icons/fi';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from 'react-share';
import { FaFacebook, FaTwitter, FaLinkedin, FaEthereum } from 'react-icons/fa';
import { usePurchaseTokens } from '../hooks/usePurchaseTokens';
import { useAccount, useReadContract } from 'wagmi';
import { useMemo, useState } from 'react';
import { useMarketplace } from "../hooks/useMarketplace";
import { useRentDistributor } from '../hooks/useRentDistributor';
import rentDistributorArtifact from '../abis/RentDistributor.json';
import {
  PROPERTY_CONTRACT_ABI,
  PROPERTY_CONTRACT_ADDRESS,
  PROPERTY_MANAGER_ADDRESS,
  RENT_DISTRIBUTOR_CONTRACT_ADDRESS,
} from '../constants';

// ✅ InvestSection component — handles all wallet + purchase logic
function InvestSection({ tokenId }) {
  const [amount, setAmount] = useState(1);
  const [sellAmount, setSellAmount] = useState(1);
  const [sellPrice, setSellPrice] = useState('0.003');
  const [sellState, setSellState] = useState({ loading: false, message: '', error: '' });
  const [rentAmount, setRentAmount] = useState('0.10');
  const [rentAction, setRentAction] = useState('');
  const [rentFeedback, setRentFeedback] = useState({ message: '', error: '' });
  const { address, isConnected } = useAccount();
  const { purchase, isPending, isConfirming, isSuccess, hash } = usePurchaseTokens();
  const { listTokens } = useMarketplace();
  const {
    depositRent,
    claimRent,
    hash: rentHash,
    isPending: isRentPending,
    isConfirming: isRentConfirming,
    isSuccess: isRentSuccess,
  } = useRentDistributor();
  const {
    data: ownedBalance = 0n,
    refetch: refetchOwnedBalance,
  } = useReadContract({
    address: PROPERTY_CONTRACT_ADDRESS,
    abi: PROPERTY_CONTRACT_ABI,
    functionName: 'balanceOf',
    args: address ? [address, BigInt(tokenId)] : undefined,
    query: {
      enabled: Boolean(address),
      refetchInterval: 4000,
    },
  });
  const { data: propertyData } = useReadContract({
    address: PROPERTY_CONTRACT_ADDRESS,
    abi: PROPERTY_CONTRACT_ABI,
    functionName: 'properties',
    args: [BigInt(tokenId)],
    query: {
      refetchInterval: 4000,
    },
  });
  const { data: totalRentDeposited = 0n } = useReadContract({
    address: RENT_DISTRIBUTOR_CONTRACT_ADDRESS,
    abi: rentDistributorArtifact.abi,
    functionName: 'totalRentDeposited',
    args: [BigInt(tokenId)],
    query: {
      refetchInterval: 4000,
    },
  });
  const { data: alreadyClaimed = 0n } = useReadContract({
    address: RENT_DISTRIBUTOR_CONTRACT_ADDRESS,
    abi: rentDistributorArtifact.abi,
    functionName: 'lastClaimed',
    args: address ? [BigInt(tokenId), address] : undefined,
    query: {
      enabled: Boolean(address),
      refetchInterval: 4000,
    },
  });

  const ownedTokens = useMemo(() => Number(ownedBalance), [ownedBalance]);
  const normalizedAddress = address?.toLowerCase();
  const isPropertyManager =
    normalizedAddress === PROPERTY_MANAGER_ADDRESS.toLowerCase();
  const canClaimRent = !isPropertyManager && ownedTokens > 0;
  const mintedSupply =
    propertyData?.mintedSupply ??
    propertyData?.[4] ??
    0n;
  const claimableRent = useMemo(() => {
    if (ownedBalance <= 0n || mintedSupply <= 0n || totalRentDeposited <= 0n) {
      return 0n;
    }

    const totalShare = (totalRentDeposited * ownedBalance) / mintedSupply;
    if (totalShare <= alreadyClaimed) {
      return 0n;
    }

    return totalShare - alreadyClaimed;
  }, [alreadyClaimed, mintedSupply, ownedBalance, totalRentDeposited]);

  const handleDepositRent = () => {
    if (!rentAmount || Number(rentAmount) <= 0) {
      setRentFeedback({ message: '', error: 'Enter a valid ETH amount to deposit as rent.' });
      return;
    }

    setRentAction('deposit');
    setRentFeedback({ message: '', error: '' });
    depositRent(tokenId, rentAmount);
  };

  const handleClaimRent = () => {
    if (claimableRent <= 0n) {
      const message = 'Your rent has already been deposited to your wallet. Kindly wait for the next epoch. Thanks.';
      setRentFeedback({ message, error: '' });
      window.alert(message);
      return;
    }

    setRentAction('claim');
    setRentFeedback({ message: '', error: '' });
    claimRent(tokenId);
  };

  const handleSell = async () => {
    if (!sellAmount || sellAmount < 1) {
      setSellState({ loading: false, message: '', error: 'Enter a valid token amount to sell.' });
      return;
    }

    if (!sellPrice || Number(sellPrice) <= 0) {
      setSellState({ loading: false, message: '', error: 'Enter a valid ETH price per token.' });
      return;
    }

    if (sellAmount > ownedTokens) {
      setSellState({ loading: false, message: '', error: 'You cannot sell more tokens than you own.' });
      return;
    }

    try {
      setSellState({ loading: true, message: '', error: '' });
      await listTokens(tokenId, sellAmount, sellPrice);
      await refetchOwnedBalance();
      setSellState({
        loading: false,
        message: 'Sell listing created. You will receive ETH in your wallet when another investor buys your listed tokens.',
        error: '',
      });
    } catch (error) {
      setSellState({
        loading: false,
        message: '',
        error: error?.reason || error?.message || 'Failed to create sell listing.',
      });
    }
  };

  const isRentActionLoading = isRentPending || isRentConfirming;

  const rentStatusMessage = useMemo(() => {
    if (!isRentSuccess) return '';
    if (rentAction === 'deposit') {
      return 'Rent deposited successfully. Investors can now claim their proportional share.';
    }
    if (rentAction === 'claim') {
      return 'Rent claimed successfully. Your proportional ETH share has been sent to your wallet.';
    }
    return '';
  }, [isRentSuccess, rentAction]);

  if (!isConnected) {
    return (
      <div className="p-4 bg-yellow-50 rounded-lg text-center">
        <p className="text-yellow-700 font-medium">
          ⚠️ Please connect your wallet first
        </p>
      </div>
    );
  }

  return (
    <div>
      <input
        type="number"
        min="1"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        className="border p-2 rounded w-full mb-2"
        placeholder="Number of tokens"
      />

      <p className="text-sm text-secondary-600 mb-3">
        Total: {(amount * 0.003).toFixed(4)} ETH (~${amount * 10})
      </p>

      <p className="text-sm text-secondary-600 mb-4">
        You currently own <span className="font-semibold">{ownedTokens}</span> token(s) of this property.
      </p>

      <button
        onClick={() => purchase(tokenId, amount, 0.003)}
        disabled={isPending || isConfirming}
        className="btn w-full mb-4 flex items-center justify-center"
      >
        {isPending
          ? '⏳ Approve in MetaMask...'
          : isConfirming
            ? '⛓️ Confirming on blockchain...'
            : '💰 Invest Now'}
      </button>

      {isSuccess && (
        <div className="mt-3 p-3 bg-green-100 rounded">
          <p className="text-green-700 font-bold">✅ NFT Tokens minted to your wallet!</p>
          <a
            href={`https://sepolia.etherscan.io/tx/${hash}`}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 underline text-sm"
          >
            View transaction on Etherscan →
          </a>
        </div>
      )}

      <div className="border-t pt-4 mt-4">
        <h4 className="font-semibold mb-2">Sell Your Tokens</h4>
        <p className="text-sm text-secondary-600 mb-3">
          This creates a marketplace listing. ETH is sent to your wallet when another investor buys your tokens.
        </p>

        <input
          type="number"
          min="1"
          max={Math.max(ownedTokens, 1)}
          value={sellAmount}
          onChange={(e) => setSellAmount(Number(e.target.value))}
          className="border p-2 rounded w-full mb-2"
          placeholder="How many tokens to sell"
        />

        <input
          type="number"
          min="0.0001"
          step="0.0001"
          value={sellPrice}
          onChange={(e) => setSellPrice(e.target.value)}
          className="border p-2 rounded w-full mb-3"
          placeholder="Price per token in ETH"
        />

        <button
          onClick={handleSell}
          disabled={sellState.loading || ownedTokens === 0}
          className="btn w-full"
        >
          {sellState.loading ? 'Listing Tokens...' : 'Create Sell Listing'}
        </button>

        {ownedTokens === 0 && (
          <p className="text-sm text-secondary-500 mt-2">
            Buy tokens first, then you can list them for resale here.
          </p>
        )}

        {sellState.message && (
          <div className="mt-3 p-3 bg-blue-50 rounded">
            <p className="text-blue-700 text-sm font-medium">{sellState.message}</p>
          </div>
        )}

        {sellState.error && (
          <div className="mt-3 p-3 bg-red-50 rounded">
            <p className="text-red-700 text-sm font-medium">{sellState.error}</p>
          </div>
        )}
      </div>

      <div className="border-t pt-4 mt-4">
        <h4 className="font-semibold mb-2">Rental Rewards</h4>

        {isPropertyManager && (
          <>
            <p className="text-sm text-secondary-600 mb-3">
              You are connected as the property manager. Deposit the net rent collected for this property.
            </p>

            <input
              type="number"
              min="0.0001"
              step="0.0001"
              value={rentAmount}
              onChange={(e) => setRentAmount(e.target.value)}
              className="border p-2 rounded w-full mb-3"
              placeholder="Rent amount in ETH"
            />

            <button
              onClick={handleDepositRent}
              disabled={isRentActionLoading}
              className="btn w-full"
            >
              {isRentPending && rentAction === 'deposit'
                ? 'Approve Deposit in MetaMask...'
                : isRentConfirming && rentAction === 'deposit'
                  ? 'Confirming Rent Deposit...'
                  : 'Deposit Rent'}
            </button>
          </>
        )}

        {canClaimRent && (
          <>
            <p className="text-sm text-secondary-600 mb-3">
              You are connected as an investor. Claim your proportional share of the rent deposited for this property.
            </p>

            <p className="text-sm text-secondary-500 mb-3">
              Claimable now: {(Number(claimableRent) / 1e18).toFixed(4)} ETH
            </p>

            <button
              onClick={handleClaimRent}
              disabled={isRentActionLoading}
              className="btn w-full"
            >
              {isRentPending && rentAction === 'claim'
                ? 'Approve Claim in MetaMask...'
                : isRentConfirming && rentAction === 'claim'
                  ? 'Confirming Claim...'
                  : 'Claim Rent'}
            </button>
          </>
        )}

        {!isPropertyManager && !canClaimRent && (
          <p className="text-sm text-secondary-500">
            Connect the configured property manager wallet to deposit rent, or hold this property&apos;s ERC-1155 tokens to claim rent.
          </p>
        )}
      </div>

      {(isPropertyManager || canClaimRent) && rentStatusMessage && (
        <div className="mt-3 p-3 bg-green-100 rounded">
          <p className="text-green-700 font-medium">{rentStatusMessage}</p>
          {rentHash && (
            <a
              href={`https://sepolia.etherscan.io/tx/${rentHash}`}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 underline text-sm"
            >
              View rent transaction on Etherscan →
            </a>
          )}
        </div>
      )}

      {(isPropertyManager || canClaimRent) && rentFeedback.message && (
        <div className="mt-3 p-3 bg-blue-50 rounded">
          <p className="text-blue-700 text-sm font-medium">{rentFeedback.message}</p>
        </div>
      )}

      {(isPropertyManager || canClaimRent) && rentFeedback.error && (
        <div className="mt-3 p-3 bg-red-50 rounded">
          <p className="text-red-700 text-sm font-medium">{rentFeedback.error}</p>
        </div>
      )}
    </div>
  );
}

function PropertyDetail() {
  const { id } = useParams();

  const property = {
    id: parseInt(id),
    title: 'Modern Villa with Pool',
    price: {
      usd: 850000,
      eth: 425
    },
    location: 'Beverly Hills, CA',
    type: 'villa',
    roi: '7.2%',
    metrics: {
      totalInvestors: 142,
      funded: '89%',
      minInvestment: '$10',
      monthlyIncome: '$520',
      appreciation: '4.5%',
      rentalYield: '5.8%',
      totalReturn: '10.3%'
    },
    status: 'Active Investment',
    description: 'This stunning modern villa offers luxurious living spaces with high-end finishes throughout. The property has been tokenized for fractional ownership, allowing investors to participate in this premium real estate opportunity with as little as $10.',
    features: [
      'Swimming Pool',
      'Smart Home System',
      'Gourmet Kitchen',
      'Home Theater',
      'Wine Cellar',
      'Outdoor Kitchen',
      'Fire Pit',
      'Three-Car Garage'
    ],
    tokenDetails: {
      totalTokens: 85000,
      availableTokens: 9350,
      tokenPrice: '$10',
      tokenId: parseInt(id) - 1,       // ✅ use tokenId instead of symbol
      contractAddress: '0x613a0e2db63f2c0185ac8b19b69984e0a3849628',
      blockchain: 'Ethereum'
    },
    financials: {
      grossRent: '$8,500/month',
      netRent: '$7,225/month',
      expenses: {
        management: '8%',
        maintenance: '5%',
        insurance: '2%',
        property_tax: '1.2%'
      },
      projectedAppreciation: '4.5% annually'
    },
    yearBuilt: 2020,
    parkingSpaces: 3,
    lotSize: '0.5 acres',
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80'
    ],
    agent: {
      name: 'John Doe',
      phone: '+1 (555) 123-4567',
      email: 'john@realestate.com',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80'
    }
  };

  const shareUrl = window.location.href;

  return (
    <div className="min-h-screen bg-secondary-50">

      {/* Breadcrumb Navigation */}
      <div className="bg-white shadow">
        <div className="container py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-secondary-600 hover:text-primary-600">Home</Link>
            <span className="text-secondary-400">/</span>
            <Link to="/properties" className="text-secondary-600 hover:text-primary-600">Properties</Link>
            <span className="text-secondary-400">/</span>
            <span className="text-primary-600">{property.title}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* ── Left Column ── */}
          <div className="lg:col-span-2 space-y-8">

            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <div className="h-96 rounded-lg overflow-hidden">
                <img
                  src={property.images[0]}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {property.images.slice(1).map((image, index) => (
                  <div key={index} className="h-32 rounded-lg overflow-hidden">
                    <img
                      src={image}
                      alt={`${property.title} - ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Property Details Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h2 className="text-2xl font-bold mb-4">Property Details</h2>
              <p className="text-secondary-600 mb-6">{property.description}</p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <span>{property.parkingSpaces} Parking</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FiMaximize2 className="text-primary-600" />
                  <span>{property.lotSize}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FiCalendar className="text-primary-600" />
                  <span>Built {property.yearBuilt}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FiUsers className="text-primary-600" />
                  <span>{property.metrics.totalInvestors} Investors</span>
                </div>
              </div>

              {/* Features */}
              <h3 className="text-xl font-semibold mb-4">Features</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {property.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <FiHome className="text-primary-600" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Token Information */}
              <h3 className="text-xl font-semibold mb-4">Token Information</h3>
              <div className="bg-secondary-50 rounded-lg p-6 mb-6">
                <div className="grid grid-cols-2 gap-4">
                  {/* ✅ Token ID replaces confusing VILLA425 symbol */}
                  <div>
                    <p className="text-sm text-secondary-600">Token ID</p>
                    <p className="font-semibold">#{property.tokenDetails.tokenId}</p>
                  </div>
                  <div>
                    <p className="text-sm text-secondary-600">Token Price</p>
                    <p className="font-semibold">{property.tokenDetails.tokenPrice}</p>
                  </div>
                  <div>
                    <p className="text-sm text-secondary-600">Available Tokens</p>
                    <p className="font-semibold">
                      {property.tokenDetails.availableTokens.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-secondary-600">Total Supply</p>
                    <p className="font-semibold">
                      {property.tokenDetails.totalTokens.toLocaleString()}
                    </p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-sm text-secondary-600">Smart Contract</p>
                    <p className="font-mono text-sm">{property.tokenDetails.contractAddress}</p>
                  </div>
                </div>
              </div>

              {/* Financial Overview */}
              <h3 className="text-xl font-semibold mb-4">Financial Overview</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-secondary-50 rounded-lg p-6">
                  <h4 className="font-semibold mb-4">Rental Income</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-secondary-600">Gross Rent</span>
                      <span className="font-medium">{property.financials.grossRent}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-secondary-600">Net Rent</span>
                      <span className="font-medium">{property.financials.netRent}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-secondary-50 rounded-lg p-6">
                  <h4 className="font-semibold mb-4">Expenses</h4>
                  <div className="space-y-2">
                    {Object.entries(property.financials.expenses).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-secondary-600">
                          {key.replace('_', ' ').charAt(0).toUpperCase() + key.slice(1)}
                        </span>
                        <span className="font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── Right Column ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Investment Card */}
            <div className="bg-white rounded-lg shadow-md p-6">

              {/* Price + ROI */}
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-sm text-secondary-500">Investment Price</p>
                  <div className="flex items-center">
                    <FiDollarSign className="text-primary-600" />
                    <span className="text-2xl font-bold">
                      ${property.price.usd.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center text-primary-600">
                    <FaEthereum className="mr-1" />
                    <span>{property.price.eth} ETH</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-secondary-500">Annual ROI</p>
                  <div className="flex items-center justify-end text-green-600">
                    <FiTrendingUp className="mr-1" />
                    <span className="text-2xl font-bold">{property.roi}</span>
                  </div>
                </div>
              </div>

              {/* Metrics */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-secondary-600">Rental Yield</span>
                  <span className="font-medium">{property.metrics.rentalYield}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary-600">Appreciation</span>
                  <span className="font-medium">{property.metrics.appreciation}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary-600">Total Return</span>
                  <span className="font-medium text-green-600">{property.metrics.totalReturn}</span>
                </div>
              </div>

              {/* Funding Progress */}
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-secondary-600">Funding Progress</span>
                  <span className="font-medium">{property.metrics.funded}</span>
                </div>
                <div className="w-full bg-secondary-100 rounded-full h-2">
                  <div
                    className="bg-primary-600 h-2 rounded-full"
                    style={{ width: property.metrics.funded }}
                  />
                </div>
                <p className="text-sm text-secondary-500 mt-1">
                  Min Investment: {property.metrics.minInvestment}
                </p>
              </div>

              {/* 3D View Button */}
              <Link
                to="/property-3d"
                className="btn w-full mb-4 flex items-center justify-center"
              >
                <FiGrid className="mr-2" />
                View 3D version
              </Link>

              {/* ✅ Real invest section — replaces old hardcoded button */}
              <InvestSection tokenId={property.tokenDetails.tokenId} />

              {/* Social Share */}
              <div className="flex items-center justify-center space-x-4 pt-4 border-t mt-4">
                <FacebookShareButton url={shareUrl}>
                  <FaFacebook className="text-2xl text-blue-600 hover:opacity-80" />
                </FacebookShareButton>
                <TwitterShareButton url={shareUrl}>
                  <FaTwitter className="text-2xl text-sky-500 hover:opacity-80" />
                </TwitterShareButton>
                <LinkedinShareButton url={shareUrl}>
                  <FaLinkedin className="text-2xl text-blue-700 hover:opacity-80" />
                </LinkedinShareButton>
              </div>
            </div>

            {/* Agent Card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={property.agent.image}
                  alt={property.agent.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">{property.agent.name}</h3>
                  <p className="text-sm text-secondary-600">Investment Advisor</p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm">
                  <span className="font-medium">Phone:</span> {property.agent.phone}
                </p>
                <p className="text-sm">
                  <span className="font-medium">Email:</span> {property.agent.email}
                </p>
              </div>
              <button className="btn-secondary w-full mt-4">
                Schedule Consultation
              </button>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetail;
