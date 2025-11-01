import LogoImage from "@/public/logo.png";
import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src={LogoImage}
      alt="Audiophile logo"
      quality={100}
      placeholder="blur"
    />
  );
}
