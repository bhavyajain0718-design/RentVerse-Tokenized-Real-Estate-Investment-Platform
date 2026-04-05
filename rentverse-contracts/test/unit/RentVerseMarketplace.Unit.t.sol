// SPDX-License-Identifier: MIT
pragma solidity ^0.8.30;

import {ERC1155Holder} from "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol";
import {RentVerseProperty} from "../../src/RentVerseProperty.sol";
import {RentVerseMarketplace} from "../../src/RentVerseMarketplace.sol";
import {RentVerseFixture} from "../helpers/RentVerseFixture.sol";

contract RevertingSeller is ERC1155Holder {
    function buyPrimary(address property, uint256 tokenId, uint256 amount) external payable {
        RentVerseProperty(property).purchaseTokens{value: msg.value}(tokenId, amount);
    }

    function approveMarketplace(address property, address marketplace) external {
        RentVerseProperty(property).setApprovalForAll(marketplace, true);
    }

    function list(address marketplace, uint256 tokenId, uint256 amount, uint256 priceEach) external returns (uint256) {
        return RentVerseMarketplace(marketplace).listTokens(tokenId, amount, priceEach);
    }

    receive() external payable {
        revert("seller rejects ETH");
    }
}

contract RentVerseMarketplaceUnitTest is RentVerseFixture {
    function setUp() public override {
        super.setUp();
        _buyPrimary(SELLER, 10);
    }

    // Verifies multiple partial purchases keep listing balances and escrow accounting consistent.
    function testPartialBuysByMultipleInvestorsPreserveListingAccounting() public {
        uint256 listingId = _listTokens(SELLER, 6, LIST_PRICE);

        vm.prank(BUYER);
        marketplace.buyTokens{value: LIST_PRICE * 2}(listingId, 2);

        vm.prank(OTHER);
        marketplace.buyTokens{value: LIST_PRICE}(listingId, 1);

        assertEq(property.balanceOf(BUYER, TOKEN_ID), 2);
        assertEq(property.balanceOf(OTHER, TOKEN_ID), 1);
        assertEq(property.balanceOf(address(marketplace), TOKEN_ID), 3);
        assertEq(property.balanceOf(SELLER, TOKEN_ID), 4);

        (, , uint256 amount, uint256 priceEach, bool isActive) = marketplace.listings(listingId);
        assertEq(amount, 3);
        assertEq(priceEach, LIST_PRICE);
        assertTrue(isActive);
    }

    // Verifies failed seller payouts revert the purchase without losing escrowed tokens.
    function testBuyRevertsCleanlyWhenSellerCannotReceiveEth() public {
        RevertingSeller sellerContract = new RevertingSeller();

        vm.deal(address(sellerContract), 10 ether);
        vm.prank(OWNER);
        RentVerseProperty altProperty = new RentVerseProperty();
        RentVerseMarketplace altMarketplace = new RentVerseMarketplace(address(altProperty));

        vm.prank(OWNER);
        altProperty.listProperty(
            "Escrowed Property",
            "Seattle, WA",
            TOTAL_SUPPLY,
            TOKEN_PRICE,
            payable(PROPERTY_MANAGER)
        );

        sellerContract.buyPrimary{value: TOKEN_PRICE * 4}(address(altProperty), TOKEN_ID, 4);
        sellerContract.approveMarketplace(address(altProperty), address(altMarketplace));
        uint256 listingId = sellerContract.list(address(altMarketplace), TOKEN_ID, 4, LIST_PRICE);

        vm.prank(BUYER);
        vm.expectRevert(RentVerseMarketplace.PaymentFailed.selector);
        altMarketplace.buyTokens{value: LIST_PRICE}(listingId, 1);

        assertEq(altProperty.balanceOf(address(sellerContract), TOKEN_ID), 0);
        assertEq(altProperty.balanceOf(address(altMarketplace), TOKEN_ID), 4);

        (, , uint256 amount, , bool isActive) = altMarketplace.listings(listingId);
        assertEq(amount, 4);
        assertTrue(isActive);
    }
}
