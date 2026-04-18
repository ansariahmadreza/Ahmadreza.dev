"use client"
import Container from "@/app/(main)/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/swiper.css";
import img1 from "../assets/Two-Carousel/CarTwo1.avif";
import img2 from "../assets/Two-Carousel/CarTwo2.avif";
import img3 from "../assets/Two-Carousel/CarTwo3.avif";
import img4 from "../assets/Two-Carousel/CarTwo4.avif";
import img5 from "../assets/Two-Carousel/CarTwo5.avif";
import img6 from "../assets/Two-Carousel/CarTwo6.avif";
import img7 from "../assets/Two-Carousel/CarTwo7.avif";
import img8 from "../assets/Two-Carousel/CarTwo8.avif";
import img9 from "../assets/Two-Carousel/CarTwo9.avif";
import img10 from "../assets/Two-Carousel/CarTwo10.avif";
import img11 from "../assets/Two-Carousel/CarTwo11.avif";
import img12 from "../assets/Two-Carousel/CarTwo12.avif";
import img13 from "../assets/Two-Carousel/CarTwo13.avif";
import img14 from "../assets/Two-Carousel/CarTwo14.avif";
import img15 from "../assets/Two-Carousel/CarTwo15.avif";
import img16 from "../assets/Two-Carousel/CarTwo10.avif";
import Image from "next/image";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
import ThreeCarousel from "./ThreeCarousel";
import Link from "next/link";
import { routes } from "@/shared";


const TwoCoursel = () => {

    const arryImg = [
        { id: 1, image: img1, Description: "New Balance 530 trainers in white and grey", Price: "£100.00" },
        { id: 2, image: img2, Description: "Miss Selfridge bow print dressing gown", Price: "£39.99" },
        { id: 3, image: img3, Description: "Dr Dennis Gross DRx Spectralite Faceware Pro LED Face Mask", Price: "£465.00" },
        { id: 4, image: img4, Description: " ASOS DESIGN adjustable ear muffs in black faux fur", Price: "£10.00" },
        { id: 5, image: img5, Description: "Dragon Diffusion Nantucket bag in black", Price: "£407.00" },
        { id: 6, image: img6, Description: "ASOS DESIGN waterproof stainless steel bracelet with toggle detail in gold tone with gift bag", Price: "£12.00" },
        { id: 7, image: img7, Description: "Kat The Label Sidney robe in black", Price: "£99.00" },
        { id: 8, image: img8, Description: "NEOM Room Diffuser Wellbeing Pod", Price: "£99.00" },
        { id: 9, image: img9, Description: "New Balance 740 in Beige and Brown Exclusive to ASOS", Price: "£100.00 " },
        { id: 10, image: img10, Description: "Bobbi Brow Vitamin Enriched Face Base Duo - 20% Saving", Price: "£86.00" },
        { id: 11, image: img11, Description: " Aberrombie & Fitch long sleeve waffle henley top in white", Price: "£75.00" },
        { id: 12, image: img12, Description: " Mango wool mix tailored coat in tan", Price: "£149.99" },
        { id: 13, image: img13, Description: "Miss Selfridge teddy bear print mix and match pyjama", Price: "£15.99" },
        { id: 14, image: img14, Description: "KIKO Milano Glossy Lip Set - 26% saving", Price: "£25.00" },
        { id: 15, image: img15, Description: "New Balance 530 trainers in grey", Price: "£110.00" },
        { id: 16, image: img16, Description: "Mango tote bag with gold accents in black", Price: "£49.99" }
    ]

    return (
        <div>
            <Container>
                <section className="w-full mx-auto px-14 h-[300px] relative mt-[150px]">
                    <h1 className="text-center font-bold text-3xl mb-5 mt-10">Gifts for her</h1>
                    <Swiper
                        className=" group "
                        modules={[Navigation, Pagination]}
                        centeredSlides={false}///disable centered slides
                        slidesPerGroup={4} /// here,4 slides move together
                        slidesPerView={4}/// here,4 slides are display at once
                        pagination={{ ///settings for the slider's pagination display and functionality
                            clickable: true,///enables clicking on pagination indicators
                            el: ".custom-class",///specifies a custom element (using a css selector)as the container for the pagination.
                            enabled: true  //fully enables the pagination component.
                        }}
                        navigation={{
                            prevEl: ".left-btn", /// previous slide 
                            nextEl: ".Right-btn", ///next slide
                            enabled: true /// navigation enabled
                        }}
                    >
                        {arryImg.map((item) =>
                            <SwiperSlide key={item.id}>
                                <section className="flex flex-col items-center justify-center w-[365px]  mb-10">
                                    <Image src={item.image} alt="img" className="w-[364.25px] h-[400px]" />
                                    <div className="pr-4 ml-[-13px] max-2xl:flex max-2xl:flex-col max-2xl:justify-start max-2xl:ml-[-50px]">
                                        <p className="h-[50px] w-[328px] max-2xl:w-[275px] 
                                        max-2xl:-ml-2.5 text-[15px]  line-clamp-2">{item.Description}</p>
                                        <span className="text-neutral-800 font-bold max-2xl:text-[14px] max-2xl:-ml-2.5">{item.Price}</span>
                                    </div>
                                </section>
                            </SwiperSlide>
                        )}
                        {/*  customizing image pagination */}
                        <div className="custom-class text-center flex justify-center items-center "></div>
                    </Swiper>
                    {/* customizing the left navigation arrow */}
                    <section>
                        <button className="left-btn absolute  top-[70%] z-50 group-hover w-[30px] h-[30px] ">
                            <AiOutlineLeft className="cursor-pointer mt-3 text-neutral-500 hover:text-neutral-950 ml-[-50px] text-[55px]" />
                        </button>
                    </section>
                    {/* customizing the Right navigation arrow */}
                    <section className="flex justify-end">
                        <button className="Right-btn  absolute top-[70%] z-50 group-hover w-[30px] h-[30px]">
                            <AiOutlineRight className="cursor-pointer pl-[25px] text-[80px] text-neutral-500 hover:text-neutral-950" />
                        </button>
                    </section>
                </section>
            </Container>

            <div className="mt-[350px] flex flex-col justify-center items-center">
                <Link href={routes.Product.Clothes} target="_blank" rel="noopener noreferrer">
                    <button className="bg-black text-white py-2 px-20  cursor-pointer">
                        SHOP NOW
                    </button>
                </Link>

                <h1 className="my-10 font-bold text-3xl">Just-dropped trainers</h1>
            </div>
            <ThreeCarousel />
        </div>
    )
};
export default TwoCoursel;