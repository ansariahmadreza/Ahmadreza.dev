"use client"
import { routes, useCartContext } from "@/shared";
import { useRouter } from "next/navigation";
import cookie from "js-cookie";

const UserInfo = () => {
    const { currentEmailValue } = useCartContext() ///display the user's current email.
    const Router = useRouter()

    return (
        <section className="grid mt-20 justify-center items-center">
            <div>
                user : <p className="inline-block">{currentEmailValue?.email}</p>
            </div>

            <button onClick={() => { Router.push(routes.home), cookie.remove("token") }} className="bg-black text-white p-3 ml-10 cursor-pointer
             hover:bg-neutral-900 rounded-2xl mt-20 mr-7">Sign Out</button>
        </section>
    )
}
export default UserInfo;