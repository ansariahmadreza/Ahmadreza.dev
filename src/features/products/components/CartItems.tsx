"use client"
import { formatNumberWithCommas, routes, useCartContext } from "@/shared";
import Image from "next/image";
import { allImg } from "@/shared";
import { X } from 'lucide-react';
import QtyCart from "./QtyCart";
import CartSizeManager from "./CartSizeManager";
import Link from "next/link";


const CartItems = () => {
    const { ProductItems, handle_Remove_Product, handle_Size_Product, selectedSize } = useCartContext()

    //calculates the total price of all products by multiplaying the price of each product by its quantity and summing them up.
    //if a product is not found or the price is invalid,it defaults to 0.
    const totalPrice = ProductItems.reduce((total, item) => {
        const selectedProduct = allImg.find(p => p.id === item.id)
        //extracts the price from the string,conerts it to a number,and multiplies by the quantity.
        //defaults to 0 if the product or price is not found
        return total + (Number(selectedProduct?.price.split("£")[1]?.trim() || 0)) * item.qty
    }, 0)


    //creates a list of displayed products by combining the main product information with the selected size and quantity.
    const showProduct = ProductItems.map(item => {
        const product = allImg.find(p => p.id === item.id)!  // find the complete product using its ID
        //combine product properties with size and quantity from  the current item
        return {
            ...product,// copy all original product properties
            size: item.size,//add the  size
            qty: item.qty,// add the quantity
        }
    })

    return (
        <section className="grid grid-cols-2  justify-center ml-[280px]  items-center ">
            <div className="min-h-screen flex flex-col gap-4 justify-center items-center">
                {
                    showProduct.map((item, index) =>
                        <section key={index} className="grid grid-cols-3 shadow-2xs bg-[#eeeeee] ">

                            <div>
                                <Image src={item.imgBef} alt="img" />
                            </div>

                            <div className="flex flex-col ml-[-50px] mt-3">
                                <span className="text-[14px]">{item.price}</span>
                                <p className="text-[13px] w-[250px]">{item.description}</p>
                                <section className="flex items-center justify-baseline">
                                    <QtyCart size_selector={item.QtyProduct} id={item.id} qty={item.qty} size={item.size} />
                                    <div className="mt-2 ml-6">
                                        <CartSizeManager id={item.id} size={item.size} qty={item.qty} size_selector={item.QtyProduct} />
                                    </div>
                                </section>
                            </div>

                            <div className="mt-2 mr-2 flex justify-end">
                                <X className="cursor-pointer" onClick={() => handle_Remove_Product(item.id, item.size)} />
                            </div>
                        </section>
                    )
                }
            </div>
            <section className="bg-[#eeeeee] w-[300px] h-[200px] mt-[-70px] p-4 ml-4">
                <div className="border-b border-black px-6 pb-2">
                    <h1 className="">TOTAL</h1>
                </div>

                <div className="flex justify-between mx-6 mt-2">
                    <p>sub-total</p>
                    <p>£{formatNumberWithCommas(totalPrice)}</p>
                </div>

                <div>
                    <p className="mx-6 mt-2">Delivery</p>
                </div>

                <section className="flex justify-center items-center mt-6">
                    <Link href={routes.shippingform}>
                        <button onClick={() => ProductItems.forEach(item => handle_Size_Product(item.id, item.size, selectedSize))} className=" bg-[#018849]  
                         text-[#ffffff] font-bold w-[200px] h-10 hover:bg-[#05683a] cursor-pointer">CHECKOUT</button>
                    </Link>
                </section>
            </section>
        </section >
    )
};
export default CartItems;