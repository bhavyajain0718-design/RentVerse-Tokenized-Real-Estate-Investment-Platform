// SPDX-License-Identifier: MIT
pragma solidity ^0.8.30;

import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol";
import "./RentVerseProperty.sol";

contract RentVerseMarketplace is ReentrancyGuard, ERC1155Holder {

    RentVerseProperty public immutable propertyContract;

    struct Listing {
        address seller;
        uint256 tokenId;
        uint256 amount;       // how many tokens being sold
        uint256 priceEach;    // price per token in wei
        bool isActive;
    }

    uint256 public nextListingId;
    mapping(uint256 => Listing) public listings;

    event TokensListed(uint256 indexed listingId, address indexed seller, uint256 tokenId, uint256 amount, uint256 priceEach);
    event TokensSold(uint256 indexed listingId, address indexed buyer, uint256 amount);
    event ListingCancelled(uint256 indexed listingId);

    constructor(address _propertyContract) {
        propertyContract = RentVerseProperty(_propertyContract);
    }

    // Seller lists their tokens for sale
    function listTokens(
    uint256 _tokenId,
    uint256 _amount,
    uint256 _priceEach
) external returns (uint256) {
    require(_amount > 0, "Amount must be > 0");
    require(_priceEach > 0, "Price must be > 0");
    require(
        propertyContract.balanceOf(msg.sender, _tokenId) >= _amount,
        "Insufficient tokens"
    );

    require(
        propertyContract.isApprovedForAll(msg.sender, address(this)),
        "Marketplace not approved"
    );

    // LOCK TOKENS IN CONTRACT
    propertyContract.safeTransferFrom(
        msg.sender,
        address(this),
        _tokenId,
        _amount,
        ""
    );

    uint256 listingId = nextListingId++;

    listings[listingId] = Listing({
        seller: msg.sender,
        tokenId: _tokenId,
        amount: _amount,
        priceEach: _priceEach,
        isActive: true
    });

    emit TokensListed(listingId, msg.sender, _tokenId, _amount, _priceEach);
    return listingId;
}

    // Buyer purchases listed tokens
    function buyTokens(uint256 _listingId, uint256 _amount)
        external
        payable
        nonReentrant
    {
        require(_amount > 0, "Invalid amount");
        Listing storage listing = listings[_listingId];
        require(listing.isActive, "Listing not active");
        require(_amount <= listing.amount, "Not enough tokens in listing");
        require(msg.value == listing.priceEach * _amount, "Incorrect ETH");

        listing.amount -= _amount;
        if (listing.amount == 0) listing.isActive = false;

        // Transfer tokens from seller to buyer
        propertyContract.safeTransferFrom(
            address(this),
            msg.sender,
            listing.tokenId,
            _amount,
            ""
        );

        // Pay seller
        (bool success, ) = payable(listing.seller).call{value: msg.value}("");
        require(success, "Payment failed");

        emit TokensSold(_listingId, msg.sender, _amount);
    }

    // Seller cancels their listing
    function cancelListing(uint256 _listingId) external {
    Listing storage listing = listings[_listingId];

    require(listing.seller == msg.sender, "Not your listing");
    require(listing.isActive, "Already inactive");

    listing.isActive = false;

    //  RETURN TOKENS TO SELLER
    propertyContract.safeTransferFrom(
        address(this),
        listing.seller,
        listing.tokenId,
        listing.amount,
        ""
    );

    emit ListingCancelled(_listingId);
}
}