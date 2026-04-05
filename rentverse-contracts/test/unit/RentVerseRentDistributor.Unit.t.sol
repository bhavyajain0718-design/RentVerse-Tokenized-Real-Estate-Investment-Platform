// SPDX-License-Identifier: MIT
pragma solidity ^0.8.30;

import {RentVerseFixture} from "../helpers/RentVerseFixture.sol";

contract RentVerseRentDistributorUnitTest is RentVerseFixture {
    function setUp() public override {
        super.setUp();
        _buyPrimary(INVESTOR_ONE, 10);
        _buyPrimary(INVESTOR_TWO, 30);
    }

    // Verifies multiple deposits are accumulated in both storage and contract balance.
    function testDepositAccumulatesTotalRentDeposited() public {
        vm.startPrank(PROPERTY_MANAGER);
        distributor.depositRent{value: 1 ether}(TOKEN_ID);
        distributor.depositRent{value: 2 ether}(TOKEN_ID);
        vm.stopPrank();

        assertEq(distributor.totalRentDeposited(TOKEN_ID), 3 ether);
        assertEq(address(distributor).balance, 3 ether);
    }

    // Verifies later claims only pay the additional rent earned since the last claim.
    function testClaimAfterSecondDepositOnlyPaysIncrementalShare() public {
        vm.prank(PROPERTY_MANAGER);
        distributor.depositRent{value: 4 ether}(TOKEN_ID);

        vm.prank(INVESTOR_ONE);
        distributor.claimRent(TOKEN_ID);

        uint256 balanceBeforeSecondClaim = INVESTOR_ONE.balance;

        vm.prank(PROPERTY_MANAGER);
        distributor.depositRent{value: 2 ether}(TOKEN_ID);

        vm.prank(INVESTOR_ONE);
        distributor.claimRent(TOKEN_ID);

        assertEq(INVESTOR_ONE.balance - balanceBeforeSecondClaim, 0.5 ether);
        assertEq(distributor.lastClaimed(TOKEN_ID, INVESTOR_ONE), 1.5 ether);
    }

    // Verifies the total amount claimed by all investors never exceeds deposited rent.
    function testClaimsFromAllInvestorsNeverExceedDepositPool() public {
        _buyPrimary(INVESTOR_THREE, 20);

        vm.prank(PROPERTY_MANAGER);
        distributor.depositRent{value: 12 ether}(TOKEN_ID);

        uint256 investorOneBalanceBefore = INVESTOR_ONE.balance;
        uint256 investorTwoBalanceBefore = INVESTOR_TWO.balance;
        uint256 investorThreeBalanceBefore = INVESTOR_THREE.balance;

        vm.prank(INVESTOR_ONE);
        distributor.claimRent(TOKEN_ID);

        vm.prank(INVESTOR_TWO);
        distributor.claimRent(TOKEN_ID);

        vm.prank(INVESTOR_THREE);
        distributor.claimRent(TOKEN_ID);

        uint256 totalClaimed =
            (INVESTOR_ONE.balance - investorOneBalanceBefore) +
            (INVESTOR_TWO.balance - investorTwoBalanceBefore) +
            (INVESTOR_THREE.balance - investorThreeBalanceBefore);

        assertEq(totalClaimed, 12 ether);
        assertEq(address(distributor).balance, 0);
    }
}
