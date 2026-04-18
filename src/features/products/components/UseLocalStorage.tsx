"use client"
import { Heart } from 'lucide-react';
import { useCartContext } from "@/shared";
import { Rootid } from '../types/typeProduct';

const LocalStorgeHeart = ({ id }: Rootid) => {
    const { handle_Faverite_Product, Favorites } = useCartContext()

    return (
        <div className='relative -mr-1 mt-40'>
            <button onClick={() => { handle_Faverite_Product(id) }}  >
                <Heart className={` absolute w-[35px] h-8 px-1.5 py-1.5 bottom-[-170px] bg-neutral-200 rounded-full 
                        right-2 font-bold  hover:fill-black cursor-pointer  ${Favorites.some(fav => fav.id === id) ? "fill-black" : "fill-none"}  `} />
            </button>
        </div>
    )
};
export default LocalStorgeHeart;