// script/DeployRentVerse.s.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.30;

import {Script} from "forge-std/Script.sol";
import {RentVerseProperty} from "../src/RentVerseProperty.sol";
import {RentVerseRentDistributor} from "../src/RentVerseRentDistributor.sol";

contract DeployRentVerse is Script {
    function run() external {
        vm.startBroadcast();

        RentVerseProperty property = new RentVerseProperty();
        RentVerseRentDistributor distributor = new RentVerseRentDistributor(address(property));

        // List initial property (tokenId = 0)
        property.listProperty(
            "Modern Villa with Pool",
            "Austin, TX",
            85000,
            0.003 ether,
            payable(msg.sender)
        );

        vm.stopBroadcast();
    }
}