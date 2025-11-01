import ZX9Img from "@/public/assets/home/speaker-vector.png";
import PatternImg from "@/public/home/desktop/pattern-circles.svg";
import Image from "next/image";

export default function ZX9Speaker() {
  return (
    <div className="bg-brown-dark block__container relative mt-20 overflow-hidden rounded-md pt-14 pb-14 lg:mt-28 lg:pb-0">
      <Image
        src={PatternImg}
        alt="A pattern for this section background"
        fill
        className="object-cover"
      />

      <div className="z-10 flex flex-col items-center justify-center gap-8 md:gap-12 lg:flex-row lg:gap-24">
        <div className="z-10 h-[207px] w-[173px] md:h-[237px] md:w-[198px] lg:-mb-10 lg:h-[493px] lg:w-[410.23px]">
          <Image
            src={ZX9Img}
            alt="ZX9 speaker image"
            quality={100}
            placeholder="blur"
            className="fill object-contain"
          />
        </div>

        <div className="z-10 flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
          <h1 className="bold text-white uppercase">
            ZX9 <br /> SPEAKER
          </h1>

          <p className="mx-auto max-w-[350px] text-[15px] font-medium text-white/75 lg:mx-0 lg:mr-auto">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>

          <button className="btn mt-2 cursor-pointer bg-black text-white uppercase hover:opacity-80">
            see product
          </button>
        </div>
      </div>
    </div>
  );
}
