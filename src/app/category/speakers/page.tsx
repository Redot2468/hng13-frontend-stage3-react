import { CategorySkeleton } from "@/app/_components/skeletons/Category";
import SpeakerProducts from "@/app/_components/speakers/SpeakersProducts";
import BestGear from "@/app/_components/ui/BestGear";
import Categories from "@/app/_components/ui/Categories";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Speakers",
};

export default function Page() {
  return (
    <div>
      <div className="flex h-20 items-center justify-center bg-[#191919] md:h-32">
        <h2 className="text-white uppercase">Speakers</h2>
      </div>

      <div className="px-6">
        <Suspense fallback={<CategorySkeleton />}>
          <SpeakerProducts />
        </Suspense>
        <Categories />
        <BestGear />
      </div>
    </div>
  );
}
