import { allImg, useCartContext } from "@/shared";
import { X } from 'lucide-react';

const Sort = () => {
    const { setFlagSort } = useCartContext()
  
    const handlerPriceCheap = () => {
        allImg.sort((a, b) => parseInt(a.price.split("£")[1].trim()) - parseInt(b.price.split("£")[1].trim()))
    }

    const handlerPriceExpensive = () => {
        allImg.sort((a, b) => parseInt(b.price.split("£")[1].trim()) - parseInt(a.price.split("£")[1].trim()))
    }

    return (
        <section className="left-0  bg-neutral-300  h-[1200px] w-[200px]  z-50 absolute">
            <X onClick={() => { setFlagSort(false) }} className="cursor-pointer float-right" />

            <div className="mt-35">
                <button className="cursor-pointer border bg-black text-white p-2" onClick={() => { handlerPriceCheap() }}>
                    cheapToExpensive
                </button>

                <button className="cursor-pointer mt-20 border bg-black text-white p-2" onClick={() => { handlerPriceExpensive() }}>
                    ExpensiveToCheap
                </button>
            </div>
        </section>
    )
};
export default Sort;