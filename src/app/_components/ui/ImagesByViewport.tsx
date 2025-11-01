import Image, { StaticImageData } from "next/image";
interface ImagesByViewport {
  src: StaticImageData;
  srcDesktop: StaticImageData;
  srcTab: StaticImageData;
  alt: string;
}

export default function ImagesByViewport({
  src,
  srcTab,
  srcDesktop,
  alt,
}: ImagesByViewport) {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        quality={100}
        placeholder="blur"
        fill
        className="object-cover md:hidden"
      />

      <Image
        src={srcTab}
        alt={alt}
        quality={100}
        placeholder="blur"
        fill
        className="hidden object-cover md:block lg:hidden"
      />

      <Image
        src={srcDesktop}
        alt={alt}
        quality={100}
        placeholder="blur"
        fill
        className="hidden object-cover lg:block"
      />
    </>
  );
}
