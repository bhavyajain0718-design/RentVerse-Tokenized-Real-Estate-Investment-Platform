// script/DeployRentVerse.s.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.30;

import {Script} from "forge-std/Script.sol";
import "forge-std/console.sol";
import {RentVerseProperty} from "../src/RentVerseProperty.sol";
import {RentVerseRentDistributor} from "../src/RentVerseRentDistributor.sol";
import {RentVerseMarketplace} from "../src/RentVerseMarketplace.sol";

contract DeployRentVerse is Script {
    address payable constant PROPERTY_MANAGER =
        payable(0xC7C18Ef07E20d49F3451d95d19986a55dA1D6A82);

    function deploy()
        public
        returns (
            RentVerseProperty property,
            RentVerseMarketplace marketplace,
            RentVerseRentDistributor distributor
        )
    {
        // 1. Deploy Property Contract
        property = new RentVerseProperty();

        // 2. Deploy Marketplace (IMPORTANT 🔥)
        marketplace = new RentVerseMarketplace(address(property));

        // 3. Deploy Rent Distributor
        distributor = new RentVerseRentDistributor(address(property));

        // 4. Create initial property
        property.listProperty(
            "Modern Villa with Pool",
            "Austin, TX",
            85000,
            0.003 ether,
            PROPERTY_MANAGER
        );
    }

    function run() external {
        vm.startBroadcast();

        (
            RentVerseProperty property,
            RentVerseMarketplace marketplace,
            RentVerseRentDistributor distributor
        ) = deploy();

        vm.stopBroadcast();

        // 🔥 LOG ADDRESSES (VERY IMPORTANT FOR FRONTEND)
        console.log("Property:", address(property));
        console.log("Marketplace:", address(marketplace));
        console.log("Distributor:", address(distributor));
    }
}
