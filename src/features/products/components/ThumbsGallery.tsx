"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Image from "next/image";
import { IcartItemsProps } from "../types/typeProduct";
import { UseLocalStorage } from "..";
import type { Swiper as SwiperType } from "swiper/types";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import ProductSelector from "./ProductSelector";
import { routes, useCartContext } from "@/shared";
import cookie from "js-cookie";
import { useRouter } from "next/navigation";


type props = {
    product_information: IcartItemsProps
};

const ThumbsGallery = ({ product_information }: props) => {

    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)
    const { handle_Increase_Product, selectedSize } = useCartContext()
    const [error, setError] = useState<string>("")
    // const [errorLogin, setErrorLogin] = useState<string>("")

    const Router = useRouter()

    const handleProduct = () => {
        if (!selectedSize) {
            setError("Please select from the available  size options")
            setTimeout(() => {
                setError("")
            }, 2000);
        } else {
            const token = cookie.get("token")
            if (token) handle_Increase_Product(product_information.id, 1, selectedSize)
            else {
                setError(`User is not registered`)
                setTimeout(() => {
                    setError("")
                    Router.push(routes.SIGN_IN)
                }, 3000);
            }
        }
    }

    return (
        <section className="min-h-screen flex justify-center items-center">
            <div className="grid grid-cols-3 w-full justify-center max-w-6xl gap-8 mt-8">
                {/*  Thumbnait */}
                <Swiper
                    onSwiper={setThumbsSwiper} /// برای گرفتن و نگه داشتن اسلایدر کوچک جهت اتصال به اسلایدر اصلی
                    slidesPerView={5} // تعداد اسلاید های کوچک که در یک زمان نمایش داده میشن
                    watchSlidesProgress={true} /// برای اینکه اسلاید های کوچک به اسلاید اصلی متصل بشن و با کلیک روی هر کدوم از اسلاید های کوچک اسلاید اصلی هم تغییر کنه
                    modules={[Navigation, Thumbs]}
                    className=" w-[70px] h-[500px] "
                    direction="vertical"
                    spaceBetween={20}
                >
                    {product_information.img_array.map((item) =>
                        <SwiperSlide key={item.id} >
                            <Image
                                src={item.img}
                                alt={product_information.description}
                                title={product_information.description}
                                width={70}
                                height={100}
                                className="cursor-pointer h-[90px] w-[70px] object-cover"
                            />
                        </SwiperSlide>
                    )};
                </Swiper>
                {/*  Main Slidert */}
                <Swiper
                    thumbs={{ swiper: thumbsSwiper }} /// اتصال اسلایدر اصلی به اسلایدر کوچک
                    navigation={{
                        prevEl: ".prev-btn", // کلاس دکمه قبلی
                        nextEl: ".next-btn"  // کلاس دکمه بعدی
                    }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    loop={true}
                    className="w-[560px] right-[146px] h-[700px] group relative"
                >
                    {
                        product_information.img_array.map((item) =>
                            <SwiperSlide key={item.id}>
                                <Image
                                    src={item.img}
                                    alt={product_information.description}
                                    title={product_information.description}
                                    width={560}
                                    height={700}
                                    className="object-cover opacity-100 w-[560px] h-[700px]"
                                />
                            </SwiperSlide>
                        )
                    };
                    {/* دکمه سمت چپ */}
                    <button className="absolute top-1/2 -translate-y-1/2 left-0 z-10  prev-btn ">
                        <AiOutlineLeft className="hover:text-black hover:border-2 hover:border-black text-3xl text-neutral-700 cursor-pointer" />
                    </button>

                    {/* دکمه سمت راست */}
                    <button className="next-btn -translate-y-1/2 absolute top-1/2 cursor-pointer right-0 z-10 next-btn">
                        <AiOutlineRight className="text-neutral-700  hover:border-2 hover:border-black   hover:text-black text-3xl cursor-pointer" />
                    </button>
                </Swiper>

                <section className="flex flex-col items-center justify-baseline  w-[300px] ml-10 ">
                    <span className="ml-9 w-[280px] text-[15px]">{product_information.description}</span>
                    <span className="font-extrabold ml-[-180px] my-6 text-neutral-600">{product_information.price}</span>

                    <section className="flex-col items-center justify-center mt-45">
                        <div className="mb-6">
                            <span className=" underline float-right text-[13px] mt-[-35px]">
                                Size_Guide
                            </span>
                            {
                                product_information.QtyProduct !== undefined && (
                                    <ProductSelector size_selector={product_information.QtyProduct} id={product_information.id} />
                                )
                            }
                            {error &&
                                <p className="text-[12px] w-[260px] ml-0.5 text-[rgb(100,92,111)] mt-5 bg-[#fae7ec] py-4 px-2">
                                    {error}
                                </p>
                            }
                        </div>
                        <button onClick={() => { handleProduct() }} className=" bg-[#018849]  
                         text-[#ffffff] font-bold w-[200px] h-10 hover:bg-[#05683a] cursor-pointer">ADD TO BAG</button>
                        <div className="mt-[-360px] ml-[55px]">
                            <UseLocalStorage id={product_information.id} />
                        </div>
                    </section>
                </section>
            </div >
        </section >
    )
};
export default ThumbsGallery;