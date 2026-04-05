// test/RentVerseProperty.t.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.30;

import {Test} from "forge-std/Test.sol";
import {RentVerseProperty} from "../src/RentVerseProperty.sol";

contract RentVersePropertyTest is Test {
    RentVerseProperty property;
    address USER = makeAddr("user");
    address NON_OWNER = makeAddr("nonOwner");
    uint256 constant TOKEN_PRICE = 0.003 ether;

    receive() external payable {}

    function setUp() public {
        property = new RentVerseProperty();
        property.listProperty(
            "Modern Villa",
            "Austin, TX",
            85000,
            TOKEN_PRICE,
            payable(address(this))
        );
    }

    // Verifies a buyer receives the expected ERC1155 tokens after purchase.
    function testPurchaseTokens() public {
        vm.deal(USER, 1 ether);
        vm.prank(USER);
        property.purchaseTokens{value: TOKEN_PRICE * 10}(0, 10);
        assertEq(property.balanceOf(USER, 0), 10);
    }

    // Verifies purchases cannot mint more tokens than the configured supply.
    function testCannotOvermint() public {
        vm.deal(USER, 1000 ether);
        vm.prank(USER);
        vm.expectRevert(RentVerseProperty.ExceedsSupply.selector);
        property.purchaseTokens{value: TOKEN_PRICE * 85001}(0, 85001);
    }

    // Verifies random valid purchase amounts mint the same number of tokens.
    function testFuzz_purchaseTokens(uint256 amount) public {
        amount = bound(amount, 1, 100);
        vm.deal(USER, 100 ether);
        vm.prank(USER);
        property.purchaseTokens{value: TOKEN_PRICE * amount}(0, amount);
        assertEq(property.balanceOf(USER, 0), amount);
    }

    // Verifies only the contract owner can list a new property.
    function testOnlyOwnerCanListProperty() public {
        vm.prank(NON_OWNER);
        vm.expectRevert();
        property.listProperty(
            "Unauthorized Villa",
            "Nowhere",
            100,
            TOKEN_PRICE,
            payable(NON_OWNER)
        );
    }

    // Verifies purchases revert when the sent ETH does not match the token cost.
    function testCannotPurchaseWithIncorrectEthAmount() public {
        vm.deal(USER, 1 ether);
        vm.prank(USER);
        vm.expectRevert(RentVerseProperty.IncorrectEthAmount.selector);
        property.purchaseTokens{value: TOKEN_PRICE * 2}(0, 1);
    }

    // Verifies purchases revert for properties that were never listed or are inactive.
    function testCannotPurchaseInactiveProperty() public {
        vm.deal(USER, 1 ether);
        vm.prank(USER);
        vm.expectRevert(RentVerseProperty.PropertyNotActive.selector);
        property.purchaseTokens{value: TOKEN_PRICE}(999, 1);
    }
}
