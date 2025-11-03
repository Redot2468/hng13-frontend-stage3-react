"use client";

import { useCloseModal } from "@/app/_hooks/useCloseModal";
import { deleteProductAction } from "@/app/_lib/actions/product-action";
import {
  deleteAllProduct,
  getCart,
  onToggleSuccessModal,
} from "@/app/_lib/redux/cartSlice";
import { useAppDispatch, useAppSelector } from "@/app/_lib/redux/hooks";
import { blurDataUrl } from "@/app/_utils/blurdataurl";
import orderConfirmIcon from "@/public/checkout/icon-order-confirmation.svg";
import { useQuery } from "convex/react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { toast } from "sonner";
import { api } from "../../../../convex/_generated/api";

export default function CheckoutSuccess() {
  const cartProducts = useQuery(api.cart.getCarts);
  const [isLoading, startTransition] = useTransition();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { isSuccessModalOpen } = useAppSelector(getCart);
  const closeModal = () => {
    dispatch(onToggleSuccessModal(false));
    onClearCartOnSuccess();
    router.push("/");
  };

  useCloseModal(".success-modal", closeModal, isSuccessModalOpen);

  const firstProductToDisplay = cartProducts?.at(0);

  const otherItemsLength = cartProducts?.slice(1).length;

  const grandTotal = cartProducts?.reduce(
    (acc, curCartProduct) =>
      acc + curCartProduct?.price * curCartProduct?.quantity,
    0,
  );

  async function onClearCartOnSuccess() {
    startTransition(async () => {
      const res = await deleteProductAction();

      if (res?.success) {
        dispatch(deleteAllProduct());
        dispatch(onToggleSuccessModal(false));
        router.push("/");
      }

      if (res?.error) toast.error(res?.error);
    });
  }

  return (
    <AnimatePresence>
      {isSuccessModalOpen && (
        <motion.div
          initial={{ visibility: "hidden", opacity: 0 }}
          animate={{ visibility: "visible", opacity: 1 }}
          exit={{ visibility: "hidden", opacity: 0 }}
          className="fixed top-0 z-50 flex h-screen w-full items-center justify-center bg-black/30 px-6 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: "90%" }}
            animate={{ scale: "100%" }}
            exit={{ scale: "90%" }}
            className="success-modal modal mx-auto h-[600px] w-full max-w-[540px] space-y-8 rounded-xl bg-white px-7 py-10 sm:px-9 sm:py-10"
          >
            <div className="">
              <Image
                src={orderConfirmIcon}
                alt="order confirmed"
                quality={100}
                priority
              />

              <h5 className="mt-5 uppercase sm:mt-7">
                Thank You <br /> for your order
              </h5>

              <p className="mt-4 text-black/50 sm:mt-5">
                You will recieve an email confirmation shortly
              </p>
            </div>

            {/* div */}
            <div className="relative overflow-hidden rounded-xl sm:flex sm:h-[150px] sm:min-h-40">
              <div className="bg-white-3 ov px-6 py-5 sm:w-[65%]">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-8">
                    {firstProductToDisplay?.image && (
                      <div className="relative size-16">
                        <Image
                          src={firstProductToDisplay?.image?.slice(1)}
                          alt={firstProductToDisplay?.name ?? "No image"}
                          fill
                          className="object-vover"
                          quality={100}
                          placeholder="blur"
                          blurDataURL={blurDataUrl as string}
                          priority
                        />
                      </div>
                    )}

                    <div className="space-y-1">
                      <p className="font-bold uppercase">
                        {firstProductToDisplay?.name}
                      </p>
                      <p className="text-sm font-bold text-black/50 uppercase">
                        ${firstProductToDisplay?.price?.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  <p className="font-bold text-black/50">
                    x{firstProductToDisplay?.quantity}
                  </p>
                </div>

                <div className="mt-2 h-px bg-black/10" />

                <p className="mt-2 text-center text-xs font-bold tracking-[-0.21px] text-black/50">
                  and {otherItemsLength} other item(s)
                </p>
              </div>
              <div className="flex h-[92px] flex-col justify-center gap-2 bg-black object-cover px-6 sm:h-full sm:w-[35%]">
                <p className="text-neutral-400 uppercase">grand total</p>
                <p className="text-lg font-bold text-white">
                  ${grandTotal?.toLocaleString()}
                </p>
              </div>
            </div>

            <button
              className="btn btn-default w-full uppercase"
              onClick={() => {
                onClearCartOnSuccess();
              }}
              disabled={isLoading}
            >
              back to home
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
