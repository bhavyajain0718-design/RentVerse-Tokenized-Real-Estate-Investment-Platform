import { ethers } from "ethers";
import marketplaceArtifact from "../abis/Marketplace.json";
import propertyArtifact from "../abis/Property.json";

const MARKETPLACE_ADDRESS = "0x23c66b525e26b41bbafaea421b9ce596fb968b77";
const PROPERTY_ADDRESS = "0x613a0e2db63f2c0185ac8b19b69984e0a3849628";

export const getProvider = () => {
    return new ethers.providers.Web3Provider(window.ethereum);
};

export const getSigner = async () => {
    const provider = getProvider();
    await provider.send("eth_requestAccounts", []);
    return provider.getSigner();
};

export const getContracts = async () => {
    const signer = await getSigner();

    return {
        marketplace: new ethers.Contract(
            MARKETPLACE_ADDRESS,
            marketplaceArtifact.abi,
            signer
        ),
        property: new ethers.Contract(
            PROPERTY_ADDRESS,
            propertyArtifact.abi,
            signer
        ),
    };
};
