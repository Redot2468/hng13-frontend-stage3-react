import HeadphonesProducts from "@/app/_components/headphones/HeadphonesProducts";
import BestGear from "@/app/_components/ui/BestGear";
import Categories from "@/app/_components/ui/Categories";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Headphones",
};

export default function Page() {
  return (
    <div>
      <div className="flex h-20 items-center justify-center bg-[#191919] lg:h-32">
        <h2 className="text-white uppercase">headphones</h2>
      </div>

      <div className="px-6">
        <Suspense fallback={<div>Loading...</div>}>
          <HeadphonesProducts />
        </Suspense>
        <Categories />
        <BestGear />
      </div>
    </div>
  );
}
