// src/hooks/usePurchaseTokens.js
/* global BigInt */
import { useWriteContract, useWaitForTransactionReceipt } from 'wagmi'
import { parseEther } from 'viem'
import { PROPERTY_CONTRACT_ABI, PROPERTY_CONTRACT_ADDRESS } from '../constants'

export function usePurchaseTokens() {
    // Step 1: sends transaction to MetaMask for signing
    const { writeContract, data: hash, isPending } = useWriteContract()

    // Step 2: watches blockchain until transaction is confirmed
    const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash })

    const purchase = (tokenId, amount, pricePerTokenInEth) => {
        writeContract({
            address: PROPERTY_CONTRACT_ADDRESS,
            abi: PROPERTY_CONTRACT_ABI,
            functionName: 'purchaseTokens',
            args: [BigInt(tokenId), BigInt(amount)],
            value: parseEther(String(pricePerTokenInEth * amount)), // converts to wei
        })
    }

    return {
        purchase,
        isPending,      // true = waiting for MetaMask approval
        isConfirming,   // true = tx submitted, waiting for block confirmation
        isSuccess,      // true = tx confirmed on chain
        hash            // transaction hash for Etherscan link
    }
}