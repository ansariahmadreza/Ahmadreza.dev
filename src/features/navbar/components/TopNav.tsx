import { Heart } from 'lucide-react';
import { ShoppingBag } from 'lucide-react';
import assos from "../assets/assos.svg"
import Image from 'next/image';
import Link from 'next/link';
import Btnheader from './Btnheader';
import DropDownMenu from './DropDownMenu';
import { routes, useCartContext } from '@/shared';
import Search from './Search';


const TopNav = () => {
    const { cartTotalQty } = useCartContext()
    return (
        <section className="bg-[#2d2d2d] text-white   w-full h-[60px]">
            <div className='flex justify-center items-center '>
                <Link href={routes.home} target='_blank'>
                    <Image src={assos} className='invert-100 pr-3 w-20 ' alt='ASSOS logo' />
                </Link>
                <Btnheader />
                <Search />
                <DropDownMenu />
                <Link href={routes.Product.faverite} target='_blank'>
                    <Heart className='mx-5' />
                </Link>
                <Link href={routes.Product.cartlist} >
                    <section className='flex justify-center'>
                        <ShoppingBag className=' relative' />
                        <div className='absolute mt-4 w-3.5 text-center rounded-full bg-white text-black'>
                            {
                                cartTotalQty > 0 && cartTotalQty 
                            }
                        </div>
                    </section>
                </Link>
            </div>
        </section>
    )
};

export default TopNav;