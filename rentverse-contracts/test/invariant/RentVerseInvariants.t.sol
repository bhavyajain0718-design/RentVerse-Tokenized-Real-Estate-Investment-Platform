// SPDX-License-Identifier: MIT
pragma solidity ^0.8.30;

import {StdInvariant} from "forge-std/StdInvariant.sol";
import {Test} from "forge-std/Test.sol";
import {RentVerseProperty} from "../../src/RentVerseProperty.sol";
import {RentVerseMarketplace} from "../../src/RentVerseMarketplace.sol";
import {RentVerseRentDistributor} from "../../src/RentVerseRentDistributor.sol";
import {RentVerseHandler} from "./RentVerseHandler.t.sol";

contract RentVerseInvariantsTest is StdInvariant, Test {
    RentVerseProperty internal property;
    RentVerseMarketplace internal marketplace;
    RentVerseRentDistributor internal distributor;
    RentVerseHandler internal handler;

    address internal OWNER = makeAddr("owner");
    address internal PROPERTY_MANAGER = makeAddr("propertyManager");

    function setUp() public {
        vm.prank(OWNER);
        property = new RentVerseProperty();
        marketplace = new RentVerseMarketplace(address(property));
        distributor = new RentVerseRentDistributor(address(property));

        vm.prank(OWNER);
        property.listProperty(
            "Invariant Villa",
            "Chicago, IL",
            100,
            0.003 ether,
            payable(PROPERTY_MANAGER)
        );

        handler = new RentVerseHandler(property, marketplace, distributor, PROPERTY_MANAGER);
        targetContract(address(handler));
    }

    // Verifies minted supply never grows beyond the property's configured total supply.
    function invariant_MintedSupplyNeverExceedsTotalSupply() public view {
        (, , uint256 totalSupply, , uint256 mintedSupply, , ) = property.properties(0);
        assertLe(mintedSupply, totalSupply);
    }

    // Verifies tracked token balances plus escrow always equal the minted supply.
    function invariant_TokenConservationAcrossTrackedActorsAndEscrow() public view {
        uint256 trackedBalances;
        uint256 actorCount = handler.actorsLength();

        for (uint256 i = 0; i < actorCount; ++i) {
            trackedBalances += property.balanceOf(handler.actorAt(i), 0);
        }

        trackedBalances += property.balanceOf(address(marketplace), 0);

        (, , , , uint256 mintedSupply, , ) = property.properties(0);
        assertEq(trackedBalances, mintedSupply);
    }

    // Verifies marketplace escrow matches the sum of all active listing amounts.
    function invariant_MarketplaceEscrowMatchesActiveListings() public view {
        uint256 activeEscrow;
        uint256 listingCount = marketplace.nextListingId();

        for (uint256 i = 0; i < listingCount; ++i) {
            (, , uint256 amount, , bool isActive) = marketplace.listings(i);
            if (isActive) {
                activeEscrow += amount;
            }
        }

        assertEq(property.balanceOf(address(marketplace), 0), activeEscrow);
    }

    // Verifies deposited rent is always accounted for by claims plus remaining contract balance.
    function invariant_RentAccountingMatchesClaimsPlusContractBalance() public view {
        assertEq(
            distributor.totalRentDeposited(0),
            address(distributor).balance + handler.totalClaimedOut()
        );
    }
}
