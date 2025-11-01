import ImagesByViewport from "@/app/_components/ui/ImagesByViewport";
import Yx1EarphonesDesktopImage from "@/public/home/desktop/image-earphones-yx1.jpg";
import Yx1EarphonesImage from "@/public/home/mobile/image-earphones-yx1.jpg";
import Yx1EarphonesTabletImage from "@/public/home/tablet/image-earphones-yx1.jpg";
import Link from "next/link";

export default function Yx1Earphones() {
  return (
    <div className="block__container mx-auto mt-12 flex flex-col gap-6 md:flex-row">
      <div className="relative h-[250px] overflow-hidden rounded-md md:h-80 md:w-[50%]">
        <ImagesByViewport
          src={Yx1EarphonesImage}
          srcTab={Yx1EarphonesTabletImage}
          srcDesktop={Yx1EarphonesDesktopImage}
          alt="YX1 Earphones"
        />
      </div>

      <div className="bg-white-3 flex h-[250px] flex-col justify-center space-y-8 rounded-lg px-8 md:h-80 md:w-[50%] md:px-12">
        <h4 className="tracking-[2px] uppercase">YX1 EARPHONES</h4>

        <Link href="/yx1-earphones">
          <button className="btn btn-default-2 bg-transparent uppercase">
            see product
          </button>
        </Link>
      </div>
    </div>
  );
}
