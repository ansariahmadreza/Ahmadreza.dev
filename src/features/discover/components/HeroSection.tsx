import Image from "next/image";
import Container from "@/app/(main)/Container";
import FirstCarousel from "./FirstCarousel";
import Image1 from "../assets/Banner.avif"

const HeroSection = () => {
    return (
        <section className="flex justify-center items-center flex-col">
            <figure >
                <Image src={Image1}  height={600} className="mt-5 w-[1540px] h-[600px]" alt="Baner" />
            </figure>
            <Container>
                <section className="flex justify-between items-center mt-6 px-2">
                    <h2 className="font-extrabold">Heritage looks</h2>
                    <button className="border-[3px] p-2 border-black font-bold">SHOP NEW</button>
                </section>
            </Container>
            <FirstCarousel />
        </section>
    )
};

export default HeroSection;