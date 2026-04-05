// SPDX-License-Identifier: MIT
pragma solidity ^0.8.30;

import {Test} from "forge-std/Test.sol";
import {RentVerseProperty} from "../../src/RentVerseProperty.sol";
import {RentVerseMarketplace} from "../../src/RentVerseMarketplace.sol";
import {RentVerseRentDistributor} from "../../src/RentVerseRentDistributor.sol";

abstract contract RentVerseFixture is Test {
    RentVerseProperty internal property;
    RentVerseMarketplace internal marketplace;
    RentVerseRentDistributor internal distributor;

    address internal OWNER = makeAddr("owner");
    address internal PROPERTY_MANAGER = makeAddr("propertyManager");
    address internal SELLER = makeAddr("seller");
    address internal BUYER = makeAddr("buyer");
    address internal OTHER = makeAddr("other");
    address internal INVESTOR_ONE = makeAddr("investorOne");
    address internal INVESTOR_TWO = makeAddr("investorTwo");
    address internal INVESTOR_THREE = makeAddr("investorThree");

    uint256 internal constant TOKEN_ID = 0;
    uint256 internal constant TOKEN_PRICE = 0.003 ether;
    uint256 internal constant LIST_PRICE = 0.005 ether;
    uint256 internal constant TOTAL_SUPPLY = 100;

    function setUp() public virtual {
        vm.prank(OWNER);
        property = new RentVerseProperty();
        marketplace = new RentVerseMarketplace(address(property));
        distributor = new RentVerseRentDistributor(address(property));

        vm.prank(OWNER);
        property.listProperty(
            "Modern Villa",
            "Austin, TX",
            TOTAL_SUPPLY,
            TOKEN_PRICE,
            payable(PROPERTY_MANAGER)
        );

        vm.deal(PROPERTY_MANAGER, 100 ether);
        vm.deal(SELLER, 100 ether);
        vm.deal(BUYER, 100 ether);
        vm.deal(OTHER, 100 ether);
        vm.deal(INVESTOR_ONE, 100 ether);
        vm.deal(INVESTOR_TWO, 100 ether);
        vm.deal(INVESTOR_THREE, 100 ether);
    }

    function _buyPrimary(address account, uint256 amount) internal {
        vm.prank(account);
        property.purchaseTokens{value: TOKEN_PRICE * amount}(TOKEN_ID, amount);
    }

    function _approveMarketplace(address account) internal {
        vm.prank(account);
        property.setApprovalForAll(address(marketplace), true);
    }

    function _listTokens(address account, uint256 amount, uint256 priceEach) internal returns (uint256 listingId) {
        _approveMarketplace(account);
        vm.prank(account);
        listingId = marketplace.listTokens(TOKEN_ID, amount, priceEach);
    }
}
