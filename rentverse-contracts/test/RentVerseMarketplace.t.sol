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

    function testCannotListZeroAmount() public {
        _approveMarketplace(SELLER);
        vm.prank(SELLER);
        vm.expectRevert("Amount must be > 0");
        marketplace.listTokens(TOKEN_ID, 0, LIST_PRICE);
    }

    function testCannotListZeroPrice() public {
        _approveMarketplace(SELLER);
        vm.prank(SELLER);
        vm.expectRevert("Price must be > 0");
        marketplace.listTokens(TOKEN_ID, 1, 0);
    }

    function testCannotListWithoutEnoughTokens() public {
        _approveMarketplace(SELLER);
        vm.prank(SELLER);
        vm.expectRevert("Insufficient tokens");
        marketplace.listTokens(TOKEN_ID, 11, LIST_PRICE);
    }

    function testCannotListWithoutMarketplaceApproval() public {
        vm.prank(SELLER);
        vm.expectRevert("Marketplace not approved");
        marketplace.listTokens(TOKEN_ID, 1, LIST_PRICE);
    }

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

    function testBuyingEntireListingDeactivatesIt() public {
        uint256 listingId = _createListing(2);

        vm.prank(BUYER);
        marketplace.buyTokens{value: LIST_PRICE * 2}(listingId, 2);

        (, , uint256 amount, , bool isActive) = marketplace.listings(listingId);
        assertEq(amount, 0);
        assertFalse(isActive);
    }

    function testCannotBuyZeroAmount() public {
        uint256 listingId = _createListing(2);

        vm.prank(BUYER);
        vm.expectRevert("Invalid amount");
        marketplace.buyTokens{value: 0}(listingId, 0);
    }

    function testCannotBuyInactiveListing() public {
        uint256 listingId = _createListing(1);

        vm.prank(SELLER);
        marketplace.cancelListing(listingId);

        vm.prank(BUYER);
        vm.expectRevert("Listing not active");
        marketplace.buyTokens{value: LIST_PRICE}(listingId, 1);
    }

    function testCannotBuyMoreThanListedAmount() public {
        uint256 listingId = _createListing(2);

        vm.prank(BUYER);
        vm.expectRevert("Not enough tokens in listing");
        marketplace.buyTokens{value: LIST_PRICE * 3}(listingId, 3);
    }

    function testCannotBuyWithIncorrectEth() public {
        uint256 listingId = _createListing(2);

        vm.prank(BUYER);
        vm.expectRevert("Incorrect ETH");
        marketplace.buyTokens{value: LIST_PRICE}(listingId, 2);
    }

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

    function testOnlySellerCanCancelListing() public {
        uint256 listingId = _createListing(2);

        vm.prank(OTHER);
        vm.expectRevert("Not your listing");
        marketplace.cancelListing(listingId);
    }

    function testCannotCancelAlreadyInactiveListing() public {
        uint256 listingId = _createListing(2);

        vm.prank(SELLER);
        marketplace.cancelListing(listingId);

        vm.prank(SELLER);
        vm.expectRevert("Already inactive");
        marketplace.cancelListing(listingId);
    }
}
