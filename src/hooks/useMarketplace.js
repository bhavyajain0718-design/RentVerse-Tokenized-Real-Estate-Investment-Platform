import { ethers } from "ethers";
import { getContracts } from "../config/web3";

export const useMarketplace = () => {

    const listTokens = async (tokenId, amount, price) => {
        const { marketplace, property } = await getContracts();

        const priceWei = ethers.utils.parseEther(price.toString());

        // check approval
        const signer = await marketplace.signer.getAddress();

        const isApproved = await property.isApprovedForAll(
            signer,
            marketplace.address
        );

        if (!isApproved) {
            const approveTx = await property.setApprovalForAll(
                marketplace.address,
                true
            );
            await approveTx.wait();
        }

        const tx = await marketplace.listTokens(
            tokenId,
            amount,
            priceWei
        );

        await tx.wait();
    };

    const buyTokens = async (listingId, amount) => {
        const { marketplace } = await getContracts();

        const listing = await marketplace.listings(listingId);

        const totalPrice =
            listing.priceEach.mul(amount);

        const tx = await marketplace.buyTokens(
            listingId,
            amount,
            { value: totalPrice }
        );

        await tx.wait();
    };

    const fetchListings = async () => {
        const { marketplace } = await getContracts();

        const total = await marketplace.nextListingId();
        const items = [];

        for (let i = 0; i < total.toNumber(); i++) {
            const l = await marketplace.listings(i);

            if (l.isActive) {
                items.push({ ...l, id: i });
            }
        }

        return items;
    };

    const cancelListing = async (listingId) => {
        const { marketplace } = await getContracts();

        const tx = await marketplace.cancelListing(listingId);
        await tx.wait();
    };

    return {
        listTokens,
        buyTokens,
        fetchListings,
        cancelListing,
    };
};
