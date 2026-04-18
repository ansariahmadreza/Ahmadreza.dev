"use client"
import Link from "next/link"
//import { useIsMobile } from "../hooks/use-mobile"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import img1 from "../assets/img1.avif";
import img2 from "../assets/img2.avif";
import img3 from "../assets/img3.avif";
import img4 from "../assets/img4.avif";
import img5 from "../assets/img5.avif";
import img6 from "../assets/img6.avif";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";
import img10 from "../assets/img10.jpg";
import img11 from "../assets/img11.jpg";
import img12 from "../assets/img12.jpg";
import img13 from "../assets/img13.jpg";
import img14 from "../assets/img14.jpg";
import { IoIosLock } from "react-icons/io";
import NEW_EDITS from "../assets/NEW_EDITS.avif";
import img15 from "../assets/img15.avif";
import img16 from "../assets/img16.avif";
import img17 from "../assets/img17.avif";
import img18 from "../assets/img18.avif";
import img19 from "../assets/img19.avif";
import img20 from "../assets/img20.avif";
import img21 from "../assets/img21.webp";
import img22 from "../assets/img22.avif";
import img23 from "../assets/img23.avif";
import img24 from "../assets/img24.avif";
import img25 from "../assets/img25.avif";
import img26 from "../assets/img26.avif";
import img27 from "../assets/img27.avif";
import img28 from "../assets/img28.avif";
import img29 from "../assets/img29.avif";
import img30 from "../assets/img30.avif";
import img31 from "../assets/img31.avif";
import img32 from "../assets/img32.avif";
import img33 from "../assets/img33.avif";
import img34 from "../assets/img34.avif";
import img35 from "../assets/img35.avif";
import img36 from "../assets/img36.avif";
import img37 from "../assets/img37.avif";
import img38 from "../assets/img38.avif";
import img39 from "../assets/img39.avif";
import img40 from "../assets/img40.avif";
import img41 from "../assets/img41.avif";
import img42 from "../assets/img42.avif";
import img43 from "../assets/img43.avif";
import img44 from "../assets/img44.avif";
import img45 from "../assets/img45.avif";
import img46 from "../assets/img46.avif";
import img47 from "../assets/img47.avif";
import img48 from "../assets/img48.avif";
import img49 from "../assets/img49.avif";
import img50 from "../assets/img50.avif";
import img51 from "../assets/img51.avif";
import img52 from "../assets/img52.avif";
import img53 from "../assets/img53.avif";
import img54 from "../assets/img54.avif";


const NavMenu = () => {
  //const isMobile = useIsMobile()
  return (
    <NavigationMenu>
      <NavigationMenuList className=" mr-[220px] w-full">

        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-[#525050] hover:bg-white text-[13px]  hover:text-black ">New in</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 lg:grid-cols-4 sm:w-[400px] pl-6 md:w-[500px]  md:grid-cols-3 lg:h-[430px] lg:w-[1200px] bg-white text-[#2d2d2d]">
              <div>
                <h1 className="font-bold mt-5 text-[14px]">NEW PRODUCTS</h1>
                <nav >
                  <li className="text-neutral-500 my-3 hover:text-[#0770cf] w-[50px] cursor-pointer text-[14px]">View all</li>
                  <li className="text-neutral-500 my-3 hover:text-[#0770cf] w-[55px]  cursor-pointer text-[14px]">Clothing</li>
                  <li className=" my-3 text-[#0770cf] hover:text-[#3123a4] w-[110px] flex items-center cursor-pointer font-bold text-[14px]">New In:Today
                    <IoIosLock className="ml-1" /></li>
                  <li className="font-bold text-neutral-600 my-3 hover:text-[#0770cf] w-[130px]  cursor-pointer text-[14px]">New In:Selling Fast</li>
                  <li className="text-neutral-500 text-[14px] hover:text-[#0770cf] w-10  cursor-pointer my-3">Shoes</li>
                  <li className="text-neutral-500 text-[14px] hover:text-[#0770cf] w-[100px]  cursor-pointer my-3">T-Shirts & Vests</li>
                  <li className="text-neutral-500 text-[14px] hover:text-[#0770cf] w-[145px] cursor-pointer my-3">Hoodies & Sweatshirts</li>
                  <li className="text-neutral-500 text-[14px] hover:text-[#0770cf] w-[110px] cursor-pointer my-3">Jeans & Trousers</li>
                  <li className="text-neutral-500 text-[14px] hover:text-[#0770cf] w-10 cursor-pointer my-3">Accessories</li>
                  <li className="text-neutral-500 text-[14px] hover:text-[#0770cf] w-[100px] cursor-pointer my-3">Coats & Jakets</li>
                </nav>
              </div>

              <nav>
                <section className="border-l border-r border-neutral-300  w-[280px] h-[380px] pl-4 -ml-20">
                  <h1 className="my-5 font-bold text-[14px]">WINTER</h1>
                  <div className="flex items-center my-2  cursor-pointer  hover:text-[#0770cf]">
                    <Image src={img1} alt="" className="rounded-full w-[50px] h-[45px]  border-2 border-neutral-200 hover:border-[#0770cf]" />
                    <p className="border-b w-28 border-neutral-300 ml-5 text-[12px]">Essentials</p>
                  </div>

                  <section className="flex items-center my-2 cursor-pointer  hover:text-[#0770cf]">
                    <Image src={img2} alt="" className="rounded-full w-[50px] hover:border-[#0770cf] border-2 border-neutral-200 h-[45px]" />
                    <p className="border-b w-28 border-neutral-300 ml-5 text-[12px]">Light layers</p>
                  </section>

                  <div className="flex items-center my-2  cursor-pointer hover:text-[#0770cf]">
                    <Image src={img3} alt="" className="rounded-full w-[50px] h-[45px] hover:border-[#0770cf]  border-2 border-neutral-200" />
                    <p className="border-b  w-28 border-neutral-300 ml-5 text-[12px]">Denim</p>
                  </div>

                  <section className="flex items-center my-2 cursor-pointer hover:text-[#0770cf]">
                    <Image src={img4} alt="" className="rounded-full w-[50px] h-[45px] hover:border-[#0770cf]  border-2 border-neutral-200" />
                    <p className="border-b w-28 border-neutral-300 ml-5 text-[12px]">Rainy days</p>
                  </section>

                  <div className="flex items-center my-2 cursor-pointer hover:text-[#0770cf]">
                    <Image src={img5} alt="" className="rounded-full w-[50px] h-[45px] hover:border-[#0770cf]  border-2 border-neutral-200" />
                    <p className="border-b w-28 border-neutral-300 ml-5 text-[12px]">Loungewear</p>
                  </div>

                  <section className="flex items-center my-2  cursor-pointer hover:text-[#0770cf]">
                    <Image src={img6} alt="" className="rounded-full w-[50px] h-[45px] hover:border-[#0770cf]  border-2 border-neutral-200" />
                    <p className=" w-28 ml-5 text-[12px]">Boots</p>
                  </section>
                </section>
              </nav>

              <div>
                <section className="w-[200px] border-r border-neutral-300 h-[380px]">
                  <h1 className="text-[14px] font-bold -ml-20 mt-5">YOUR MOST HYPED</h1>
                  <section className="grid grid-cols-2  items-center">
                    <div className="ml-[-45px] ">
                      <Image src={img7} alt="" className="w-[75px] h-[70px] my-4 border-2  border-neutral-300 rounded-full hover:border-[#0770cf]" />
                      <p className="text-[12px] ml-[15px]  hover:text-[#0770cf]">View All</p>
                    </div>

                    <div>
                      <Image src={img8} alt="" className="w-[75px] h-[70px] my-4 border-2 border-neutral-300  rounded-full hover:border-[#0770cf]" />
                      <p className="text-[12px] ml-[25px] hover:text-[#0770cf]">Tops</p>
                    </div>

                    <div className="ml-[-45px]  mb-[-150px]">
                      <Image src={img9} alt="" className="w-[75px] h-[70px] my-4 border-2 border-neutral-300 rounded-full hover:border-[#0770cf]" />
                      <p className="text-[12px] w-[120px] mt-4  hover:text-[#0770cf]">Jeans & Trousers</p>
                    </div>

                    <div className="mb-[-150px]">
                      <Image src={img10} alt="" className="w-[75px] h-[70px] my-4 border-2 border-neutral-300 rounded-full hover:border-[#0770cf]" />
                      <p className="text-[12px] -ml-2.5 w-[130px]  hover:text-[#0770cf]">Knitwear & Sweats</p>
                    </div>

                  </section>
                </section>
              </div>

              <section>
                <h1 className="font-bold text-[14px] -ml-20 mb-3 mt-5">NEW EDITS</h1>
                <div className="flex flex-col justify-center  w-[500px]">
                  <Image src={NEW_EDITS} alt="NEW_EDITS" className="w-[300px] h-[350px] border-2 -ml-20 
                   border-neutral-300 cursor-pointer hover:border-[#1c64a7]" />
                  <p className="font-bold mt-[-50px]  text-white  ">SIMPLE STATEMENTS</p>
                </div>
              </section>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-[#525050] hover:bg-white text-[13px]  hover:text-black">Clothing</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 sm:w-[400px] pl-6 md:w-[500px] lg:grid-cols-4 md:grid-cols-2 lg:h-[430px] lg:w-[1200px] bg-white text-[#2d2d2d]">

              <section>
                <h1 className="font-bold text-[14px] mt-5">SHOP BY PRODUCT</h1>
                <nav>
                  <li className="font-bold my-2 text-neutral-600  cursor-pointer  hover:text-[#0770cf] w-[90px]">Bestsellers</li>
                  <li className="text-[14px] my-2 text-neutral-500 cursor-pointer hover:text-[#0770cf] w-[45px]">New in</li>
                  <li className="text-[14px] my-2 text-neutral-500 cursor-pointer hover:text-[#0770cf] w-[100px]">T-Shirt & Vests</li>
                  <li className="text-[14px] my-2 text-neutral-500 cursor-pointer hover:text-[#0770cf] w-[145px]">Hoodies & Sweatshirts</li>
                  <li className="text-[14px] my-2 text-neutral-500 cursor-pointer hover:text-[#0770cf] w-[140px]">Jempers & Cardigans</li>
                  <li className="text-[14px] my-2 text-neutral-500 cursor-pointer  hover:text-[#0770cf] w-[110px]">Jackets & Coats</li>
                  <li className="text-[14px] my-2 text-neutral-500 cursor-pointer  hover:text-[#0770cf] w-[120px]">Trousers & Chinos</li>
                  <li className="text-[14px] my-2 text-neutral-500 cursor-pointer hover:text-[#0770cf] w-10">Jeans</li>
                  <li className="text-[14px]  my-2 text-neutral-500 cursor-pointer hover:text-[#0770cf] w-[50px]">Joggers</li>
                  <li className="text-[14px] my-2 text-neutral-500 cursor-pointer hover:text-[#0770cf] w-[70px]">Loungewear</li>
                  <li className="text-[14px] my-2 text-neutral-500 cursor-pointer hover:text-[#0770cf] w-[60px]">Activewear</li>
                  <li className="text-[14px] my-2 text-neutral-500 cursor-pointer hover:text-[#0770cf] w-[50px]">Co-ords</li>
                </nav>
              </section>

              <nav className="mt-10">
                <li className="my-2 text-[14px] text-neutral-500 hover:text-[#0770cf] cursor-pointer w-[50px]">Fleeces</li>
                <li className="my-2 text-[14px] text-neutral-500 hover:text-[#0770cf] cursor-pointer w-[60px]">Plus Size</li>
                <li className="my-2 text-[14px] text-neutral-500 hover:text-[#0770cf] cursor-pointer w-[70px]">Polo shirts</li>
                <li className="my-2 text-[14px] text-neutral-500 hover:text-[#0770cf] cursor-pointer w-[60px]">Premium</li>
                <li className="my-2 text-[14px] text-neutral-500 hover:text-[#0770cf] cursor-pointer w-[30px]">Shirts</li>
                <li className="my-2 text-[14px] text-neutral-500 hover:text-[#0770cf] cursor-pointer w-10">Shorts</li>
                <li className="my-2 text-[14px] text-neutral-500  hover:text-[#0770cf] cursor-pointer w-10">Socks</li>
                <li className="my-2 text-[14px] text-neutral-500 hover:text-[#0770cf] cursor-pointer w-[105px]">Suits & Tailoring</li>
                <li className="my-2 text-[14px] text-neutral-500 hover:text-[#0770cf] cursor-pointer w-[70px]">Swimwear</li>
                <li className="my-2 text-[14px] text-neutral-500 hover:text-[#0770cf] cursor-pointer w-5">Tall</li>
                <li className="my-2 text-[14px] text-neutral-500 hover:text-[#0770cf] cursor-pointer w-[60px]">Tracksuits</li>
                <li className="my-2 text-[14px] text-neutral-500 hover:text-[#0770cf] cursor-pointer w-[60px]">Underwear</li>
              </nav>

              <section>
                <div className="border-l border-neutral-300 h-[380px]">
                  <h1 className="font-bold text-[14px] mt-5 ml-5">SHOP PARTYWEAR</h1>
                  <section className="grid grid-cols-2 pl-10 items-center ">
                    <div >
                      <Image src={img11} alt="" className="w-[75px] h-[70px] my-4 border-2  border-neutral-300 rounded-full hover:border-[#0770cf]" />
                      <p className="text-[12px] ml-3  hover:text-[#0770cf]">Essentials</p>
                    </div>

                    <div>
                      <Image src={img12} alt="" className="w-[75px] h-[70px] my-4 border-2 border-neutral-300  rounded-full hover:border-[#0770cf]" />
                      <p className="text-[12px] ml-2 hover:text-[#0770cf]">Satin & velvet</p>
                    </div>

                    <div className=" mb-[-150px]">
                      <Image src={img13} alt="" className="w-[75px] h-[70px] my-4 border-2 border-neutral-300 rounded-full hover:border-[#0770cf]" />
                      <p className="text-[12px] w-[120px] mt-4 -ml-2.5 hover:text-[#0770cf]">Tuxedo & black tie </p>
                    </div>

                    <div className="mb-[-150px]">
                      <Image src={img14} alt="" className="w-[75px] h-[70px] my-4 border-2 border-neutral-300 rounded-full hover:border-[#0770cf]" />
                      <p className="text-[12px] -ml-2.5 w-[130px]  hover:text-[#0770cf]">Shoes & accessories</p>
                    </div>
                  </section>
                </div>
              </section>

              <div>
                <section className=" w-[280px] h-[380px] pl-4 ml-5 border-l border-neutral-300">
                  <h1 className="my-5 font-bold text-[14px]">SHOP BY EDIT</h1>
                  <div className="flex items-center my-2  cursor-pointer  hover:text-[#0770cf]">
                    <Image src={img15} alt="" className="rounded-full w-[50px] h-[45px]  border-2 border-neutral-200 hover:border-[#0770cf]" />
                    <p className="border-b w-32 border-neutral-300 ml-5 text-[12px]">Christmas outfits</p>
                  </div>

                  <section className="flex items-center my-2 cursor-pointer  hover:text-[#0770cf]">
                    <Image src={img16} alt="" className="rounded-full w-[50px] hover:border-[#0770cf] border-2 border-neutral-200 h-[45px]" />
                    <p className="border-b w-32 border-neutral-300 ml-5 text-[12px]">Workwear</p>
                  </section>

                  <div className="flex items-center my-2  cursor-pointer hover:text-[#0770cf]">
                    <Image src={img17} alt="" className="rounded-full w-[50px] h-[45px] hover:border-[#0770cf]  border-2 border-neutral-200" />
                    <p className="border-b  w-32 border-neutral-300 ml-5 text-[12px]">Occasionwear</p>
                  </div>

                  <section className="flex items-center my-2 cursor-pointer hover:text-[#0770cf]">
                    <Image src={img18} alt="" className="rounded-full w-[50px] h-[45px] hover:border-[#0770cf]  border-2 border-neutral-200" />
                    <p className="border-b w-32 border-neutral-300 ml-5 text-[12px]">Holiday</p>
                  </section>

                  <div className="flex items-center my-2 cursor-pointer hover:text-[#0770cf]">
                    <Image src={img19} alt="" className="rounded-full w-[50px] h-[45px] hover:border-[#0770cf]  border-2 border-neutral-200" />
                    <p className="border-b w-32 border-neutral-300 ml-5 text-[12px]">Basics</p>
                  </div>

                  <section className="flex items-center my-2  cursor-pointer hover:text-[#0770cf]">
                    <Image src={img20} alt="" className="rounded-full  w-[50px] h-[45px] hover:border-[#0770cf]  border-2 border-neutral-200" />
                    <p className=" w-32 ml-5 text-[12px]">Wedding</p>
                  </section>
                </section>
              </div>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-[#525050] hover:bg-white text-[13px] hover:text-black">Trending</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:grid-cols-4 lg:h-[360px] lg:w-[1200px] bg-white text-[#2d2d2d]">

              <div>
                <section className=" w-[280px] mt-5 h-[300px] pl-4 ml-5 border-r border-neutral-300">
                  <h1 className="font-bold text-[14px]">TOP-SEARCHED FAVES</h1>
                  <div className="flex items-center my-2  cursor-pointer  hover:text-[#0770cf]">
                    <Image src={img21} alt="" className="rounded-full w-[50px] h-[45px]  border-2 border-neutral-200 hover:border-[#0770cf]" />
                    <p className="border-b w-40 border-neutral-300 ml-5 text-[12px]">Gorpcore</p>
                  </div>

                  <section className="flex items-center my-2 cursor-pointer  hover:text-[#0770cf]">
                    <Image src={img22} alt="" className="rounded-full w-[50px] hover:border-[#0770cf] border-2 border-neutral-200 h-[45px]" />
                    <p className="border-b w-40 border-neutral-300 ml-5 text-[12px]">Terrace casuals</p>
                  </section>

                  <div className="flex items-center my-2  cursor-pointer hover:text-[#0770cf]">
                    <Image src={img23} alt="" className="rounded-full w-[50px] h-[45px] hover:border-[#0770cf]  border-2 border-neutral-200" />
                    <p className="border-b  w-40 border-neutral-300 ml-5 text-[12px]">Seasonal colours</p>
                  </div>

                  <section className="flex items-center my-2 cursor-pointer hover:text-[#0770cf]">
                    <Image src={img24} alt="" className="rounded-full w-[50px] h-[45px] hover:border-[#0770cf]  border-2 border-neutral-200" />
                    <p className="border-b w-40 border-neutral-300 ml-5 text-[12px]">Workwear edit</p>
                  </section>

                  <div className="flex items-center my-2 cursor-pointer hover:text-[#0770cf]">
                    <Image src={img25} alt="" className="rounded-full w-[50px] h-[45px] hover:border-[#0770cf]  border-2 border-neutral-200" />
                    <p className="w-40  ml-5 font-bold text-[13px]">Discover more:Style Feed</p>
                  </div>

                </section>
              </div>

              <section className="ml-5 mt-[22px]  h-[300px] border-neutral-300 border-r pr-5">
                <div>
                  <Image src={img26} alt="img26" className="w-[290px] h-[300px] border cursor-pointer
                   border-neutral-300  hover:border-[#0770cf] " />
                  <p className="font-bold text-center  relative bg-black/20 top-[-30px]  pr-10  text-white">ESSENTIALS REFINED</p>
                </div>
              </section>

              <div className="mt-[22px] ml-5 border-neutral-300 border-r pr-5 h-[300px]">
                <section>
                  <Image src={img27} alt="img26" className=" cursor-pointer w-[290px] h-[300px] border
                   border-neutral-300  hover:border-[#0770cf] " />
                  <p className="font-bold text-center  top-[-30px] bg-black/20 relative text-white ">AW25 COLLECTION</p>
                </section>
              </div>

              <section className="mt-[22px] mx-5 h-[300px]">
                <Image src={img28} alt="img26" className=" cursor-pointer w-[290px] h-[300px] border
                 border-neutral-300  hover:border-[#0770cf]" />
                <p className="font-bold text-center top-[-30px] relative bg-black/20  text-white">THE DENIM DROP</p>
              </section>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-[#525050] hover:bg-white text-[13px] hover:text-black">Shoes</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 sm:w-[400px] pl-6 md:w-[500px] md:grid-cols-2  lg:grid-cols-4 lg:w-[1200px] h-[390px] bg-white text-[#2d2d2d]">

              <section>
                <h1 className="mt-5 font-bold text-[14px]">SHOP BY PRODUCT</h1>
                <nav>
                  <li className="my-2 text-[14px] text-neutral-500 cursor-pointer hover:text-[#0770cf] font-bold w-[83px] ">Selling Fast</li>
                  <li className="my-2 text-[14px] text-neutral-500 cursor-pointer hover:text-[#0770cf] w-[50px]">View all</li>
                  <li className="my-2 text-[14px] text-neutral-500 cursor-pointer hover:text-[#0770cf] w-12">New in</li>
                  <li className="my-2 text-[14px] text-neutral-500 cursor-pointer hover:text-[#0770cf] w-[55px]">Trainers</li>
                  <li className="my-2 text-[14px] text-neutral-500 cursor-pointer hover:text-[#0770cf] w-[55px]">Sandals</li>
                  <li className="my-2 text-[14px] text-neutral-500 cursor-pointer hover:text-[#0770cf] w-10">Boots</li>
                  <li className="my-2 text-[14px] text-neutral-500 cursor-pointer hover:text-[#0770cf] w-[122px]">Sliders & Flip flops</li>
                  <li className="my-2 text-[14px] text-neutral-500 cursor-pointer hover:text-[#0770cf] w-[85px]">Smart shoes</li>
                  <li className="my-2 text-[14px] text-neutral-500 cursor-pointer hover:text-[#0770cf] w-[50px]">Loafers</li>
                  <li className="my-2 text-[14px] text-neutral-500 cursor-pointer hover:text-[#0770cf] w-[104px]">Runnig Trainers</li>
                </nav>
              </section>


              <div>
                <section className=" w-[280px] mt-5 h-[340px] ml-[-50px] border-l pl-[30px] border-neutral-300 ">
                  <h1 className="font-bold text-[14px]">SHOP BY BRAND</h1>
                  <div className="flex items-center my-2  cursor-pointer  hover:text-[#0770cf]">
                    <Image src={img29} alt="" className="rounded-full w-[50px] h-[45px]  border-2 border-neutral-200 hover:border-[#0770cf]" />
                    <p className="border-b w-40 border-neutral-300 ml-5 text-[12px]">ASOS DESIGN</p>
                  </div>

                  <section className="flex items-center my-2 cursor-pointer  hover:text-[#0770cf]">
                    <Image src={img31} alt="" className="rounded-full w-[50px] hover:border-[#0770cf] border-2 border-neutral-200 h-[45px]" />
                    <p className="border-b w-40 border-neutral-300 ml-5 text-[12px]">On</p>
                  </section>

                  <div className="flex items-center my-2  cursor-pointer hover:text-[#0770cf]">
                    <Image src={img32} alt="" className="rounded-full w-[50px] h-[45px] hover:border-[#0770cf]  border-2 border-neutral-200" />
                    <p className="border-b  w-40 border-neutral-300 ml-5 text-[12px]">Nike</p>
                  </div>

                  <section className="flex items-center my-2 cursor-pointer hover:text-[#0770cf]">
                    <Image src={img33} alt="" className="rounded-full w-[50px] h-[45px] hover:border-[#0770cf]  border-2 border-neutral-200" />
                    <p className="border-b w-40 border-neutral-300 ml-5 text-[12px]">adidas</p>
                  </section>

                  <div className="flex items-center my-2 cursor-pointer hover:text-[#0770cf]">
                    <Image src={img34} alt="" className="rounded-full w-[50px] h-[45px] hover:border-[#0770cf]  border-2 border-neutral-200" />
                    <p className="w-40  ml-5  border-b border-neutral-300 text-[13px]">Crocs</p>
                  </div>

                  <div className="flex items-center my-2 cursor-pointer hover:text-[#0770cf]">
                    <Image src={img35} alt="" className="rounded-full w-[50px] h-[45px] hover:border-[#0770cf]  border-2 border-neutral-200" />
                    <p className="w-40  ml-5  text-[13px]">Dr Martens</p>
                  </div>

                </section>
              </div>

              <section>
                <div className="border-l border-neutral-300 h-[340px] -ml-10 pl-4">
                  <h1 className="mt-5 font-bold text-[14px]">SHOP BY TRAINER STYLE</h1>
                  <nav>
                    <li className="my-2 text-[14px] text-neutral-500 cursor-pointer hover:text-[#0770cf] w-[140px]">adidas Originals japan</li>
                    <li className="my-2 text-[14px] text-neutral-500 cursor-pointer hover:text-[#0770cf] w-[150px]">adidas Originals Samba</li>
                    <li className="my-2 text-[14px] text-neutral-500 cursor-pointer hover:text-[#0770cf] w-[154px]">adidas Originals Spezial</li>
                    <li className="my-2 text-[14px] text-neutral-500 cursor-pointer hover:text-[#0770cf] w-[148px]">Converse Chuck Taylor</li>
                    <li className="my-2 text-[14px] text-neutral-500 cursor-pointer hover:text-[#0770cf] w-[110px]">New Balance 740</li>
                    <li className="my-2 text-[14px] text-neutral-500 cursor-pointer hover:text-[#0770cf] w-[120px]">New Balance 9060</li>
                    <li className="my-2 text-[14px] text-neutral-500 cursor-pointer hover:text-[#0770cf] w-20">Nike Air Max</li>
                    <li className="my-2 text-[14px] text-neutral-500 cursor-pointer hover:text-[#0770cf] w-[78px]">Nike p-6000</li>
                    <li className="my-2 text-[14px] text-neutral-500 cursor-pointer hover:text-[#0770cf] w-[65px]">Nike shox</li>
                    <li className="my-2 text-[14px] text-neutral-500 cursor-pointer hover:text-[#0770cf] w-[93px]">ON Cloudswifi</li>
                  </nav>
                </div>
              </section>


              <div className="border-l border-neutral-300 mt-5 pl-6 ml-[-45px]  h-[340px]" >
                <section >
                  <Image src={img30} alt="banner" className="w-[290px] h-80  border border-neutral-300 hover:border-[#0770cf] cursor-pointer" />
                  <p className="font-black text-center w-[290px] bg-black/20 top-[-30px]  relative text-white">TRENDING TRAINERS</p>
                </section>
              </div>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-[#525050] hover:bg-white text-[13px] hover:text-black">Gifting</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:h-[360px] lg:grid-cols-4 lg:w-[1200px] bg-white text-[#2d2d2d]">

              <section className="pl-4">
                <h1 className="mt-5  font-bold text-[14px]">SHOP BY PRODUCT</h1>
                <nav>
                  <li className="my-3 text-[14px] text-neutral-500 cursor-pointer hover:text-[#0770cf] w-[83px] ">Gifts for Him</li>
                  <li className="my-3 text-[14px] text-neutral-500 cursor-pointer hover:text-[#0770cf] w-20">Gifts for Her</li>
                  <li className="my-3 text-[14px] text-neutral-500 cursor-pointer hover:text-[#0770cf] w-[100px]">Stocking Fillers</li>
                  <li className="my-3 text-[14px] text-neutral-500 cursor-pointer hover:text-[#0770cf] w-[125px]">Christmas Jumpers</li>
                  <li className="my-3 text-[14px] text-neutral-500 cursor-pointer hover:text-[#0770cf] w-[70px]">Fragrances</li>
                  <li className="my-3 text-[14px] text-neutral-500 cursor-pointer hover:text-[#0770cf] w-[98px]">Grooming Gifts</li>
                  <li className="my-3 text-[14px] text-neutral-500 cursor-pointer hover:text-[#0770cf] w-10">Slippers</li>
                  <li className="my-3 text-[14px] text-neutral-500 cursor-pointer hover:text-[#0770cf] w-[70px]">Underwear</li>
                  <li className="my-3 text-[14px] text-neutral-500 cursor-pointer hover:text-[#0770cf] w-[50px]">Pyjamas</li>
                </nav>
              </section>

              <section>
                <div className="border-l border-r border-neutral-300 h-80">
                  <h1 className="font-bold text-[14px] mt-5 ml-5">SHOP BY EDIT</h1>
                  <section className="grid grid-cols-2 pl-10 items-center ">
                    <div >
                      <Image src={img38} alt="" className="w-[75px] h-[70px] my-4 border-2 cursor-pointer  border-neutral-300 rounded-full hover:border-[#0770cf]" />
                      <p className="text-[12px]   hover:text-[#0770cf]">Gifts under €20</p>
                    </div>

                    <div>
                      <Image src={img39} alt="" className="w-[75px] h-[70px] my-4 border-2 border-neutral-300 cursor-pointer rounded-full hover:border-[#0770cf]" />
                      <p className="text-[12px]  hover:text-[#0770cf]">Gifts under €50</p>
                    </div>

                    <div className=" mb-[-150px]">
                      <Image src={img40} alt="" className="w-[75px] h-[70px] my-4 border-2 border-neutral-300 rounded-full cursor-pointer hover:border-[#0770cf]" />
                      <p className="text-[12px] w-[120px] mt-4  hover:text-[#0770cf]">Cosy season</p>
                    </div>

                    <div className="mb-[-150px]">
                      <Image src={img41} alt="" className="w-[75px] h-[70px] my-4 border-2 border-neutral-300 cursor-pointer rounded-full hover:border-[#0770cf]" />
                      <p className="text-[12px] ml-2.5 w-[130px]  hover:text-[#0770cf]">Top brands</p>
                    </div>
                  </section>
                </div>
              </section>

              <section className="ml-5 mt-[22px]  h-80 border-neutral-300 border-r pr-5">
                <div>
                  <Image src={img36} alt="img26" className="w-[290px] h-[300px] border cursor-pointer
                   border-neutral-300  hover:border-[#0770cf] " />
                  <p className="font-bold text-center  relative bg-black/20 top-[-30px]  pr-10  text-white">STOCKING FILLERS</p>
                </div>
              </section>

              <div className="mt-[22px] ml-5 border-neutral-300 border-r pr-5 h-80">
                <section>
                  <Image src={img37} alt="img26" className=" cursor-pointer w-[290px] h-[300px] border
                   border-neutral-300  hover:border-[#0770cf] " />
                  <p className="font-bold text-center  top-[-30px] bg-black/20 relative text-white ">PREMIUM GIFTS</p>
                </section>
              </div>

            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-[#525050] hover:bg-white text-[13px] hover:text-black">Accessories</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2  lg:grid-cols-4 lg:w-[1200px] lg:h-[400px] bg-white text-[#2d2d2d]">

              <section className="pl-6">
                <h1 className="mt-5  font-bold text-[14px]">SHOP BY PRODUCT</h1>
                <nav className="mt-5">
                  <li className="my-3 text-[14px] text-neutral-500 cursor-pointer hover:text-[#0770cf] w-[50px] ">View all</li>
                  <li className="my-3 text-[14px] text-neutral-500 cursor-pointer hover:text-[#0770cf] w-[45px]">New in</li>
                  <li className="my-3 text-[14px] text-neutral-500 cursor-pointer hover:text-[#0770cf] w-[78px]">Selling Fast</li>
                  <li className="my-3 text-[14px] text-neutral-500 cursor-pointer hover:text-[#0770cf] w-[50px]">Watches</li>
                  <li className="my-3 text-[14px] text-neutral-500 cursor-pointer hover:text-[#0770cf] w-[30px]">Belts</li>
                  <li className="my-3 text-[14px] text-neutral-500 cursor-pointer hover:text-[#0770cf] w-5">Ties</li>
                  <li className="my-3 text-[14px] text-neutral-500 cursor-pointer hover:text-[#0770cf] w-10">Beanies</li>
                  <li className="my-3 text-[14px] text-neutral-500 cursor-pointer hover:text-[#0770cf] w-10">Gloves</li>
                  <li className="my-3 text-[14px] text-neutral-500 cursor-pointer hover:text-[#0770cf] w-[50px]">Scarves</li>
                </nav>
              </section>

              <nav>
                <section className="border-l  border-r border-neutral-300  w-[280px] h-[350px] pl-4 ">
                  <h1 className="my-5 font-bold text-[14px]">SHOP BY JEWELLERY</h1>
                  <div className="flex items-center my-2  cursor-pointer  hover:text-[#0770cf]">
                    <Image src={img43} alt="" className="rounded-full w-[50px] h-[45px]  border-2 border-neutral-200 hover:border-[#0770cf]" />
                    <p className="border-b w-28 border-neutral-300 ml-5 text-[12px]">View all</p>
                  </div>

                  <section className="flex items-center my-2 cursor-pointer  hover:text-[#0770cf]">
                    <Image src={img44} alt="" className="rounded-full w-[50px] hover:border-[#0770cf] border-2 border-neutral-200 h-[45px]" />
                    <p className="border-b w-28 border-neutral-300 ml-5 text-[12px]">Necklaces</p>
                  </section>

                  <div className="flex items-center my-2  cursor-pointer hover:text-[#0770cf]">
                    <Image src={img45} alt="" className="rounded-full w-[50px] h-[45px] hover:border-[#0770cf]  border-2 border-neutral-200" />
                    <p className="border-b  w-28 border-neutral-300 ml-5 text-[12px]">Rings</p>
                  </div>

                  <section className="flex items-center my-2 cursor-pointer hover:text-[#0770cf]">
                    <Image src={img46} alt="" className="rounded-full w-[50px] h-[45px] hover:border-[#0770cf]  border-2 border-neutral-200" />
                    <p className="border-b w-28 border-neutral-300 ml-5 text-[12px]">Bracelets</p>
                  </section>

                  <div className="flex items-center my-2 cursor-pointer hover:text-[#0770cf]">
                    <Image src={img47} alt="" className="rounded-full w-[50px] h-[45px] hover:border-[#0770cf]  border-2 border-neutral-200" />
                    <p className="border-b w-28 border-neutral-300 ml-5 text-[12px]">Earrings</p>
                  </div>

                  <section className="flex items-center my-2  cursor-pointer hover:text-[#0770cf]">
                    <Image src={img48} alt="" className="rounded-full w-[50px] h-[45px] hover:border-[#0770cf]  border-2 border-neutral-200" />
                    <p className=" w-28 ml-5 text-[12px]">Stainless Steel</p>
                  </section>
                </section>
              </nav>

              <nav>
                <section className="  w-[280px] h-[350px] pl-4  border-r border-neutral-300">
                  <h1 className="my-5 font-bold text-[14px]">SHOP BY BOGS</h1>
                  <div className="flex items-center my-2  cursor-pointer  hover:text-[#0770cf]">
                    <Image src={img49} alt="" className="rounded-full w-[50px] h-[45px]  border-2 border-neutral-200 hover:border-[#0770cf]" />
                    <p className="border-b w-28 border-neutral-300 ml-5 text-[12px]">View all</p>
                  </div>

                  <section className="flex items-center my-2 cursor-pointer  hover:text-[#0770cf]">
                    <Image src={img50} alt="" className="rounded-full w-[50px] hover:border-[#0770cf] border-2 border-neutral-200 h-[45px]" />
                    <p className="border-b w-28 border-neutral-300 ml-5 text-[12px]">Wallets</p>
                  </section>

                  <div className="flex items-center my-2  cursor-pointer hover:text-[#0770cf]">
                    <Image src={img51} alt="" className="rounded-full w-[50px] h-[45px] hover:border-[#0770cf]  border-2 border-neutral-200" />
                    <p className="border-b  w-28 border-neutral-300 ml-5 text-[12px]">Backpacks</p>
                  </div>

                  <section className="flex items-center my-2 cursor-pointer hover:text-[#0770cf]">
                    <Image src={img52} alt="" className="rounded-full w-[50px] h-[45px] hover:border-[#0770cf]  border-2 border-neutral-200" />
                    <p className="border-b w-28 border-neutral-300 ml-5 text-[12px]">Duffle bags</p>
                  </section>

                  <div className="flex items-center my-2 cursor-pointer hover:text-[#0770cf]">
                    <Image src={img53} alt="" className="rounded-full w-[50px] h-[45px] hover:border-[#0770cf]  border-2 border-neutral-200" />
                    <p className="border-b w-28 border-neutral-300 ml-5 text-[12px]">Shopper bags</p>
                  </div>

                  <section className="flex items-center my-2  cursor-pointer hover:text-[#0770cf]">
                    <Image src={img54} alt="" className="rounded-full w-[50px] h-[45px] hover:border-[#0770cf]  border-2 border-neutral-200" />
                    <p className=" w-28 ml-5 text-[12px]">Shopper bogs</p>
                  </section>

                </section>
              </nav>

              <div className="mt-[22px] -ml-2.5  h-[350px]">
                <section>
                  <Image src={img42} alt="img42" className=" cursor-pointer  h-[350px] border-2
                   border-neutral-300  hover:border-[#0770cf] w-[280px]" />
                  <p className="font-bold text-center  top-[-30px] w-[280px] bg-black/20 relative text-white ">WINTER ACCESSORIES</p>
                </section>
              </div>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuIndicator />
    </NavigationMenu>
  )
}

// function ListItem({
//   title,
//   children,
//   href,
//   ...props
// }: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
//   return (
//     <li {...props}>
//       <NavigationMenuLink asChild>
//         <Link href={href}>
//           <div className="text-sm leading-none font-medium">{title}</div>
//           <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
//             {children}
//           </p>
//         </Link>
//       </NavigationMenuLink>
//     </li>
//   )
// }

export default NavMenu;