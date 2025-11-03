import ImagesByViewport from "@/app/_components/ui/ImagesByViewport";
import Zx7speakerDesktop from "@/public/home/desktop/image-speaker-zx7.jpg";
import Zx7speaker from "@/public/home/mobile/image-speaker-zx7.jpg";
import Zx7speakerTab from "@/public/home/tablet/image-speaker-zx7.jpg";
import Link from "next/link";

export default function ZX7Speaker() {
  return (
    <div className="block__container mt-10 overflow-hidden rounded-md">
      <div className="relative h-[400px] px-6">
        <ImagesByViewport
          src={Zx7speaker}
          srcTab={Zx7speakerTab}
          srcDesktop={Zx7speakerDesktop}
          alt="ZX9 Image"
        />
        <div className="absolute z-20 flex h-full flex-col items-start justify-center gap-6">
          <h1 className="text-black uppercase">zx7 speaker</h1>
          <Link href={`/zx7-speaker`}>
            <button className="btn btn-default-2 bg-transparent uppercase hover:bg-black">
              see product
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
