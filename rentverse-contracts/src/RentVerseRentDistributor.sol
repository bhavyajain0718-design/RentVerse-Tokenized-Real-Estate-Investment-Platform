// SPDX-License-Identifier: MIT
pragma solidity ^0.8.30;

import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "./RentVerseProperty.sol";

contract RentVerseRentDistributor is ReentrancyGuard {
    error NoEthSent();
    error PropertyNotActive();
    error NoInvestorsYet();
    error OnlyPropertyWallet();
    error NoTokensHeld();
    error NothingToClaim();
    error TransferFailed();

    RentVerseProperty public immutable propertyContract;

    // tokenId => total rent deposited (in ETH)
    mapping(uint256 => uint256) public totalRentDeposited;
    // tokenId => investor => last claimed snapshot
    mapping(uint256 => mapping(address => uint256)) public lastClaimed;

    event RentDeposited(uint256 indexed tokenId, uint256 amount);
    event RentClaimed(uint256 indexed tokenId, address indexed investor, uint256 amount);

    constructor(address _propertyContract) {
        propertyContract = RentVerseProperty(_propertyContract);
    }

    // Property manager deposits monthly rent
    function depositRent(uint256 _tokenId) external payable {
        if (msg.value == 0) revert NoEthSent();
        (
            ,
            ,
            ,
            ,
            uint256 mintedSupply,
            bool isActive,
            address propertyWallet
        ) = propertyContract.properties(_tokenId);

        if (!isActive) revert PropertyNotActive();
        if (mintedSupply == 0) revert NoInvestorsYet();
        if (msg.sender != propertyWallet) revert OnlyPropertyWallet();

        totalRentDeposited[_tokenId] += msg.value;
        emit RentDeposited(_tokenId, msg.value);
    }

    // Investor claims their share
    function claimRent(uint256 _tokenId) external nonReentrant {
        uint256 investorTokens = propertyContract.balanceOf(msg.sender, _tokenId);
        if (investorTokens == 0) revert NoTokensHeld();

        (, , , , uint256 mintedSupply, bool isActive, ) = propertyContract.properties(_tokenId);
        if (!isActive) revert PropertyNotActive();
        if (mintedSupply == 0) revert NoInvestorsYet();

        uint256 depositedRent = totalRentDeposited[_tokenId];
        uint256 share = (depositedRent * investorTokens) / mintedSupply;
        uint256 alreadyClaimed = lastClaimed[_tokenId][msg.sender];
        if (share <= alreadyClaimed) revert NothingToClaim();
        uint256 claimable = share - alreadyClaimed;

        lastClaimed[_tokenId][msg.sender] = share;

        (bool success, ) = payable(msg.sender).call{value: claimable}("");
        if (!success) revert TransferFailed();

        emit RentClaimed(_tokenId, msg.sender, claimable);
    }
}
