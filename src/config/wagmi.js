// src/config/wagmi.js
import { createConfig, http } from 'wagmi'
import { sepolia } from 'wagmi/chains'
import { injected, walletConnect } from 'wagmi/connectors'

export const config = createConfig({
    chains: [sepolia],
    connectors: [
        injected(),
        walletConnect({
            projectId: process.env.REACT_APP_WALLETCONNECT_PROJECT_ID,
        }),
    ],
    transports: {
        [sepolia.id]: http(process.env.REACT_APP_SEPOLIA_RPC_URL),
    },
})