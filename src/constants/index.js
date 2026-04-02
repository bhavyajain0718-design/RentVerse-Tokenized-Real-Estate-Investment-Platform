// src/constants/index.js

// Paste your deployed contract address from Foundry broadcast output
export const PROPERTY_CONTRACT_ADDRESS = "0x67df08a6e65baa45ff98552e2d17a313f4b0674e"

// Copy ABI from:
// rentverse-contracts/out/RentVerseProperty.sol/RentVerseProperty.json
// Paste the "abi" array here
export const PROPERTY_CONTRACT_ABI = [
    {
        "type": "function",
        "name": "purchaseTokens",
        "inputs": [
            { "name": "_tokenId", "type": "uint256" },
            { "name": "_amount", "type": "uint256" }
        ],
        "stateMutability": "payable"
    },
    {
        "type": "function",
        "name": "properties",
        "inputs": [{ "name": "", "type": "uint256" }],
        "outputs": [
            { "name": "name", "type": "string" },
            { "name": "location", "type": "string" },
            { "name": "totalSupply", "type": "uint256" },
            { "name": "pricePerToken", "type": "uint256" },
            { "name": "mintedSupply", "type": "uint256" },
            { "name": "isActive", "type": "bool" },
            { "name": "propertyWallet", "type": "address" }
        ],
        "stateMutability": "view"
    },
    // ... rest of ABI from the JSON file
]