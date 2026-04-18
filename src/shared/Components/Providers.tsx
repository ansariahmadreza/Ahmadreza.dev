"use client"
import CartContextProvider from "./cartcontext/CartContextProvider";
const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <section>
            <CartContextProvider>
                {children}
            </CartContextProvider>
        </section>
    )
}
export default Providers;