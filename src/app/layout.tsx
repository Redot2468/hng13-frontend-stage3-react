import { PropsWithChildren } from "react";

import Footer from "@/app/_components/ui/Footer";
import Navbar from "@/app/_components/ui/Navbar";
import { manrope } from "@/app/_styles/font";
import "@/styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s - Audiophile",
    default: "Home - Audiophile",
  },
  description: "An audio e-commerce store to purchase your audio products.",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={`${manrope.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
