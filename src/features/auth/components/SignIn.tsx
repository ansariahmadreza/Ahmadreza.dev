"use client"
import logo from "@/features/auth/assets/logo.png";
import Image from "next/image";
import logoRight from "@/features/auth/assets/right-logo (2).png";
import Link from "next/link";
import { routes, useCartContext } from "@/shared";
import { useForm } from "react-hook-form"; ///for managing the form and retrieving the data
import { zodResolver } from "@hookform/resolvers/zod";///connecting zod validation rules to react hook form
import { z } from "zod";/// defining validation rules
import cookie from "js-cookie";
import { useRouter } from "next/navigation";

export const userSchema = z.object({/// define an object z with the following properties and rules
    email: z.string().email("Email is Not Valid")
});

export type RegisterFormData = z.infer<typeof userSchema>  //create a custom type based on value

const SignIn = () => {

    const Router = useRouter()
    const { handlerEmail } = useCartContext()

    const { register, /// connects every input to the form
        handleSubmit, // to handle form submission
        formState: { errors // if there was an error in fetching data,the message should be stored here
            , isSubmitting /// it indicates whether the from is currently submitting or not
        } }
        /// use the zod library for from data validation and apply the rules specified in userSchema
        = useForm<RegisterFormData>({
            resolver: zodResolver(userSchema)
        })

    const onSubmit = (data: RegisterFormData) => {
        try {
            const response = {
                token: "sdikujhfdskij",
                export: 465
            }
            cookie.set("token", response.token, { expires: response.export }) /// setting a cookie and its expiration time
            handlerEmail({ email: data.email })
            Router.push(routes.Product.Clothes)
        } catch (error) {
            console.log("error:", error)
        }
    };


    return (
        <div className="h-[700px] grid-cols-2 justify-center ml-[490px] items-center mb-20  grid ">

            <section className="ml-[-500px] mt-[-50px]">
                <div className="flex-col flex justify-center items-center">
                    <Link href={routes.home}>
                        <Image src={logo} alt="logo" width={70} height={70} />
                    </Link>
                </div>

                <div className="flex-col flex justify-center items-center">
                    <h1 className="font-bold mr-[180px] text-[20px] my-5">Hi friend!</h1>
                    <p className="mb-6 mr-[22px]"> Enter your email to sign in or join for</p>


                    <section className="grid grid-cols-3 w-[320px] gap-13 justify-center place-content-center  items-center">
                        <div className="w-[90px]">
                            <section>
                                <span className="bg-blue-600 text-white rounded-3xl text-[10px] p-1 z-50 absolute ml-[60px] font-extrabold">FREE</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="ml-6" width="48" height="49" fill="none">
                                    <circle cx="24" cy="24.5" r="23" stroke="#2D2D2D" strokeWidth="2"></circle>
                                    <path fill="#2D2D2D" d="M32 35.5H16v-16h16zm-14-2h5v-5h-5zm7 0h5v-5h-5zm-7-7h5v-5h-5zm7 0h5v-5h-5zm2-12c.944 0 2 .903 2
                             2.014 0 1.57-1.117 1.986-1.709 1.986H20.71c-.591 0-1.71-.415-1.71-1.986 0-1.11 1.056-2.014 2-2.014 1.622 0 2.462 1.37 3 
                             2.352.538-.982 1.379-2.352 3-2.352m-6.006 1s-.994 0-.994 1 .994 1 .994 1H23c-.301-.462-1.224-2-2.006-2m6.006 0c-.93 0-1.642 1.22-2
                              2h2c.159-.002 1-.09 1-1 0-.568-.62-1-1-1"></path></svg>
                            </section>

                            <div className="text-center">
                                <p className="w-[100px]  text-[14px] text-neutral-800 mt-3">ASOS.WORLD rewards</p>
                            </div>
                        </div>

                        <div className="w-[90px] ml-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none">
                                <circle cx="24" cy="24" r="23" stroke="#2D2D2D" strokeWidth="2"></circle>
                                <path fill="#2D2D2D"
                                    fillRule="evenodd" d="M34 14h-9L14 25l9 9 11-11zm-2 2h-6l-9 9 6 6 9-9zm-2 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0" clipRule="evenodd">
                                </path></svg>
                            <div className="text-center">
                                <p className="w-[22px] text-[14px] text-neutral-800 mt-3">Exclusive discounts</p>
                            </div>
                        </div>

                        <div className="w-[90px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none">
                                <circle cx="24" cy="24" r="23" stroke="#2D2D2D" strokeWidth="2"></circle>
                                <path fill="#2D2D2D" fillRule="evenodd"
                                    d="M16.38 30.7H13.8l-.85-15.3h18.7l.85 1.7h4.25C38.167 19.36 41 23.05 41 23.05v7.65h-2.648c-.14 1.406-1.14 
                            2.55-2.863 2.55s-2.787-1.21-2.862-2.55H22.27a2.976 2.976 0 0 1-5.89 0m5.636-1.695a2.975 2.975 0 0 0-5.38-.002M39.3
                             26.451V29h-.97s-.916-1.664-2.793-1.679c-1.99-.016-2.91 1.679-2.91 1.679H32.5V18.8h3.4l3.4 5.1zm-.82-3.779.267.378h-.015l.569.85H34.2v-3.4h2.826zM14.65 
                             17.1H30.8V29H15.5l-.177-2.479-.067-.92zm20.825 14.45a1.275 1.275 0 1 0 0-2.55 1.275 1.275 0 0 0 0 2.55m-16.15 0a1.275 1.275 0 1 0
                              0-2.55 1.275 1.275 0 0 0 0 2.55M9.55 22.2h1.7v1.7h-1.7zm1.7 3.4h2.266l.095 1.696-2.361.004zm4.007 0 .066.921.056.777 1.821.002v-1.7zm23.223-2.927-.936-1.323H35.05v1.7h3.682zM7 
                              18.8h6.14l.094 1.7H7zm7.771-.009.122 1.709h4.857v-1.7zM12.068 22.2h1.26l.093 1.7h-1.353zm2.947 0 .121 1.7H18.9v-1.7z"
                                    clipRule="evenodd"></path></svg>
                            <div className="text-center">
                                <p className="w-[22px] text-neutral-800 text-[14px]  mt-3">Speedy checkout </p>
                            </div>
                        </div>
                    </section>

                    <div className="flex flex-col justify-center">
                        <form className="flex flex-col  gap-3 pt-7" onSubmit={handleSubmit(onSubmit)} >
                            <p className="text-neutral-600 font-extrabold text-[14px] my-1">EMAIL:</p>
                            <input type="email" {...register("email")} className="border-2 w-[300px] h-[50px]  pl-4  focus:border-blue-500 outline-0" />
                            {errors.email && <p>{errors.email.message}</p>}
                            <button disabled={isSubmitting} type="submit"
                                className="cursor-pointer w-[300px] h-[50px] bg-neutral-800 hover:bg-black text-white">CONTINUE</button>
                        </form>
                    </div>

                </div>
            </section>

            <section>
                <Image src={logoRight} alt="logo" height={800} loading="eager" className="h-[800px]" />
            </section>

        </div>
    )
};
export default SignIn;