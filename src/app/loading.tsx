import logo from "@/public/audiophile.svg";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed top-0 left-0 flex h-screen w-screen items-center justify-center bg-white">
      <div className="spinner-container relative h-[150px] w-[150px]">
        <Image src={logo} alt="logo" fill className="object-contain" />
      </div>
    </div>
  );
}
