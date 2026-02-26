import type { Metadata } from "next";
import StoreClient from "./StoreClient";

export const metadata: Metadata = {
    title: "Our Store | Paz Garrity Antiques",
    description: "Visit our physical showroom in Lowell, MA or shop our curated eBay collection online. Quality antiques and vintage treasures.",
};

export default function StorePage() {
    return <StoreClient />;
}
