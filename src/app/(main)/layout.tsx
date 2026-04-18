import { Footer, Breadcrumb, Nav } from "@/shared";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Men's Clothes | Shop for Men's Fashion | ASOS",
    template: "%s | ASOS",
  }
};

export default function MainLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Nav />
      <main className="p-0 m-0">
        <Breadcrumb />
        {children}
      </main >
      <Footer />
    </>
  );
};