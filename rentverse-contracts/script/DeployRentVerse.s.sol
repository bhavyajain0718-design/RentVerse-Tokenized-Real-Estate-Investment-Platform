// script/DeployRentVerse.s.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.30;

import {Script} from "forge-std/Script.sol";
import "forge-std/console.sol";
import {RentVerseProperty} from "../src/RentVerseProperty.sol";
import {RentVerseRentDistributor} from "../src/RentVerseRentDistributor.sol";
import {RentVerseMarketplace} from "../src/RentVerseMarketplace.sol";

contract DeployRentVerse is Script {
    function run() external {
        vm.startBroadcast();

        // 1. Deploy Property Contract
        RentVerseProperty property = new RentVerseProperty();

        // 2. Deploy Marketplace (IMPORTANT 🔥)
        RentVerseMarketplace marketplace = new RentVerseMarketplace(address(property));

        // 3. Deploy Rent Distributor
        RentVerseRentDistributor distributor = new RentVerseRentDistributor(address(property));

        // 4. Create initial property
        property.listProperty(
            "Modern Villa with Pool",
            "Austin, TX",
            85000,
            0.003 ether,
            payable(msg.sender)
        );

        vm.stopBroadcast();

        // 🔥 LOG ADDRESSES (VERY IMPORTANT FOR FRONTEND)
        console.log("Property:", address(property));
        console.log("Marketplace:", address(marketplace));
        console.log("Distributor:", address(distributor));
    }
}