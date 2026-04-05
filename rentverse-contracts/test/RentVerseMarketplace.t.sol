// SPDX-License-Identifier: MIT
pragma solidity ^0.8.30;

import {Test} from "forge-std/Test.sol";
import {RentVerseProperty} from "../src/RentVerseProperty.sol";
import {RentVerseMarketplace} from "../src/RentVerseMarketplace.sol";

contract RentVerseMarketplaceTest is Test {
    RentVerseProperty property;
    RentVerseMarketplace marketplace;

    address SELLER = makeAddr("seller");
    address BUYER = makeAddr("buyer");
    address OTHER = makeAddr("other");

    uint256 constant TOKEN_ID = 0;
    uint256 constant TOKEN_PRICE = 0.003 ether;
    uint256 constant LIST_PRICE = 0.005 ether;

    receive() external payable {}

    function setUp() public {
        property = new RentVerseProperty();
        marketplace = new RentVerseMarketplace(address(property));

        property.listProperty(
            "Modern Villa",
            "Austin, TX",
            100,
            TOKEN_PRICE,
            payable(address(this))
        );

        vm.deal(SELLER, 10 ether);
        vm.deal(BUYER, 10 ether);
        vm.deal(OTHER, 10 ether);

        vm.prank(SELLER);
        property.purchaseTokens{value: TOKEN_PRICE * 10}(TOKEN_ID, 10);
    }

    function _approveMarketplace(address owner) internal {
        vm.prank(owner);
        property.setApprovalForAll(address(marketplace), true);
    }

    function _createListing(uint256 amount) internal returns (uint256 listingId) {
        _approveMarketplace(SELLER);
        vm.prank(SELLER);
        listingId = marketplace.listTokens(TOKEN_ID, amount, LIST_PRICE);
    }

    // Verifies listing moves the seller's tokens into marketplace escrow.
    function testListTokensTransfersTokensIntoMarketplace() public {
        uint256 listingId = _createListing(4);

        assertEq(property.balanceOf(SELLER, TOKEN_ID), 6);
        assertEq(property.balanceOf(address(marketplace), TOKEN_ID), 4);

        (
            address seller,
            uint256 tokenId,
            uint256 amount,
            uint256 priceEach,
            bool isActive
        ) = marketplace.listings(listingId);

        assertEq(seller, SELLER);
        assertEq(tokenId, TOKEN_ID);
        assertEq(amount, 4);
        assertEq(priceEach, LIST_PRICE);
        assertTrue(isActive);
    }

    // Verifies sellers cannot create listings with zero token amount.
    function testCannotListZeroAmount() public {
        _approveMarketplace(SELLER);
        vm.prank(SELLER);
        vm.expectRevert(RentVerseMarketplace.AmountMustBeGreaterThanZero.selector);
        marketplace.listTokens(TOKEN_ID, 0, LIST_PRICE);
    }

    // Verifies sellers cannot create listings with zero token price.
    function testCannotListZeroPrice() public {
        _approveMarketplace(SELLER);
        vm.prank(SELLER);
        vm.expectRevert(RentVerseMarketplace.PriceMustBeGreaterThanZero.selector);
        marketplace.listTokens(TOKEN_ID, 1, 0);
    }

    // Verifies sellers cannot list more tokens than they currently hold.
    function testCannotListWithoutEnoughTokens() public {
        _approveMarketplace(SELLER);
        vm.prank(SELLER);
        vm.expectRevert(RentVerseMarketplace.InsufficientTokens.selector);
        marketplace.listTokens(TOKEN_ID, 11, LIST_PRICE);
    }

    // Verifies listings require prior ERC1155 approval for the marketplace.
    function testCannotListWithoutMarketplaceApproval() public {
        vm.prank(SELLER);
        vm.expectRevert(RentVerseMarketplace.MarketplaceNotApproved.selector);
        marketplace.listTokens(TOKEN_ID, 1, LIST_PRICE);
    }

    // Verifies a successful purchase transfers tokens to the buyer and ETH to the seller.
    function testBuyTokensTransfersTokensAndPaysSeller() public {
        uint256 listingId = _createListing(4);
        uint256 sellerBalanceBefore = SELLER.balance;

        vm.prank(BUYER);
        marketplace.buyTokens{value: LIST_PRICE * 2}(listingId, 2);

        assertEq(property.balanceOf(BUYER, TOKEN_ID), 2);
        assertEq(property.balanceOf(address(marketplace), TOKEN_ID), 2);
        assertEq(SELLER.balance - sellerBalanceBefore, LIST_PRICE * 2);

        (, , uint256 amount, , bool isActive) = marketplace.listings(listingId);
        assertEq(amount, 2);
        assertTrue(isActive);
    }

    // Verifies buying the final listed amount closes the listing.
    function testBuyingEntireListingDeactivatesIt() public {
        uint256 listingId = _createListing(2);

        vm.prank(BUYER);
        marketplace.buyTokens{value: LIST_PRICE * 2}(listingId, 2);

        (, , uint256 amount, , bool isActive) = marketplace.listings(listingId);
        assertEq(amount, 0);
        assertFalse(isActive);
    }

    // Verifies buyers cannot request zero tokens from a listing.
    function testCannotBuyZeroAmount() public {
        uint256 listingId = _createListing(2);

        vm.prank(BUYER);
        vm.expectRevert(RentVerseMarketplace.AmountMustBeGreaterThanZero.selector);
        marketplace.buyTokens{value: 0}(listingId, 0);
    }

    // Verifies inactive listings cannot be purchased.
    function testCannotBuyInactiveListing() public {
        uint256 listingId = _createListing(1);

        vm.prank(SELLER);
        marketplace.cancelListing(listingId);

        vm.prank(BUYER);
        vm.expectRevert(RentVerseMarketplace.ListingNotActive.selector);
        marketplace.buyTokens{value: LIST_PRICE}(listingId, 1);
    }

    // Verifies buyers cannot purchase more tokens than the listing still holds.
    function testCannotBuyMoreThanListedAmount() public {
        uint256 listingId = _createListing(2);

        vm.prank(BUYER);
        vm.expectRevert(RentVerseMarketplace.NotEnoughTokensInListing.selector);
        marketplace.buyTokens{value: LIST_PRICE * 3}(listingId, 3);
    }

    // Verifies purchases revert when the payment does not match the listing price.
    function testCannotBuyWithIncorrectEth() public {
        uint256 listingId = _createListing(2);

        vm.prank(BUYER);
        vm.expectRevert(RentVerseMarketplace.IncorrectEth.selector);
        marketplace.buyTokens{value: LIST_PRICE}(listingId, 2);
    }

    // Verifies cancellation returns escrowed tokens back to the seller.
    function testCancelListingReturnsTokensToSeller() public {
        uint256 listingId = _createListing(3);

        vm.prank(SELLER);
        marketplace.cancelListing(listingId);

        assertEq(property.balanceOf(SELLER, TOKEN_ID), 10);
        assertEq(property.balanceOf(address(marketplace), TOKEN_ID), 0);

        (, , uint256 amount, , bool isActive) = marketplace.listings(listingId);
        assertEq(amount, 3);
        assertFalse(isActive);
    }

    // Verifies only the original seller can cancel their listing.
    function testOnlySellerCanCancelListing() public {
        uint256 listingId = _createListing(2);

        vm.prank(OTHER);
        vm.expectRevert(RentVerseMarketplace.NotYourListing.selector);
        marketplace.cancelListing(listingId);
    }

    // Verifies a listing cannot be canceled twice.
    function testCannotCancelAlreadyInactiveListing() public {
        uint256 listingId = _createListing(2);

        vm.prank(SELLER);
        marketplace.cancelListing(listingId);

        vm.prank(SELLER);
        vm.expectRevert(RentVerseMarketplace.AlreadyInactive.selector);
        marketplace.cancelListing(listingId);
    }
}
