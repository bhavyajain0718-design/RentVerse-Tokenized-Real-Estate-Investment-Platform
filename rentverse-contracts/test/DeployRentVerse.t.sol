// SPDX-License-Identifier: MIT
pragma solidity ^0.8.30;

import {Test} from "forge-std/Test.sol";
import {DeployRentVerse} from "../script/DeployRentVerse.s.sol";
import {RentVerseProperty} from "../src/RentVerseProperty.sol";
import {RentVerseMarketplace} from "../src/RentVerseMarketplace.sol";
import {RentVerseRentDistributor} from "../src/RentVerseRentDistributor.sol";

contract DeployRentVerseTest is Test {
    address constant PROPERTY_MANAGER =
        0xC7C18Ef07E20d49F3451d95d19986a55dA1D6A82;

    // Verifies deployment creates all contracts and wires their dependencies correctly.
    function testDeployCreatesAndWiresContracts() public {
        DeployRentVerse script = new DeployRentVerse();

        (
            RentVerseProperty property,
            RentVerseMarketplace marketplace,
            RentVerseRentDistributor distributor
        ) = script.deploy();

        assertTrue(address(property) != address(0));
        assertTrue(address(marketplace) != address(0));
        assertTrue(address(distributor) != address(0));

        assertEq(address(marketplace.propertyContract()), address(property));
        assertEq(address(distributor.propertyContract()), address(property));

        (
            string memory name,
            string memory location,
            uint256 totalSupply,
            uint256 pricePerToken,
            uint256 mintedSupply,
            bool isActive,
            address propertyWallet
        ) = property.properties(0);

        assertEq(name, "Modern Villa with Pool");
        assertEq(location, "Austin, TX");
        assertEq(totalSupply, 85000);
        assertEq(pricePerToken, 0.003 ether);
        assertEq(mintedSupply, 0);
        assertTrue(isActive);
        assertEq(propertyWallet, PROPERTY_MANAGER);
        assertEq(property.nextPropertyId(), 1);
    }

    // Verifies the script entrypoint runs end to end without reverting.
    function testRunExecutesWithoutReverting() public {
        DeployRentVerse script = new DeployRentVerse();
        script.run();
    }
}
