import Image from "next/image";

import BannerImgDesktop from "@/public/home/desktop/image-hero.jpg";
import BannerImg from "@/public/home/mobile/image-header.jpg";
import BannerImgTablet from "@/public/home/tablet/image-header.jpg";
import Link from "next/link";

export default function Header() {
  return (
    <header className="relative h-screen w-full md:h-[700px]">
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

          <Link href="/xx99-mark-one-headphones">
            <button className="btn btn-default mt-2 uppercase">
              see product
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
