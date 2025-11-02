"use client";

import {
  addProductToCartAction,
  updateProductQuantityAction,
} from "@/app/_lib/actions/product-action";
import {
  addProductToCart,
  getCart,
  updateProductQuantity,
} from "@/app/_lib/redux/cartSlice";
import { useAppDispatch, useAppSelector } from "@/app/_lib/redux/hooks";
import { ProductType } from "@/app/_types/product-types";
import { Minus, Plus } from "lucide-react";
import { toast } from "sonner";
import { Id } from "../../../../convex/_generated/dataModel";

interface ProductButtonsType {
  product: ProductType;
}

export default function ProductButtons({ product }: ProductButtonsType) {
  const { cart } = useAppSelector(getCart);
  const dispatch = useAppDispatch();
  const currentProductInCart = cart?.find(
    (cartProduct) => cartProduct?.productId === product?._id,
  );

  async function handleAddToCart() {
    const newProduct = {
      name: product?.name,
      image: product?.image?.mobile,
      quantity: 1,
      price: product?.price,
      productId: product?._id as string,
      _id: crypto.randomUUID() as Id<"carts">,
      _creationTime: Date.now(),
    };

    dispatch(addProductToCart(newProduct));
    const res = await addProductToCartAction(newProduct, product.slug);

    if (res?.error) {
      toast.error(res.error);
    }
  }

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

  return (
    <div className="mt-8 flex items-center gap-4">
      {/* quantity control */}
      {currentProductInCart ? (
        <button className="number-container h-12 w-[120px] justify-between p-4">
          <Minus
            className="size-3 text-black/25"
            onClick={() =>
              onUpdateProductQuantity(currentProductInCart?._id, "decr")
            }
          />

          <span>{currentProductInCart?.quantity}</span>

          <Plus
            className="size-3 text-black/30"
            onClick={() =>
              onUpdateProductQuantity(currentProductInCart?._id, "incr")
            }
          />
        </button>
      ) : (
        <button onClick={handleAddToCart} className="btn btn-default uppercase">
          Add to cart
        </button>
      )}
    </div>
  );
}

// Build cart first and handle quantity.
