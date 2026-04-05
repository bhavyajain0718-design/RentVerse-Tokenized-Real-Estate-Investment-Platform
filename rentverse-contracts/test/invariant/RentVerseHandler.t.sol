// SPDX-License-Identifier: MIT
pragma solidity ^0.8.30;

import {Test} from "forge-std/Test.sol";
import {RentVerseProperty} from "../../src/RentVerseProperty.sol";
import {RentVerseMarketplace} from "../../src/RentVerseMarketplace.sol";
import {RentVerseRentDistributor} from "../../src/RentVerseRentDistributor.sol";

contract RentVerseHandler is Test {
    RentVerseProperty internal immutable property;
    RentVerseMarketplace internal immutable marketplace;
    RentVerseRentDistributor internal immutable distributor;
    address internal immutable propertyManager;

    address[] internal actors;
    uint256 internal claimedOut;

    constructor(
        RentVerseProperty _property,
        RentVerseMarketplace _marketplace,
        RentVerseRentDistributor _distributor,
        address _propertyManager
    ) {
        property = _property;
        marketplace = _marketplace;
        distributor = _distributor;
        propertyManager = _propertyManager;

        actors.push(makeAddr("actor1"));
        actors.push(makeAddr("actor2"));
        actors.push(makeAddr("actor3"));
        actors.push(makeAddr("actor4"));
    }

    function purchasePrimary(uint256 actorSeed, uint256 amount) external {
        (, , uint256 totalSupply, uint256 pricePerToken, uint256 mintedSupply, bool isActive, ) = property.properties(0);
        if (!isActive || mintedSupply >= totalSupply) return;

        address actor = _actor(actorSeed);
        uint256 available = totalSupply - mintedSupply;
        amount = bound(amount, 1, available);

        vm.deal(actor, actor.balance + (pricePerToken * amount));
        vm.prank(actor);
        property.purchaseTokens{value: pricePerToken * amount}(0, amount);
    }

    function listSecondary(uint256 actorSeed, uint256 amount, uint256 priceEach) external {
        address actor = _actor(actorSeed);
        uint256 balance = property.balanceOf(actor, 0);
        if (balance == 0) return;

        amount = bound(amount, 1, balance);
        priceEach = bound(priceEach, 1, 1 ether);

        vm.prank(actor);
        property.setApprovalForAll(address(marketplace), true);

        vm.prank(actor);
        marketplace.listTokens(0, amount, priceEach);
    }

    function buySecondary(uint256 actorSeed, uint256 listingSeed, uint256 amount) external {
        uint256 listingCount = marketplace.nextListingId();
        if (listingCount == 0) return;

        uint256 listingId = bound(listingSeed, 0, listingCount - 1);
        (address seller, , uint256 listedAmount, uint256 priceEach, bool isActive) = marketplace.listings(listingId);
        if (!isActive || listedAmount == 0) return;

        address actor = _actor(actorSeed);
        if (actor == seller) return;

        amount = bound(amount, 1, listedAmount);
        vm.deal(actor, actor.balance + (priceEach * amount));

        vm.prank(actor);
        marketplace.buyTokens{value: priceEach * amount}(listingId, amount);
    }

    function cancelSecondary(uint256 listingSeed) external {
        uint256 listingCount = marketplace.nextListingId();
        if (listingCount == 0) return;

        uint256 listingId = bound(listingSeed, 0, listingCount - 1);
        (address seller, , , , bool isActive) = marketplace.listings(listingId);
        if (!isActive) return;

        vm.prank(seller);
        marketplace.cancelListing(listingId);
    }

    function depositRent(uint256 amount) external {
        (, , , , uint256 mintedSupply, bool isActive, ) = property.properties(0);
        if (!isActive || mintedSupply == 0) return;

        amount = bound(amount, 1 wei, 100 ether);
        vm.deal(propertyManager, propertyManager.balance + amount);

        vm.prank(propertyManager);
        distributor.depositRent{value: amount}(0);
    }

    function claimRent(uint256 actorSeed) external {
        address actor = _actor(actorSeed);
        uint256 investorTokens = property.balanceOf(actor, 0);
        if (investorTokens == 0) return;

        (, , , , uint256 mintedSupply, bool isActive, ) = property.properties(0);
        if (!isActive || mintedSupply == 0) return;

        uint256 share = (distributor.totalRentDeposited(0) * investorTokens) / mintedSupply;
        uint256 alreadyClaimed = distributor.lastClaimed(0, actor);
        if (share <= alreadyClaimed) return;

        uint256 balanceBefore = actor.balance;
        vm.prank(actor);
        distributor.claimRent(0);
        claimedOut += actor.balance - balanceBefore;
    }

    function actorsLength() external view returns (uint256) {
        return actors.length;
    }

    function actorAt(uint256 index) external view returns (address) {
        return actors[index];
    }

    function totalClaimedOut() external view returns (uint256) {
        return claimedOut;
    }

    function _actor(uint256 seed) internal view returns (address) {
        return actors[seed % actors.length];
    }
}
