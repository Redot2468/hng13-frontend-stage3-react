"use client";
import { CategorySkeleton } from "@/app/_components/skeletons/Category";
import ImagesByViewport from "@/app/_components/ui/ImagesByViewport";
import { blurDataUrl } from "@/app/_utils/blurdataurl";
import { useQuery } from "convex/react";
import Link from "next/link";
import { api } from "../../../../convex/_generated/api";

export default function SpeakerProducts() {
  const speakers = useQuery(api.category.getProductsByCategory, {
    category: "speakers",
  });

  const isLoading = speakers === undefined;

  if (isLoading) {
    return <CategorySkeleton />;
  }

  return (
    <div className="block__container space-y-14 pt-12 lg:mt-12 lg:space-y-24">
      {speakers?.map((speaker) => (
        <div
          className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-20 nth-of-type-[2]:lg:flex-row-reverse"
          key={speaker._id}
        >
          <div className="relative h-[352px] w-full overflow-hidden rounded-md lg:h-[560px] lg:w-1/2">
            <ImagesByViewport
              src={speaker?.categoryImage?.mobile?.slice(1)}
              srcTab={speaker?.categoryImage?.tablet?.slice(1)}
              srcDesktop={speaker?.categoryImage?.desktop?.slice(1)}
              alt={speaker?.description}
              blurdata={blurDataUrl as string}
            />
          </div>

          <div className="flex flex-col items-center gap-6 text-center lg:w-1/2 lg:items-start lg:text-left">
            {speaker.new && (
              <p className="text-brown-dark text-sm tracking-[10px] uppercase">
                new product
              </p>
            )}
            <h2 className="bold text-black uppercase">{speaker?.name}</h2>

            <p className="mx-auto max-w-[450px] text-[15px] font-medium text-black/75 lg:mx-0 lg:mr-auto">
              {speaker.description}
            </p>

            <Link href={`/${speaker?.slug}`}>
              <button className="btn btn-default mt-2 uppercase">
                see product
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
