import Image, { StaticImageData } from "next/image";
interface ImagesByViewport {
  src: StaticImageData | string;
  srcDesktop: StaticImageData | string;
  srcTab: StaticImageData | string;
  alt: string;
  blurdata?: string;
}

export default function ImagesByViewport({
  src,
  srcTab,
  srcDesktop,
  alt,
  blurdata,
}: ImagesByViewport) {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        quality={100}
        placeholder="blur"
        fill
        blurDataURL={blurdata ?? ""}
        className="object-cover md:hidden"
      />

      <Image
        src={srcTab}
        alt={alt}
        quality={100}
        placeholder="blur"
        fill
        blurDataURL={blurdata ?? ""}
        className="hidden object-cover md:block lg:hidden"
      />

      <Image
        src={srcDesktop}
        alt={alt}
        quality={100}
        placeholder="blur"
        fill
        blurDataURL={blurdata ?? ""}
        className="hidden object-cover lg:block"
      />
    </>
  );
}
