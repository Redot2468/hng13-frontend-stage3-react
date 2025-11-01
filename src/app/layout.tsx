import { PropsWithChildren } from "react";

import Navbar from "@/app/_components/ui/Navbar";
import BannerImgDesktop from "@/public/home/desktop/image-hero.jpg";
import BannerImg from "@/public/home/mobile/image-header.jpg";
import BannerImgTablet from "@/public/home/tablet/image-header.jpg";

import { manrope } from "@/app/_styles/font";
import "@/styles/globals.css";
import { Metadata } from "next";
import Image from "next/image";

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
        <header className="relative h-screen w-full md:h-[700px]">
          <Navbar />
          <Image
            src={BannerImg}
            alt="The homepage banner img"
            quality={100}
            placeholder="blur"
            className="bg-bottom object-cover"
            fill
          />
          <Image
            src={BannerImgTablet}
            alt="The homepage banner img"
            quality={100}
            placeholder="blur"
            className="hidden object-cover md:block"
            fill
          />
          <Image
            src={BannerImgDesktop}
            alt="The homepage banner img"
            quality={100}
            placeholder="blur"
            className="hidden object-cover lg:block"
            fill
          />
          <div className="absolute h-full w-full">
            <div className="block__container mx-auto flex h-full flex-col items-center justify-center gap-4 pt-8 pl-6 text-center lg:items-start lg:text-left">
              <p className="text-sm tracking-[10px] text-white/50 uppercase">
                new product
              </p>

              <h1 className="bold text-white uppercase">
                xx99 mark <br /> headphones
              </h1>

              <p className="mx-auto max-w-[350px] text-[15px] font-medium text-white/75 lg:mx-0 lg:mr-auto">
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </p>

              <button className="btn btn-default mt-2 uppercase">
                see product
              </button>
            </div>
          </div>
        </header>
        <main>{children}</main>
        <footer>Footer</footer>
      </body>
    </html>
  );
}
