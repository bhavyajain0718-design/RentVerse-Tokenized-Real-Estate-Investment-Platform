// src/components/ConnectWallet.jsx
import { useAccount, useConnect, useDisconnect } from 'wagmi'

export function ConnectWallet() {
    const { address, isConnected } = useAccount()    // reads current wallet state
    const { connect, connectors } = useConnect()     // triggers wallet popup
    const { disconnect } = useDisconnect()           // disconnects wallet

    // If wallet is already connected, show address + disconnect button
    if (isConnected) {
        return (
            <div className="flex items-center gap-2">
                <span className="text-sm text-gray-300">
                    {/* Shortens 0x1234...5678 for display */}
                    {address.slice(0, 6)}...{address.slice(-4)}
                </span>
                <button
                    onClick={() => disconnect()}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                >
                    Disconnect
                </button>
            </div>
        )
    }

    // If not connected, show connect button
    return (
        <button
            onClick={() => connect({ connector: connectors[0] })} // connectors[0] = MetaMask
            className="bg-blue-600 text-white px-4 py-2 rounded"
        >
            Connect Wallet
        </button>
    )
}