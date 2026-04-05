// SPDX-License-Identifier: MIT
pragma solidity ^0.8.30;

import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol";
import "./RentVerseProperty.sol";

contract RentVerseMarketplace is ReentrancyGuard, ERC1155Holder {
    error AmountMustBeGreaterThanZero();
    error PriceMustBeGreaterThanZero();
    error InsufficientTokens();
    error MarketplaceNotApproved();
    error ListingNotActive();
    error NotEnoughTokensInListing();
    error IncorrectEth();
    error PaymentFailed();
    error NotYourListing();
    error AlreadyInactive();

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
    if (_amount == 0) revert AmountMustBeGreaterThanZero();
    if (_priceEach == 0) revert PriceMustBeGreaterThanZero();
    if (propertyContract.balanceOf(msg.sender, _tokenId) < _amount) revert InsufficientTokens();

    if (!propertyContract.isApprovedForAll(msg.sender, address(this))) revert MarketplaceNotApproved();

    propertyContract.safeTransferFrom(
        msg.sender,
        address(this),
        _tokenId,
        _amount,
        ""
    );

    uint256 listingId = nextListingId;
    // Gas: unchecked increment is safe because listing ids only ever move upward.
    unchecked {
        nextListingId = listingId + 1;
    }

    Listing storage listing = listings[listingId];
    listing.seller = msg.sender;
    listing.tokenId = _tokenId;
    listing.amount = _amount;
    listing.priceEach = _priceEach;
    listing.isActive = true;

    emit TokensListed(listingId, msg.sender, _tokenId, _amount, _priceEach);
    return listingId;
}

    // Buyer purchases listed tokens
    function buyTokens(uint256 _listingId, uint256 _amount)
        external
        payable
        nonReentrant
    {
        if (_amount == 0) revert AmountMustBeGreaterThanZero();

        Listing storage listing = listings[_listingId];
        if (!listing.isActive) revert ListingNotActive();

        uint256 listedAmount = listing.amount;
        if (_amount > listedAmount) revert NotEnoughTokensInListing();

        uint256 priceEach = listing.priceEach;
        if (msg.value != priceEach * _amount) revert IncorrectEth();

        uint256 remainingAmount;
        // Gas: reuse cached listing amount and write back the reduced amount once.
        unchecked {
            remainingAmount = listedAmount - _amount;
        }
        listing.amount = remainingAmount;
        if (remainingAmount == 0) listing.isActive = false;

        uint256 tokenId = listing.tokenId;
        address seller = listing.seller;

        propertyContract.safeTransferFrom(
            address(this),
            msg.sender,
            tokenId,
            _amount,
            ""
        );

        (bool success, ) = payable(seller).call{value: msg.value}("");
        if (!success) revert PaymentFailed();

        emit TokensSold(_listingId, msg.sender, _amount);
    }

    // Seller cancels their listing
    function cancelListing(uint256 _listingId) external {
    Listing storage listing = listings[_listingId];

    if (listing.seller != msg.sender) revert NotYourListing();
    if (!listing.isActive) revert AlreadyInactive();

    address seller = listing.seller;
    uint256 tokenId = listing.tokenId;
    uint256 amount = listing.amount;

    listing.isActive = false;

    propertyContract.safeTransferFrom(
        address(this),
        seller,
        tokenId,
        amount,
        ""
    );

    emit ListingCancelled(_listingId);
}
}
