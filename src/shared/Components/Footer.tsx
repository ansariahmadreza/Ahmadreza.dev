import uk from "../assets/lan/uk.png";
import espain from "../assets/lan/espain.png";
import german from "../assets/lan/german.png"
import au from "../assets/lan/au.png";
import fr from "../assets/lan/fr.png";
import it from "../assets/lan/it.png";
import se from "../assets/lan/se.png";
import dk from "../assets/lan/dk.png";
import us from "../assets/lan/us.png";
import pl from "../assets/lan/pl.png";
import nl from "../assets/lan/nl.png";
import Image from "next/image";


const Footer = () => {
    return (
        <section> 
                <div className="bg-[#f8f8f8] mt-40 w-full h-[450px]">
                    <nav>
                        <ul className="grid grid-cols-4  py-7 border-b-2 border-[rgb(237,237,237)] px-10">
                            <div>
                                <h1 className="text-neutral-500 pb-3 font-bold tracking-widest">HELP & INFORMATION</h1>
                                <li className="py-2 text-[13px] hover:text-[#0770cf] cursor-pointer w-5">Help</li>
                                <li className="py-2 text-[13px] hover:text-[#0770cf] cursor-pointer w-[90px]">Track order</li>
                                <li className="py-2 text-[13px] hover:text-[#0770cf] cursor-pointer w-[110px]">Delivery & returns</li>
                                <li className="py-2 text-[13px] hover:text-[#0770cf] cursor-pointer w-[90px]">ASOS Premier</li>
                                <li className="py-2 text-[13px] hover:text-[#0770cf] cursor-pointer w-[130px]">10% Student Discount</li>
                                <li className="py-2 text-[13px] hover:text-[#0770cf] cursor-pointer w-[60px]">Sitemap</li>
                                <li className="py-2 text-[13px] hover:text-[#0770cf] cursor-pointer w-[90px]">Data Protection</li>
                                <li className="py-2 text-[13px] hover:text-[#0770cf] cursor-pointer w-[120px]">Ethics & Compliance</li>
                            </div>

                            <div>
                                <h1 className="text-neutral-500 pb-3 font-bold tracking-widest">ABOUT ASOS</h1>
                                <li className="py-2 text-[13px] hover:text-[#0770cf] cursor-pointer w-[60px]">About us</li>
                                <li className="py-2 text-[13px] hover:text-[#0770cf] cursor-pointer w-[110px]">Careers at ASOS</li>
                                <li className="py-2 text-[13px] hover:text-[#0770cf] cursor-pointer w-[150px]">Corporate responsibility</li>
                                <li className="py-2 text-[13px] hover:text-[#0770cf] cursor-pointer w-[90px]">Investors' site</li>
                                <li className="py-2 text-[13px] hover:text-[#0770cf] cursor-pointer w-[90px]">Cyber Security</li>
                            </div>

                            <div>
                                <h1 className="text-neutral-500 pb-3 font-bold tracking-widest">MORE FROM ASOS</h1>
                                <li className="py-2 text-[13px] hover:text-[#0770cf] cursor-pointer w-[140px]">Mobile and ASOS apps</li>
                                <li className="py-2 text-[13px] hover:text-[#0770cf] cursor-pointer w-20">Gift vouchers</li>
                                <li className="py-2 text-[13px] hover:text-[#0770cf] cursor-pointer w-[150px]">Corporate gift vouchers</li>
                                <li className="py-2 text-[13px] hover:text-[#0770cf] cursor-pointer w-20">Black Friday</li>
                                <li className="py-2 text-[13px] hover:text-[#0770cf] cursor-pointer w-[90px]">ASOS x Thrift+</li>
                                <li className="py-2 text-[13px] hover:text-[#0770cf] cursor-pointer w-[110px]">Info for Partners</li>
                                <li className="py-2 text-[13px] hover:text-[#0770cf] cursor-pointer w-[190px]">Discover the ASOS Credit Card</li>
                            </div>

                            <section>
                                <h1 className="text-neutral-500 pb-3 font-bold tracking-widest">SHOPPING FROM:</h1>
                                <div className="flex">
                                    <p className=" text-[13px]  inline-block">You'r in </p>
                                    <figure >
                                        <Image width={15} height={15} src={uk} alt="uk" className="pt-0.5 ml-2 mr-3" />
                                    </figure>
                                    <h4 className="pb-2 text-[14px] tracking-widest border-l-2 h-[18px] pl-2 border-neutral-700 font-bold text-neutral-500">CHANGE</h4>
                                </div>
                                <p className="py-2 text-[13px]">Some of our international sites:</p>
                                <figure className="grid grid-cols-7 gap-y-8 pt-4">
                                    <Image src={espain} alt="espain" width={15} height={15} />
                                    <Image src={german} alt="german" width={15} height={15} />
                                    <Image src={au} alt="au" width={15} height={15} />
                                    <Image src={fr} alt="fr" width={15} height={15} />
                                    <Image src={it} alt="it" width={15} height={15} />
                                    <Image src={dk} alt="dk" width={15} height={15} />
                                    <Image src={se} alt="se" width={15} height={15} />
                                    <Image src={us} alt="us" width={15} height={15} />
                                    <Image src={pl} alt="pl" width={15} height={15} />
                                    <Image src={nl} alt="nl" width={15} height={15} />
                                </figure>
                            </section>

                        </ul>
                    </nav>

                    <div className="flex justify-between mx-12 py-4">
                        <span className="text-[12px] text-neutral-500">© 2025 ASOS</span>
                        <section >
                            <span className="text-[12px] text-neutral-500 border-r-2 border-neutral-300 pr-3
                             hover:text-[#0770cf] cursor-pointer ">Privacy & Cookies</span>
                            <span className="px-3 text-[12px] text-neutral-500 hover:text-[#0770cf] cursor-pointer">Ts&Cs</span>
                            <span className="text-[12px] text-neutral-500  border-l-2 border-neutral-300 pl-3 hover:text-[#0770cf] cursor-pointer">Accessibility</span>
                        </section>
                    </div>
                </div>   
        </section>
    )
}
export default Footer;