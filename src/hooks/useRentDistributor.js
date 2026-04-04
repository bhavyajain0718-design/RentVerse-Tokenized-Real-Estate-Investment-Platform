/* global BigInt */
import { parseEther } from 'viem';
import { useWaitForTransactionReceipt, useWriteContract } from 'wagmi';
import rentDistributorArtifact from '../abis/RentDistributor.json';
import { RENT_DISTRIBUTOR_CONTRACT_ADDRESS } from '../constants';

export function useRentDistributor() {
    const { writeContract, data: hash, isPending } = useWriteContract();
    const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash });

    const depositRent = (tokenId, amountInEth) => {
        writeContract({
            address: RENT_DISTRIBUTOR_CONTRACT_ADDRESS,
            abi: rentDistributorArtifact.abi,
            functionName: 'depositRent',
            args: [BigInt(tokenId)],
            value: parseEther(String(amountInEth)),
        });
    };

    const claimRent = (tokenId) => {
        writeContract({
            address: RENT_DISTRIBUTOR_CONTRACT_ADDRESS,
            abi: rentDistributorArtifact.abi,
            functionName: 'claimRent',
            args: [BigInt(tokenId)],
        });
    };

    return {
        depositRent,
        claimRent,
        hash,
        isPending,
        isConfirming,
        isSuccess,
    };
}
