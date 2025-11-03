import LogoImage from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"}>
      <Image
        src={LogoImage}
        alt="Audiophile logo"
        quality={100}
        placeholder="blur"
      />
    </Link>
  );
}
