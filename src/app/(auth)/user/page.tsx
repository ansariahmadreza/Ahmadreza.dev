import { UserInfo } from "@/features/auth";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Account"
};

const User = () => {
    return (
        <div>
            <UserInfo />
        </div>
    )
}
export default User;