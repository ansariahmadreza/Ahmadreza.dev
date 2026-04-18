import Image from "next/image"
import assos from "../assets/assos.svg"

const BannerNav = () => {
    return (
        <section >
            <div className="text-[14px] flex justify-center items-center border-b py-0.5">
                <section className="mr-[270px]">
                    <button className="border-2 px-4 py-1 border-white tracking-[1px] hover:opacity-50  transition delay-75 duration-300
                     cursor-pointer text-[12px]">WOMEN</button>
                </section>
                <div>
                    <p className="w-[420px] text-center">
                        New here?Get 15% off + Free Next Day Delivery on your first order with code NEWHERE when you subscribe.
                    </p>
                    <p>
                        Want more?Order on the app with code HEYAPP and get 20% off insted!
                    </p>
                </div>
                <section>
                    <button className="border-2 px-6 py-1 text-[12px] border-white cursor-pointer tracking-[1px] transition delay-75 
              ml-[270px]  hover:opacity-50 duration-300">MEN</button>
                </section>
            </div>

            <section className="pt-2  pb-10">
                <div className="flex justify-center items-center">
                    <Image src={assos} alt="" className="invert-100 text-2xl font-extrabold" />
                    <p className="text-[30px] pl-4">BLACK FRIDAY DAILY DEALS</p>
                </div>

                <div className="flex justify-center items-center flex-col text-[#00ff00] mt-6">
                    <h1 className="text-[50px] w-[600px] font-extrabold text-center leading-13 ">UP TO 25% OFF BIG BRANDS</h1>
                    <p className="font-bold mt-2 text-[22px]">
                        Use code:LOOKS
                    </p>

                    <p className="mt-4">
                        Vaild on selected products only.See website banner for full Ts&Cs
                    </p>
                </div>

            </section>
        </section>
    )
}

export default BannerNav;