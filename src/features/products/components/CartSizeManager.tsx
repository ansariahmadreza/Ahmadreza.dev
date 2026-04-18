import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { propsRootSize } from "../types/typeProduct";
import { useCartContext } from "@/shared";


const CartSizeManager = ({ id, size_selector, size }: propsRootSize) => {

    const { ProductItems, handle_Size_Product } = useCartContext()
    const { setSelectedSize } = useCartContext()
    const currentSize = ProductItems.find(item => item.id === id && item.size === size )!

    const handleGetSize = (newdSize: string) => {
        handle_Size_Product(id, currentSize?.size, newdSize)
        setSelectedSize(newdSize)
    }

    return (
        <Select onValueChange={(e) => { handleGetSize(e) }}>
            <SelectTrigger className="w-[125px] h-[15px]">
                <SelectValue placeholder={currentSize?.size} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel className="font-normal">Please Select Size</SelectLabel>
                    {
                        size_selector.map((item,index) =>
                            <SelectItem key={index} value={item.size}>{item.size}</SelectItem>
                        )
                    }
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
export default CartSizeManager;