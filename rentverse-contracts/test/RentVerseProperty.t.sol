// test/RentVerseProperty.t.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.30;

import {Test, console} from "forge-std/Test.sol";
import {RentVerseProperty} from "../src/RentVerseProperty.sol";

contract RentVersePropertyTest is Test {
    RentVerseProperty property;
    address USER = makeAddr("user");
    address NON_OWNER = makeAddr("nonOwner");
    uint256 constant TOKEN_PRICE = 0.003 ether;

    // ✅ ADD THIS — allows test contract to receive ETH
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

    function testPurchaseTokens() public {
        vm.deal(USER, 1 ether);
        vm.prank(USER);
        property.purchaseTokens{value: TOKEN_PRICE * 10}(0, 10);
        assertEq(property.balanceOf(USER, 0), 10);
    }

    function testCannotOvermint() public {
        vm.deal(USER, 1000 ether);
        vm.prank(USER);
        vm.expectRevert("Exceeds supply");
        property.purchaseTokens{value: TOKEN_PRICE * 85001}(0, 85001);
    }

    function testFuzz_purchaseTokens(uint256 amount) public {
        amount = bound(amount, 1, 100);
        vm.deal(USER, 100 ether);
        vm.prank(USER);
        property.purchaseTokens{value: TOKEN_PRICE * amount}(0, amount);
        assertEq(property.balanceOf(USER, 0), amount);
    }

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

    function testCannotPurchaseWithIncorrectEthAmount() public {
        vm.deal(USER, 1 ether);
        vm.prank(USER);
        vm.expectRevert("Incorrect ETH amount");
        property.purchaseTokens{value: TOKEN_PRICE * 2}(0, 1);
    }

    function testCannotPurchaseInactiveProperty() public {
        vm.deal(USER, 1 ether);
        vm.prank(USER);
        vm.expectRevert("Property not active");
        property.purchaseTokens{value: TOKEN_PRICE}(999, 1);
    }
}
