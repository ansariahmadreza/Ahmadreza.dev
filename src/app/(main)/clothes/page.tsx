import { Products } from "@/features/products";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sale: Selling fast"
};

const Clothes = () => {
    return (
        <div>
            <Products />
        </div>
    )
};

export default Clothes;