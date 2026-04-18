"use client"
import Container from "@/app/(main)/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/swiper.css";
import img1 from "../assets/First-Carousel/car1.avif";
import img2 from "../assets/First-Carousel/car2.avif";
import img3 from "../assets/First-Carousel/car3.avif";
import img4 from "../assets/First-Carousel/car4.avif";
import img5 from "../assets/First-Carousel/car5.avif";
import img6 from "../assets/First-Carousel/car6.avif";
import img7 from "../assets/First-Carousel/car7.avif";
import img8 from "../assets/First-Carousel/car8.avif";
import img9 from "../assets/First-Carousel/car9.avif";
import img10 from "../assets/First-Carousel/car10.avif";
import img11 from "../assets/First-Carousel/car11.avif";
import img12 from "../assets/First-Carousel/car12.avif";
import img13 from "../assets/First-Carousel/car13.avif";
import img14 from "../assets/First-Carousel/car14.avif";
import img15 from "../assets/First-Carousel/car15.avif";
import img16 from "../assets/First-Carousel/car16.avif";
import Image from "next/image";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
import HomeSection from "./HomeSection";

const FirstCoursel = () => {
    const arryImg = [
        { id: 1, image: img1, Description: "ASOS DESIGN volume oversized boucle shirt in beige", Price: "£26.50" },
        { id: 2, image: img2, Description: "ASOS DESIGN smart pleated wide leg trousers in pebble texture", Price: "£35.00" },
        { id: 3, image: img3, Description: "ASOS DESIGN co-ord textured overshirt with wool in beige", Price: "£40.00" },
        { id: 4, image: img4, Description: "ASOS DESIGN co-ord tapered trouser with wool in beige", Price: "£40.00" },
        { id: 5, image: img5, Description: "ASOS DESIGN oversized bomber jacket with funnal neck in brown", Price: "£48.00" },
        { id: 6, image: img6, Description: "Rebel relaxed fit fluffy crew neck jumper in beige", Price: "£25.00" },
        { id: 7, image: img7, Description: "ASOS DESIGN harrington jacket in rust", Price: "£44.00" },
        { id: 8, image: img8, Description: "ASOS DESIGN straight carge trousers in black", Price: "£35.00" },
        { id: 9, image: img9, Description: "ASOS DESIGN straight carge trousers in black", Price: "£35.00 " },
        { id: 10, image: img10, Description: " Mango wool mix tailored coat in tan", Price: "£25.00" },
        { id: 11, image: img11, Description: " Aberrombie & Fitch long sleeve waffle henley top in white", Price: "£75.00" },
        { id: 12, image: img12, Description: " Mango wool mix tailored coat in tan", Price: "£149.99" },
        { id: 13, image: img13, Description: " Abercrombie & Fitch oversized logo cardigan in navy", Price: "£75.00" },
        { id: 14, image: img14, Description: "ASOS DESIGN straight cargo trousers in black", Price: "£35.00" },
        { id: 15, image: img15, Description: "Aberrombie & Fitch long sleeve waffle henley top in white", Price: "£45.00" },
        { id: 16, image: img16, Description: "ASOS DESIGN oversized button polo with pocket in khaki", Price: "£24.00" }
    ]
    return (
        <div>
            <Container>
                <section className="w-full  mx-auto px-14 h-[300px] relative mt-[25px]">
                    <Swiper
                        className=" group "
                        modules={[Navigation, Pagination]}
                        centeredSlides={false}
                        slidesPerGroup={4}
                        slidesPerView={4}
                        pagination={{
                            clickable: true,
                            el: ".custom-class",
                            enabled: true
                        }}
                        navigation={{
                            prevEl: ".left-btn",
                            nextEl: ".Right-btn",
                            enabled: true
                        }}
                    >
                        {arryImg.map((item) =>
                            <SwiperSlide key={item.id} >
                                <section className="flex flex-col items-center justify-center w-[365px]  mb-10">
                                    <Image src={item.image} alt="img" className="w-[364.25px] h-[400px]  max-2xl:h-[390px]" />
                                    <div className="pr-4 max-2xl:flex max-2xl:flex-col max-2xl:justify-start max-2xl:w-[300px] max-2xl:ml-[-45px]">
                                        <p className="max-2xl:h-[50px] max-2xl:text-[14px] text-[15px] max-2xl:w-[250px]">{item.Description}</p>
                                        <span className="text-neutral-800  font-bold max-2xl:text-[14px] float-left ">{item.Price}</span>
                                    </div>
                                </section>
                            </SwiperSlide>
                        )}
                        {/*  صفحه بندی تصاویر */}
                        <div className="custom-class text-center flex justify-center items-center "></div>
                    </Swiper>
                    {/* فلش سمت چپ */}
                    <section>
                        <button className="left-btn absolute  top-[50%] z-50 group-hover w-[30px] h-[30px] ">
                            <AiOutlineLeft className="cursor-pointer mt-3 text-neutral-500 hover:text-neutral-950 ml-[-50px] text-[55px]" />
                        </button>
                    </section>
                    {/* فلش سمت راست*/}
                    <section className="flex justify-end">
                        <button className="Right-btn  absolute top-[50%] z-50 group-hover w-[30px] h-[30px]">
                            <AiOutlineRight className="cursor-pointer pl-[25px] text-[80px] text-neutral-500 hover:text-neutral-950" />
                        </button>
                    </section>
                </section>
            </Container>
            <HomeSection />
        </div>
    )
};
export default FirstCoursel;