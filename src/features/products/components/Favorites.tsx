"use client"
import Image from "next/image";
import { allImg, useCartContext} from "@/shared";
import ProductSelector from "./ProductSelector";
import { UseLocalStorage } from "..";

const Faveritelist = () => {

    const { Favorites, handle_Increase_Product } = useCartContext()
    const favoriteIds = Favorites.map((item) => item.id)
    const filteredProducts = allImg.filter((product) => favoriteIds.includes(product.id))
    const { selectedSize } = useCartContext()

    return (
        <section className="min-h-screen box-border mt-10 grid grid-cols-4  place-items-center">
            {
                filteredProducts.map((item) =>
                    <div key={item.id} className='group relative '>
                        <div className="mb-[-248px]">
                            <UseLocalStorage id={item.id} />
                        </div>

                        <Image src={item.imgBef} width={300} height={300} className="my-10" alt={"imgFavorite"} />
                        <p className='text-black text-[12px] absolute bottom-40  left-0'>{item.description}</p>
                        <span className='text-[12px] font-bold absolute bottom-36  left-0'>{item.price}</span>

                        <div className="mt-7 py-6">
                            <div className="flex justify-center">
                                <ProductSelector id={item.id} size_selector={item.QtyProduct} />
                            </div>

                            <button onClick={() => handle_Increase_Product(item.id, 1, selectedSize)}
                                className=" bg-white  text-black mt-6  w-[300px]
                             border-[#05683a] border-2 h-8 mb-6 cursor-pointer">MOVE TO BAG</button>
                        </div>
                    </div>
                )}
        </section>
    )
};

export default Faveritelist;