import { useEffect } from "react";
import { propsSize } from "../types/typeProduct";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useCartContext } from "@/shared";

const ProductSelector = ({ size_selector }: propsSize) => {

    const { setSelectedSize } = useCartContext()

    useEffect(() => { ///disable scrolling
        const observe = new MutationObserver(() => { ///create a mutationobserver to watch for attribute changes in the dom
            const body = document.querySelector('body')         // Select the body element
            if (body?.getAttribute('data-scroll-locked') === "1") { //check if the attribue data-scroll-locked is set to "1" (scroll-locked)
                body.removeAttribute("data-scroll-locked")
            }
        })
        observe.observe(document.body, {
            attributes: true,  ///review only the changes in attributes
            attributeFilter: ["data-scroll-locked"]  //focusing on this attribute
        })
        return () => observe.disconnect() // Cleanup: disconnect observer when the component unmounts
    }, [])

    const handleSaveSize = (valueSize: string) => {
        setSelectedSize(valueSize)
    }

    return (
        <div>
            <Select onValueChange={handleSaveSize}>
                <SelectTrigger className="w-[250px] ">
                    <SelectValue placeholder="please select a size" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel className="font-normal">Please Select Size</SelectLabel>
                        {
                            size_selector.map((item) =>
                                <SelectItem key={item.id} value={item.size}>{item.size}</SelectItem>
                            )
                        }
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
};
export default ProductSelector;