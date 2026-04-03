import { ethers } from "ethers";
import marketplaceArtifact from "../abis/Marketplace.json";
import propertyArtifact from "../abis/Property.json";

const MARKETPLACE_ADDRESS = "0x7a64ecd16aba0c8aafeac957c51b8acf6421e5ff";
const PROPERTY_ADDRESS = "0xd60f1fa6082e08807d766e76794d770acde2cb5f";

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
