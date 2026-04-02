// SPDX-License-Identifier: MIT
pragma solidity ^0.8.30;

import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "./RentVerseProperty.sol";

contract RentVerseRentDistributor is ReentrancyGuard {

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
        require(msg.value > 0, "No ETH sent");
        totalRentDeposited[_tokenId] += msg.value;
        emit RentDeposited(_tokenId, msg.value);
    }

    // Investor claims their share
    function claimRent(uint256 _tokenId) external nonReentrant {
        uint256 investorTokens = propertyContract.balanceOf(msg.sender, _tokenId);
        require(investorTokens > 0, "No tokens held");

        (, , uint256 totalSupply, , , , ) = propertyContract.properties(_tokenId);

        uint256 share = (totalRentDeposited[_tokenId] * investorTokens) / totalSupply;
        uint256 alreadyClaimed = lastClaimed[_tokenId][msg.sender];
        uint256 claimable = share - alreadyClaimed;

        require(claimable > 0, "Nothing to claim");
        lastClaimed[_tokenId][msg.sender] = share;

        (bool success, ) = payable(msg.sender).call{value: claimable}("");
        require(success, "Transfer failed");

        emit RentClaimed(_tokenId, msg.sender, claimable);
    }
}