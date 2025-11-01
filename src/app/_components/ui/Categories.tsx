import { MENU_LINKS } from "@/app/_utils/constant";
import shadowImg from "@/public/assets/menu/shadow.png";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Categories() {
  return (
    <div className="block-container mx-auto mt-28 flex max-w-[400px] flex-col gap-20 px-6 md:mt-40 md:max-w-[1100px] md:flex-row md:gap-6">
      {MENU_LINKS?.map((menulink, idx) => (
        <div
          key={idx}
          className="bg-white-3 relative mx-auto flex w-full flex-col items-center rounded-lg"
        >
          <Image
            src={menulink.src}
            alt={menulink.alt}
            quality={100}
            priority={true}
            className="absolute -top-12"
          />
          <Image
            src={shadowImg}
            alt="shadow for the audio product image"
            quality={100}
            priority={true}
            className="mt-6 w-40"
          />
          <div className="flex flex-col items-center justify-center gap-3 pb-6">
            <p className="font-bold tracking-[1.07px] uppercase">
              {menulink.name}{" "}
            </p>
            <Link href={menulink.link}>
              <button className="flex items-center gap-1 text-[13px] font-bold tracking-[1px] text-black/50 uppercase">
                shop{" "}
                <span>
                  <ChevronRight className="text-brown-dark size-4" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
