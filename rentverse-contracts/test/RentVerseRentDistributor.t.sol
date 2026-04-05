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

    // Verifies only the configured property wallet can deposit rent.
    function testDepositRentOnlyPropertyWallet() public {
        vm.prank(INVESTOR_ONE);
        vm.expectRevert(RentVerseRentDistributor.OnlyPropertyWallet.selector);
        distributor.depositRent{value: 1 ether}(TOKEN_ID);
    }

    // Verifies rent claims are split according to each holder's token balance.
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

    // Verifies a second deposit increases future claimable rent without double-paying old rent.
    function testClaimRentAcrossMultipleDeposits() public {
        vm.startPrank(PROPERTY_MANAGER);
        distributor.depositRent{value: 4 ether}(TOKEN_ID);
        distributor.depositRent{value: 2 ether}(TOKEN_ID);
        vm.stopPrank();

        vm.prank(INVESTOR_ONE);
        distributor.claimRent(TOKEN_ID);
        assertEq(INVESTOR_ONE.balance, 10 ether - (TOKEN_PRICE * 10) + 1.5 ether);

        vm.prank(INVESTOR_ONE);
        vm.expectRevert(RentVerseRentDistributor.NothingToClaim.selector);
        distributor.claimRent(TOKEN_ID);
    }

    // Verifies zero-value rent deposits are rejected.
    function testCannotDepositZeroRent() public {
        vm.prank(PROPERTY_MANAGER);
        vm.expectRevert(RentVerseRentDistributor.NoEthSent.selector);
        distributor.depositRent{value: 0}(TOKEN_ID);
    }

    // Verifies rent cannot be deposited before any investor owns tokens.
    function testCannotDepositRentWhenNoInvestorsExist() public {
        property.listProperty(
            "Empty Property",
            "Dallas, TX",
            50,
            TOKEN_PRICE,
            payable(PROPERTY_MANAGER)
        );

        vm.prank(PROPERTY_MANAGER);
        vm.expectRevert(RentVerseRentDistributor.NoInvestorsYet.selector);
        distributor.depositRent{value: 1 ether}(1);
    }

    // Verifies accounts with no tokens cannot claim rent.
    function testCannotClaimRentWithoutHoldingTokens() public {
        vm.prank(PROPERTY_MANAGER);
        distributor.depositRent{value: 1 ether}(TOKEN_ID);

        address noTokens = makeAddr("noTokens");
        vm.prank(noTokens);
        vm.expectRevert(RentVerseRentDistributor.NoTokensHeld.selector);
        distributor.claimRent(TOKEN_ID);
    }

    // Verifies claiming before any rent deposit reverts.
    function testCannotClaimRentBeforeAnyDeposit() public {
        vm.prank(INVESTOR_ONE);
        vm.expectRevert(RentVerseRentDistributor.NothingToClaim.selector);
        distributor.claimRent(TOKEN_ID);
    }

    // Verifies rent deposits fail for unknown or inactive properties.
    function testCannotDepositRentForInactiveProperty() public {
        vm.prank(PROPERTY_MANAGER);
        vm.expectRevert(RentVerseRentDistributor.PropertyNotActive.selector);
        distributor.depositRent{value: 1 ether}(999);
    }
}
