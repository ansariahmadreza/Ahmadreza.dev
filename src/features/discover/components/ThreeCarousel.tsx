"use client"
import Container from "@/app/(main)/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/swiper.css";
import img1 from "../assets/ThreeCarousel/img1.avif";
import img2 from "../assets/ThreeCarousel/img2.avif";
import img3 from "../assets/ThreeCarousel/img3.avif";
import img4 from "../assets/ThreeCarousel/img4.avif";
import img5 from "../assets/ThreeCarousel/img5.avif";
import img6 from "../assets/ThreeCarousel/img6.avif";
import img7 from "../assets/ThreeCarousel/img7.avif";
import img8 from "../assets/ThreeCarousel/img8.avif";
import img9 from "../assets/ThreeCarousel/img9.avif";
import img10 from "../assets/ThreeCarousel/img10.avif";
import img11 from "../assets/ThreeCarousel/img11.avif";
import img12 from "../assets/ThreeCarousel/img12.avif";
import img13 from "../assets/ThreeCarousel/img13.avif";
import img14 from "../assets/ThreeCarousel/img14.avif";
import img15 from "../assets/ThreeCarousel/img15.avif";
import img16 from "../assets/ThreeCarousel/img10.avif";
import Image from "next/image";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
import Bottommain from "./Bottommain";



const ThreeCarousel = () => {

    const arryImg = [
        { id: 1, image: img1, Description: "adidas Originals Italia 70s in brown and off white", Price: "£110.00" },
        { id: 2, image: img2, Description: "Nike Ava Rover reflective trainers in dark green and yellow", Price: "£129.99" },
        { id: 3, image: img3, Description: "Nike Ava Rover reflective trainers in black and grey", Price: "129.99" },
        { id: 4, image: img4, Description: "adidas Originals Italia 70s in brown and off white", Price: "£100.00" },
        { id: 5, image: img5, Description: "adidas Originals Samba OG trainers in beige and off white", Price: "£95.00" },
        { id: 6, image: img6, Description: "Asics Gel-Nimbus 28 trainers in black", Price: "£180.00" },
        { id: 7, image: img7, Description: "Nike Air Max Moto 2K trainers in white and silver", Price: "£119.99" },
        { id: 8, image: img8, Description: "Saucony Triumph 23 running trainers in grey and shadow", Price: "£170.00" },
        { id: 9, image: img9, Description: "adidas Originals Samba OG trainers in cream croc print with brown", Price: "£95.00 " },
        { id: 10, image: img10, Description: "Salomon XT-Pathway 2 trainers in black and green geko", Price: "£120.00" },
        { id: 11, image: img11, Description: " Aberrombie & Fitch long sleeve waffle henley top in white", Price: "£75.00" },
        { id: 12, image: img12, Description: "adidas Running Adizero EVO SL trainers in hot pink and red exclusive to ASOS", Price: "£130.00" },
        { id: 13, image: img13, Description: "Miss Selfridge teddy bear print mix and match pyjama", Price: "£15.99" },
        { id: 14, image: img14, Description: "KIKO Milano Glossy Lip Set - 26% saving", Price: "£25.00" },
        { id: 15, image: img15, Description: "New Balance 530 trainers in grey", Price: "£110.00" },
        { id: 16, image: img16, Description: "Mango tote bag with gold accents in black", Price: "£49.99" }
    ]

    return (
        <div>
            <Container>
                <section className="w-full mx-auto px-14 h-[300px] relative mt-[50px]">
                    <Swiper
                        className="group"
                        modules={[Navigation, Pagination]}
                        centeredSlides={false} ///disable centered slides
                        slidesPerGroup={4} /// here,4 slides move together
                        slidesPerView={4} /// here,4 slides are display at once
                        pagination={{ ///settings for the slider's pagination display and functionality
                            clickable: true, ///enables clicking on pagination indicators
                            el: ".custom-class",///specifies a custom element (using a css selector)as the container for the pagination.
                            enabled: true //fully enables the pagination component.
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
                                    <div className="pr-4 max-2xl:flex max-2xl:flex-col max-2xl:-ml-20 max-2xl:justify-start max-2xl:items-start">
                                        <p className="h-[50px] text-[15px] w-[328px] max-2xl:w-[250px]  line-clamp-2 ">{item.Description}</p>
                                        <span className="text-neutral-800 max-2xl:text-[14px] font-bold">{item.Price}</span>
                                    </div>
                                </section>
                            </SwiperSlide>
                        )}
                        {/*  customizing image pagination */}
                        <div className="custom-class text-center flex justify-center items-center "></div>
                    </Swiper>
                    {/* customizing the left navigation arrow */}
                    <section>
                        <button className="left-btn absolute  top-[60%] z-50 group-hover w-[30px] h-[30px] ">
                            <AiOutlineLeft className="cursor-pointer mt-3 text-neutral-500 hover:text-neutral-950 ml-[-50px] text-[55px]" />
                        </button>
                    </section>
                    {/* customizing the Right navigation arrow */}
                    <section className="flex justify-end">
                        <button className="Right-btn  absolute top-[60%] z-50 group-hover w-[30px] h-[30px]">
                            <AiOutlineRight className="cursor-pointer pl-[25px] text-[80px] text-neutral-500 hover:text-neutral-950" />
                        </button>
                    </section>
                </section>
            </Container>
            <Bottommain />
        </div>
    )
};
export default ThreeCarousel;