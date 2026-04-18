import Image from "next/image";
import imgBrands from "../assets/brand_desktop.avif";
import logo1 from "../assets/logo_carhartt_870x500.avif";
import nike from "../assets/nike.avif";
import logo2 from "../assets/logo_thenorthface_870x500.avif";
import logo_topman from "../assets/logo_topman_870x500.avif";
import logo_allsaints from "../assets/logo_allsaints_870x500.avif";
import logojacket from "../assets/logojackjones870x500.avif";
import Link from "next/link";
import { routes } from "@/shared";


const Bottommain = () => {
    return (
        <div className="mt-[350px] flex flex-col justify-center items-center">

            <Link href={routes.notfound} target="_blank" rel="noopener noreferrer">
                <button className="bg-black text-white py-2 px-20  cursor-pointer">
                    SHOP NOW
                </button>
            </Link>

            <figure>
                <Image src={imgBrands} alt="shop-brands" className="my-10" width={2000} height={56} />
            </figure>

            <section className="flex justify-center items-center">
                <figure>
                    <Image src={logo1} alt="logo_carhartt" width={250} height={25} />
                </figure>

                <figure>
                    <Image src={nike} alt="nike" width={250} height={25} />
                </figure>

                <figure>
                    <Image src={logo2} alt="logo_thenorthface" width={250} height={25} />
                </figure>

                <figure>
                    <Image src={logo_topman} alt="logo_topman" width={250} height={25} />
                </figure>

                <figure>
                    <Image src={logo_allsaints} alt="logo_allsaints" width={250} height={25} />
                </figure>

                <figure>
                    <Image src={logojacket} alt="logojacket" width={250} height={25} />
                </figure>
            </section>

            <h1 className="mt-16 text-2xl font-bold">TOP MEN'S CATEGORIES</h1>
            <nav className="mt-7 w-full px-20  h-[400px]">
                <ul className="grid  grid-cols-4 gap-x-40 gap-y-4 max-2xl:gap-x-20 max-2xl:gap-y-2">
                    <li className="cursor-pointer ">Men's Black Hoodies</li>
                    <li className="cursor-pointer">Men's Sweatshirts</li>
                    <li className="cursor-pointer">Men's Zipper Hoodies</li>
                    <li className="cursor-pointer">Men's Cardigans</li>
                    <li className="cursor-pointer">Men's Jumpers</li>
                    <li className="cursor-pointer">Men's Coats</li>
                    <li className="cursor-pointer">Men's Jackets</li>
                    <li className="cursor-pointer">Men's Baggy Jeans</li>
                    <li className="cursor-pointer">Men's Wide-Leg Jeans</li>
                    <li className="cursor-pointer">Men's Grey Tracksuits</li>
                    <li className="cursor-pointer">Men's Gym Tops</li>
                    <li className="cursor-pointer">Men's Long Sleeve T-Shirts</li>
                    <li className="cursor-pointer">Men's Long Sleeve Polos</li>
                    <li className="cursor-pointer">Men's Casual Shirts</li>
                    <li className="cursor-pointer">Men's Grey Suits</li>
                    <li className="cursor-pointer">Men's Navy Suits</li>
                    <li className="cursor-pointer">Men's Chinos</li>
                    <li className="cursor-pointer">Men's Cord Trousers</li>
                    <li className="cursor-pointer">Men's Smart Trousers</li>
                    <li className="cursor-pointer">Men's Briefs</li>
                    <li className="cursor-pointer">Men's Hiking Boots</li>
                    <li className="cursor-pointer">Men's Brown Boots</li>
                    <li className="cursor-pointer">Men's Lace-up Boots</li>
                    <li className="cursor-pointer">Men's Brown Loafers</li>
                    <li className="cursor-pointer">Men's Leather Loafers</li>
                    <li className="cursor-pointer">Men's Chunky Trainers</li>
                    <li className="cursor-pointer">Men's Hi-Top Trainers</li>
                    <li className="cursor-pointer">Men's Brown Trainers</li>
                    <li className="cursor-pointer">Men's Navy Trainers</li>
                    <li className="cursor-pointer">Men's Work Shoes</li>
                    <li className="cursor-pointer">Men's Belts</li>
                    <li className="cursor-pointer">Men's Wallets</li>
                    <li className="cursor-pointer">Men's Watches</li>
                    <li className="cursor-pointer">Men's Holdalls</li>
                    <li className="cursor-pointer">Men's Black Bags</li>
                    <li className="cursor-pointer">Men's Shoulder Bags</li>
                    <li className="cursor-pointer">Men's Fragrances</li>
                    <li className="cursor-pointer">Men's Skincare</li>
                    <li className="cursor-pointer">Men's Toiletry & Wash Bags</li>
                    <li className="cursor-pointer">Men's Styling Tips</li>
                </ul>
            </nav>

            <section className="mt-5 flex flex-col justify-center items-center max-2xl:mt-[35px]">

                <h1 className="font-bold text-2xl ">Wait, there’s more</h1>

                <p className="w-[600px] h-[100px] mt-5">
                    Head to the Style Feed to discover the best of ASOS all in one place – from outfit advice and new brand drops to the leading men whose style you're going to rate.
                </p>

                <button className="border-2 mb-10 cursor-pointer font-bold border-black px-10 py-2 hover:bg-black hover:text-white">
                    READ NOW
                </button>

                <p className="w-[885px] text-[16px] text-center h-[100px] leading-6 tracking-[0.6px]">
                    <span>
                        For milestones, major moments and complete wardrobe overhauls – not to mention every unplanned requirement in-between – ASOS menswear has all bases covered to kit you out in full. From laidback essentials – think men’s joggers, hoodies and shorts – to elevated basics and statement layers, find all the pieces from the brands you rate in one place. Did we mention we really know our brands? Whatever you’re into, our team taps the best edits from the labels that matter. There's Carhartt WIP for your workwear, Fred Perry or Polo Ralph Lauren for preppy silhouettes, or AllSaints for effortless separates and signature graphic tees. If we’re talking footwear, you're a click away from the hottest sneaker drops and exclusive collaborations – from classics like Nike, adidas and New Balance to performance-driven styles by On. And if you're still not sure what to wear? Head to the Style Feed for our editors’ takes on creating an effortless line-up. Let’s go.
                    </span>
                </p>
            </section>
        </div>
    )

};

export default Bottommain;