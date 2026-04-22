"use client"
import { User } from 'lucide-react';
import Link from "next/link";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { routes, useCartContext } from '@/shared';
import cookie from "js-cookie";
import { useRouter } from 'next/navigation';

const DropDownMenu = () => {

    const Router = useRouter();
    const token = cookie.get("token");
    const { logout } = useCartContext();

    const handleAccount = () => {
        if (token) Router.push(routes.dashboord)
    };

    return (
        <div>
            <HoverCard openDelay={20} closeDelay={80} >
                <HoverCardTrigger>
                    <User className="h-6 w-6 cursor-pointer " />
                </HoverCardTrigger>

                <HoverCardContent className="ml-20 w-[300px] h-[250px] bg-white z-9999 mt-[17px] rounded-none" sideOffset={1}>
                    <section className="w-60 h-[110px] realtive">
                        <h1 className='text-black font-bold text-[16px]'>Welcome to ASOS</h1>
                        {
                            !token ? <div className="flex justify-between items-center my-4 w-full">
                                <Link href={routes.SIGN_IN} rel="noopener noreferrer">
                                    <button className="bg-neutral-700 hover:bg-black text-[15px] text-white px-10 cursor-pointer">SIGN IN</button>
                                </Link>

                                <Link href={routes.SIGN_IN} rel='noopener noreferrer'>
                                    <button className="border-neutral-300 border text-black text-[14px]
                             hover:bg-neutral-200 shadow-xl font-bold mr-[-26px] px-10 cursor-pointer">JOIN</button>
                                </Link>
                            </div> : <p className='mt-2 text-[15px] font-extrabold'>Firstname Family</p>
                        }

                        <section className='my-4 ml-[5px]'>

                            <div className='my-3'>
                                <span className="text-[14px] text-black"> <User className='inline-block  mb-1 mr-2' />
                                    <span className='text-[14px]' onClick={() => { handleAccount() }}> My Account</span></span>
                            </div>

                            <div className="text-black my-4">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='inline-block font-bold mr-3.5' width="22" height="22" viewBox="0 0 128 128">
                                    <path d="M 32 11 C 31.2 11 30.400391 11.300391 29.900391 11.900391 L 9.9003906 31.900391 C 9.3003906 32.400391 9 33.2 9 34 L 9 114 C 9 115.7 10.3 117 12 117 L 116 117 C 117.7 117 119 115.7 119 114 L 119 34 C 119 33.2 118.69961 32.400391 118.09961 31.900391 L 98.099609 11.900391 C 97.599609 11.300391 96.8 11 96 11 L 32 11 z M 33.199219 17 L 61 17 L 61 31 L 19.199219 31 L 33.199219 17 z M 67 17 L 94.800781 17 L 108.80078 31 L 67 31 L 67 17 z M 15 37 L 113 37 L 113 111 L 15 111 L 15 37 z"></path>
                                </svg>
                                <span className='text-[14px]'>
                                    My Orders
                                </span>
                            </div>

                            <div className="text-black mt-6 text-[14px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className=" inline-block mr-2 ">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M8 4h11a2 2 0 1 1 0 4h-7m-4 0h-3a2 2 0 0 1 -.826 -3.822" />
                                    <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 1.824 -1.18m.176 -3.82v-7" />
                                    <path d="M10 12h2" /><path d="M3 3l18 18" />
                                </svg>
                                <span> My Returns</span>
                            </div>
                            {
                                token && <button className='text-black mt-4 cursor-pointer  text-[12px]'
                                    onClick={() => { logout() }}>Sign Out</button>
                            }
                        </section>
                    </section>
                </HoverCardContent>
            </HoverCard >
        </div >
    );
};
export default DropDownMenu;