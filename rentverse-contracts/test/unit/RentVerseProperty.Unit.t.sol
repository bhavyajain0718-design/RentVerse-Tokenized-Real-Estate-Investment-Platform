// SPDX-License-Identifier: MIT
pragma solidity ^0.8.30;

import {RentVerseProperty} from "../../src/RentVerseProperty.sol";
import {RentVerseFixture} from "../helpers/RentVerseFixture.sol";

contract AcceptingWallet {
    receive() external payable {}
}

contract RentVersePropertyUnitTest is RentVerseFixture {
    // Verifies purchases update token balances, investor shares, and minted supply together.
    function testPurchaseUpdatesSupplyBalancesAndInvestorShares() public {
        _buyPrimary(INVESTOR_ONE, 7);

        (
            ,
            ,
            uint256 totalSupply,
            uint256 pricePerToken,
            uint256 mintedSupply,
            bool isActive,
            address propertyWallet
        ) = property.properties(TOKEN_ID);

        assertEq(totalSupply, TOTAL_SUPPLY);
        assertEq(pricePerToken, TOKEN_PRICE);
        assertEq(mintedSupply, 7);
        assertTrue(isActive);
        assertEq(propertyWallet, PROPERTY_MANAGER);
        assertEq(property.balanceOf(INVESTOR_ONE, TOKEN_ID), 7);
        assertEq(property.investorShares(TOKEN_ID, INVESTOR_ONE), 7);
    }

    // Verifies ETH from primary sales is forwarded to the configured property wallet.
    function testPurchaseForwardsEthToConfiguredWallet() public {
        uint256 walletBalanceBefore = PROPERTY_MANAGER.balance;

        _buyPrimary(INVESTOR_ONE, 3);

        assertEq(PROPERTY_MANAGER.balance - walletBalanceBefore, TOKEN_PRICE * 3);
    }

    // Verifies call-based payout also works when the property wallet is a contract.
    function testPurchaseForwardsEthUsingCallToContractWallet() public {
        AcceptingWallet wallet = new AcceptingWallet();
        vm.prank(OWNER);
        RentVerseProperty altProperty = new RentVerseProperty();

        vm.prank(OWNER);
        altProperty.listProperty(
            "Contract Wallet Property",
            "New York, NY",
            TOTAL_SUPPLY,
            TOKEN_PRICE,
            payable(address(wallet))
        );

        uint256 walletBalanceBefore = address(wallet).balance;
        vm.prank(INVESTOR_ONE);
        altProperty.purchaseTokens{value: TOKEN_PRICE * 2}(TOKEN_ID, 2);

        assertEq(address(wallet).balance - walletBalanceBefore, TOKEN_PRICE * 2);
        assertEq(altProperty.balanceOf(INVESTOR_ONE, TOKEN_ID), 2);
    }

    // Verifies fuzzed purchases always stay within the property's total supply bound.
    function testFuzzPurchaseMaintainsSupplyBounds(uint256 amount) public {
        amount = bound(amount, 1, TOTAL_SUPPLY);

        _buyPrimary(INVESTOR_ONE, amount);

        (, , , , uint256 mintedSupply, , ) = property.properties(TOKEN_ID);
        assertEq(mintedSupply, amount);
        assertLe(mintedSupply, TOTAL_SUPPLY);
        assertEq(property.balanceOf(INVESTOR_ONE, TOKEN_ID), amount);
    }
}
