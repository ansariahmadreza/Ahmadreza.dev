import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useEffect, useState } from "react";
import { useCartContext } from "@/shared";
import { propsRootSize } from "../types/typeProduct";


const QtyCart = ({ id, size_selector, size }: propsRootSize) => {

    const { handle_Decrease_Product, handle_Increase_Product, ProductItems } = useCartContext()
    const [saveQty, setSaveQty] = useState("") ///previous qty value


    useEffect(() => { ///disable scrolling
        const observe = new MutationObserver(() => {
            const body = document.querySelector('body') ///create a mutationobserver to watch for attribute changes in the dom
            if (body?.getAttribute('data-scroll-locked') === "1") { //check if the attribue data-scroll-locked is set to "1" (scroll-locked)
                body.removeAttribute("data-scroll-locked")
            }
        })
        observe.observe(document.body, {
            attributes: true,///review only the changes in attributes
            attributeFilter: ["data-scroll-locked"] //focusing on this attribute
        })
        return () => observe.disconnect() // Cleanup: disconnect observer when the component unmounts
    }, [])

    const handleQty = (qtyProduct: string) => {
        setSaveQty(qtyProduct)
        if (Number(qtyProduct >= saveQty)) {
            handle_Increase_Product(id, parseInt(qtyProduct), size)
        } else {
            handle_Decrease_Product(id, parseInt(qtyProduct), size)
        }
    };

    const valueQty = ProductItems.find((item) => item.id === id && item.size === size
        && item.qty !== parseInt(saveQty))! ///displaying the unique quantity for each product

    return (
        <Select value={saveQty} onValueChange={(e) => { handleQty(e) }}>
            <SelectTrigger className="w-[79px] mt-2 h-[15px] ">
                <SelectValue placeholder={valueQty?.qty} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {
                        size_selector?.map((item, index) =>
                            <SelectItem key={index} value={item.qty.toString()} >{item.qty}</SelectItem>
                        )
                    }
                </SelectGroup>
            </SelectContent>
        </Select>
    )
};
export default QtyCart;