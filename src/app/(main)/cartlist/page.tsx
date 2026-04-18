import { CartItems } from "@/features/products";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Shopping Bag"
}

const cartlist = () => {
    return (
        <section className="min-h-full">
            <CartItems />
        </section>
    )
};
export default cartlist;