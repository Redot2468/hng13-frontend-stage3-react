import ImagesByViewport from "@/app/_components/ui/ImagesByViewport";
import BestAudioGearDesktopImage from "@/public/assets/shared/desktop/image-best-gear.jpg";
import BestAudioGearImage from "@/public/assets/shared/mobile/image-best-gear.jpg";
import BestAudioGearTabletImage from "@/public/assets/shared/tablet/image-best-gear.jpg";

export default function BestGear() {
  return (
    <div className="block__container mx-auto mt-20 mb-28 flex flex-col space-y-8 lg:flex-row-reverse lg:items-center">
      <div className="relative h-[300px] w-full lg:h-[588px] lg:w-[50%]">
        <ImagesByViewport
          src={BestAudioGearImage}
          srcTab={BestAudioGearTabletImage}
          srcDesktop={BestAudioGearDesktopImage}
          alt="An image of a man wearing an headphone"
        />
      </div>

      <div className="mx-auto max-w-[573px] space-y-6 lg:w-[50%] lg:max-w-[445px]">
        <div className="">
          <h4 className="text-center tracking-[1px] uppercase lg:text-left">
            Bringing you the <span className="text-brown-dark">best</span> audio
            gear
          </h4>

          <p className="text-center text-black/50 lg:text-left">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
    </div>
  );
}
