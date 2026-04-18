import { SignInSite } from "@/features/auth";
import { Metadata } from "next";
//import { auth0 } from "@/features/auth/utils/auth0";


export const metadata: Metadata = {
    title: "ASOS | Welcome"
}

const SignIn = () => {
    // const session = await auth0.getSession();
    return (
        <div>
            <SignInSite />
        </div>
    )
}
export default SignIn;