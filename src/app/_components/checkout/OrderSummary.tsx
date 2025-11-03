"use client";

import { blurDataUrl } from "@/app/_utils/blurdataurl";
import { useQuery } from "convex/react";
import Image from "next/image";
import { api } from "../../../../convex/_generated/api";

interface OrderSummaryType {
  isAllInputsFilled: boolean;
  isCheckingOut: boolean;
}

export default function OrderSummary({
  isAllInputsFilled,
  isCheckingOut,
}: OrderSummaryType) {
  const cart = useQuery(api.cart.getCarts);

  const total = cart?.reduce(
    (acc, curProduct) => acc + curProduct?.quantity * curProduct?.price,
    0,
  );

  const pricing = [
    { name: "total", price: total },
    { name: "shipping", price: 50 },
    { name: "vat (included)", price: (total ?? 0) * 0.2 },
  ];

  // Don't add vat
  const grandTotal = pricing?.reduce(
    (acc, curPrice) =>
      !curPrice?.name?.includes("vat") ? acc + (curPrice?.price ?? 0) : acc,
    0,
  );

  return (
    <div className="space-y-10 rounded-xl bg-white px-6 py-8">
      <h6 className="uppercase">Summary</h6>

      {/* cart products */}
      <div className="space-y-5">
        {cart?.map((product) => (
          <div key={product?._id} className="flex items-center justify-between">
            <div className="flex items-center gap-5">
              <div className="relative size-16 rounded-lg">
                <Image
                  src={product?.image?.slice(1)}
                  alt={product?.name}
                  fill
                  className="object-cover"
                  quality={100}
                  placeholder="blur"
                  blurDataURL={blurDataUrl as string}
                  priority
                />
              </div>

              <div className="space-y-1">
                <p className="font-bold">{product?.name}</p>

                <p className="text-sm font-bold text-black/50">
                  ${product?.price?.toLocaleString()}
                </p>
              </div>
            </div>

            <p className="text-sm font-bold text-black/50">
              x{product?.quantity}
            </p>
          </div>
        ))}
      </div>

      {/* pricing */}
      <div className="space-y-8">
        <div className="space-y-3">
          {pricing?.map((pricingObj, idx) => (
            <div key={idx} className="flex items-center justify-between">
              <p className="text-[15px] font-medium text-black/50 uppercase">
                {pricingObj?.name}
              </p>

              <h6 className="font-bold">
                ${pricingObj?.price?.toLocaleString()}
              </h6>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <p className="font-medium text-black/50 uppercase">grand total</p>

          <h6 className="text-brown-dark font-bold">
            ${grandTotal?.toLocaleString()}
          </h6>
        </div>

        {cart && cart?.length > 0 && (
          <button
            className="btn btn-default w-full uppercase disabled:cursor-not-allowed disabled:opacity-50"
            disabled={!isAllInputsFilled || isCheckingOut}
            aria-disabled={!isAllInputsFilled || isCheckingOut}
          >
            {isCheckingOut ? "Checking out..." : "continue & pay"}
          </button>
        )}
      </div>
    </div>
  );
}
