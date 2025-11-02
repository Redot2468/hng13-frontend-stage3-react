"use client";

import { useCloseModal } from "@/app/_hooks/useCloseModal";
import {
  deleteProductAction,
  updateProductQuantityAction,
} from "@/app/_lib/actions/product-action";
import {
  deleteAllProduct,
  getCart,
  onToggleCart,
  updateProductQuantity,
} from "@/app/_lib/redux/cartSlice";
import { useAppDispatch, useAppSelector } from "@/app/_lib/redux/hooks";
import { blurDataUrl } from "@/app/_utils/blurdataurl";
import { Minus, Plus, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { toast } from "sonner";

export default function CartBlock() {
  const { cart, isCartOpen } = useAppSelector(getCart);
  const dispatch = useAppDispatch();

  const closeModal = () => dispatch(onToggleCart(false));
  useCloseModal(".cart-container", closeModal, isCartOpen);

  const onCloseCart = () => dispatch(onToggleCart(false));

  const totalPrice = cart?.reduce(
    (acc, cur) =>
      cur?.price && cur?.quantity ? acc + cur?.price * cur?.quantity : acc,
    0,
  );

  async function onUpdateProductQuantity(
    productId: string | undefined,
    type: "incr" | "decr",
  ) {
    if (!productId) return;
    if (type === "incr")
      dispatch(updateProductQuantity({ id: productId, type: "incr" }));
    else dispatch(updateProductQuantity({ id: productId, type: "decr" }));

    const currentProduct = cart?.find((product) => product?._id === productId);

    if (currentProduct?._id) {
      const res = await updateProductQuantityAction(type, currentProduct?._id);

      if (res?.error) {
        toast.error(res?.error);
      }
    }
  }

  async function onDeleteAllProduct() {
    dispatch(deleteAllProduct());

    const res = await deleteProductAction();
    if (res?.error) {
      toast.error(res.error);
    }
  }

  return (
    <AnimatePresence>
      {isCartOpen && (
        <motion.div
          initial={{ visibility: "hidden", opacity: 0 }}
          animate={{ visibility: "visible", opacity: 1 }}
          exit={{ visibility: "hidden", opacity: 0 }}
          className="fixed top-0 z-50 flex h-screen w-screen flex-col items-center justify-center gap-8 bg-black/40 px-6 backdrop-blur-xs md:items-end md:px-12"
        >
          <div className="flex w-[320px] justify-end">
            <button className="w-fit" onClick={onCloseCart}>
              <X className="text-white" />
            </button>
          </div>
          <motion.div
            initial={{ scale: "90%" }}
            animate={{ scale: "100%" }}
            exit={{ scale: "90%" }}
            className="hide-scrollbar cart-container relative mx-auto h-[490px] w-full max-w-[370px] overflow-y-scroll rounded-xl border bg-white px-6 py-8 md:mx-0 md:ml-auto md:max-w-[377px]"
          >
            <header className="flex items-center justify-between">
              <h6 className="uppercase">cart ({cart?.length})</h6>
              {cart?.length > 0 && (
                <button
                  className="text-black/50 transition-all hover:text-black hover:underline"
                  onClick={onDeleteAllProduct}
                >
                  Remove all
                </button>
              )}
            </header>

            <main className="mt-8 space-y-4">
              {cart?.length ? (
                cart?.map((cartProduct) => (
                  <div
                    key={cartProduct?._id}
                    className="flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center justify-center gap-4">
                      <div className="relative size-16 overflow-hidden rounded-md">
                        <Image
                          src={cartProduct?.image?.slice(1) ?? ""}
                          alt={cartProduct?.name ?? ""}
                          fill
                          className="object-contain"
                          quality={100}
                          placeholder="blur"
                          blurDataURL={blurDataUrl as string}
                        />
                      </div>

                      <div className="space-y-1">
                        <p className="font-bold text-black uppercase">
                          xx99 mk ii
                        </p>
                        <p className="text-sm text-black/50">
                          $
                          {(
                            cartProduct!.price! * cartProduct!.quantity!
                          ).toLocaleString()}
                        </p>
                      </div>
                    </div>

                    <button className="bg-white-3 flex h-8 w-24 items-center justify-between px-2 py-2">
                      <Minus
                        className="size-3.5 text-black/40"
                        onClick={() =>
                          onUpdateProductQuantity(cartProduct?._id, "decr")
                        }
                      />
                      <span className="text-[13px] font-bold">
                        {cartProduct?.quantity}
                      </span>
                      <Plus
                        className="size-3.5 text-black/40"
                        onClick={() =>
                          onUpdateProductQuantity(cartProduct?._id, "incr")
                        }
                      />
                    </button>
                  </div>
                ))
              ) : (
                <p className="flex h-[220px] items-center justify-center text-center">
                  Your cart is empty
                  <br />
                  Start adding your favorite audio products
                </p>
              )}
            </main>

            <footer className="bottom-0 left-0 mt-8 w-full space-y-6 bg-white">
              <div className="flex items-center justify-between">
                <p className="text-black/50 uppercase">total</p>
                <h6>${totalPrice.toLocaleString()}</h6>
              </div>

              <button
                disabled={!cart?.length}
                className="btn btn-default w-full uppercase disabled:cursor-not-allowed disabled:opacity-50"
              >
                checkout
              </button>
            </footer>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
