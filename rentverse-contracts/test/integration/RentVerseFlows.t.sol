// SPDX-License-Identifier: MIT
pragma solidity ^0.8.30;

import {RentVerseFixture} from "../helpers/RentVerseFixture.sol";

contract RentVerseFlowsIntegrationTest is RentVerseFixture {
    // Verifies the full user flow across primary sales, secondary sales, and rent claims.
    function testPrimarySecondaryAndRentFlowEndToEnd() public {
        _buyPrimary(SELLER, 10);
        _buyPrimary(BUYER, 5);

        uint256 listingId = _listTokens(SELLER, 4, LIST_PRICE);

        vm.prank(OTHER);
        marketplace.buyTokens{value: LIST_PRICE * 2}(listingId, 2);

        vm.prank(SELLER);
        marketplace.cancelListing(listingId);

        vm.prank(PROPERTY_MANAGER);
        distributor.depositRent{value: 15 ether}(TOKEN_ID);

        uint256 sellerBalanceBefore = SELLER.balance;
        uint256 buyerBalanceBefore = BUYER.balance;
        uint256 otherBalanceBefore = OTHER.balance;

        vm.prank(SELLER);
        distributor.claimRent(TOKEN_ID);

        vm.prank(BUYER);
        distributor.claimRent(TOKEN_ID);

        vm.prank(OTHER);
        distributor.claimRent(TOKEN_ID);

        assertEq(property.balanceOf(SELLER, TOKEN_ID), 8);
        assertEq(property.balanceOf(BUYER, TOKEN_ID), 5);
        assertEq(property.balanceOf(OTHER, TOKEN_ID), 2);
        assertEq(SELLER.balance - sellerBalanceBefore, 8 ether);
        assertEq(BUYER.balance - buyerBalanceBefore, 5 ether);
        assertEq(OTHER.balance - otherBalanceBefore, 2 ether);
        assertEq(address(distributor).balance, 0);
    }

    // Verifies the deployed system supports a realistic post-deployment investor journey.
    function testDeploymentWiringSupportsLiveUserJourney() public {
        _buyPrimary(INVESTOR_ONE, 12);
        uint256 listingId = _listTokens(INVESTOR_ONE, 5, LIST_PRICE);

        vm.prank(INVESTOR_TWO);
        marketplace.buyTokens{value: LIST_PRICE * 3}(listingId, 3);

        vm.prank(INVESTOR_ONE);
        marketplace.cancelListing(listingId);

        vm.prank(PROPERTY_MANAGER);
        distributor.depositRent{value: 12 ether}(TOKEN_ID);

        uint256 investorOneBalanceBefore = INVESTOR_ONE.balance;
        uint256 investorTwoBalanceBefore = INVESTOR_TWO.balance;

        vm.prank(INVESTOR_ONE);
        distributor.claimRent(TOKEN_ID);

        vm.prank(INVESTOR_TWO);
        distributor.claimRent(TOKEN_ID);

        assertEq(property.balanceOf(INVESTOR_ONE, TOKEN_ID), 9);
        assertEq(property.balanceOf(INVESTOR_TWO, TOKEN_ID), 3);
        assertEq(INVESTOR_ONE.balance - investorOneBalanceBefore, 9 ether);
        assertEq(INVESTOR_TWO.balance - investorTwoBalanceBefore, 3 ether);
        assertEq(address(distributor).balance, 0);
    }
}
