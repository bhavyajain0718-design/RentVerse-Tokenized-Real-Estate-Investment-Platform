// SPDX-License-Identifier: MIT
pragma solidity ^0.8.30;

import {Test} from "forge-std/Test.sol";
import {RentVerseProperty} from "../src/RentVerseProperty.sol";
import {RentVerseRentDistributor} from "../src/RentVerseRentDistributor.sol";

contract RentVerseRentDistributorTest is Test {
    RentVerseProperty property;
    RentVerseRentDistributor distributor;

    address PROPERTY_MANAGER = makeAddr("propertyManager");
    address INVESTOR_ONE = makeAddr("investorOne");
    address INVESTOR_TWO = makeAddr("investorTwo");

    uint256 constant TOKEN_PRICE = 0.003 ether;
    uint256 constant TOKEN_ID = 0;

    function setUp() public {
        property = new RentVerseProperty();
        distributor = new RentVerseRentDistributor(address(property));

        property.listProperty(
            "Modern Villa",
            "Austin, TX",
            100,
            TOKEN_PRICE,
            payable(PROPERTY_MANAGER)
        );

        vm.deal(INVESTOR_ONE, 10 ether);
        vm.deal(INVESTOR_TWO, 10 ether);
        vm.deal(PROPERTY_MANAGER, 10 ether);

        vm.prank(INVESTOR_ONE);
        property.purchaseTokens{value: TOKEN_PRICE * 10}(TOKEN_ID, 10);

        vm.prank(INVESTOR_TWO);
        property.purchaseTokens{value: TOKEN_PRICE * 30}(TOKEN_ID, 30);
    }

    function testDepositRentOnlyPropertyWallet() public {
        vm.prank(INVESTOR_ONE);
        vm.expectRevert("Only property wallet");
        distributor.depositRent{value: 1 ether}(TOKEN_ID);
    }

    function testClaimRentDistributesByMintedSupply() public {
        vm.prank(PROPERTY_MANAGER);
        distributor.depositRent{value: 4 ether}(TOKEN_ID);

        uint256 investorOneBalanceBefore = INVESTOR_ONE.balance;
        uint256 investorTwoBalanceBefore = INVESTOR_TWO.balance;

        vm.prank(INVESTOR_ONE);
        distributor.claimRent(TOKEN_ID);

        vm.prank(INVESTOR_TWO);
        distributor.claimRent(TOKEN_ID);

        assertEq(INVESTOR_ONE.balance - investorOneBalanceBefore, 1 ether);
        assertEq(INVESTOR_TWO.balance - investorTwoBalanceBefore, 3 ether);
    }

    function testClaimRentAcrossMultipleDeposits() public {
        vm.startPrank(PROPERTY_MANAGER);
        distributor.depositRent{value: 4 ether}(TOKEN_ID);
        distributor.depositRent{value: 2 ether}(TOKEN_ID);
        vm.stopPrank();

        vm.prank(INVESTOR_ONE);
        distributor.claimRent(TOKEN_ID);
        assertEq(INVESTOR_ONE.balance, 10 ether - (TOKEN_PRICE * 10) + 1.5 ether);

        vm.prank(INVESTOR_ONE);
        vm.expectRevert("Nothing to claim");
        distributor.claimRent(TOKEN_ID);
    }
}
