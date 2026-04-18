import { Providers } from "@/shared";
import "./globals.css"
import { Metadata } from "next";
import RegisterSw from "@/components/RegisterSw";

export const metadata: Metadata = {
    manifest: "/manifest.webmanifest",  // reference to the manifest file
};


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body className="p-0 m-0 ">
                <Providers>
                    <RegisterSw />
                    {children}
                </Providers>
            </body>
        </html >
    );
};