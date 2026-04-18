import { Faveritelist } from "@/features/products";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Saved Items | ASOS"
};

const Faverite = () => {
    return (
        <div>
            <Faveritelist />
        </div>
    )
};
export default Faverite;