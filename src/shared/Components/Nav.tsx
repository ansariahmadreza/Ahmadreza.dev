"use client"
import { BannerNav, NavMenu, TopNav } from '@/features/navbar';
import Headroom from 'react-headroom';

const Nav = () => {
    return (
        <section className="text-white bg-black ">
            <header>
                <Headroom className="fixed w-full z-9999">
                    <TopNav />
                    <nav className="bg-[#525050] flex justify-center items-center  ml-[-430px]">
                        <NavMenu />
                    </nav>
                </Headroom>
            </header>
            <div className="pb-[100px]">
            </div>
            <BannerNav />
        </section>
    )
};
export default Nav;