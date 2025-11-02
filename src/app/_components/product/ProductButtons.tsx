"use client";

import { addProductToCartAction } from "@/app/_lib/actions/product-action";
import { ProductType } from "@/app/_types/product-types";
import { useQuery } from "convex/react";
import { Minus, Plus } from "lucide-react";
import { toast } from "sonner";
import { api } from "../../../../convex/_generated/api";

interface ProductButtonsType {
  product: ProductType;
}

export default function ProductButtons({ product }: ProductButtonsType) {
  const cart = useQuery(api.cart.getCarts);
  const currentProductInCart = cart?.find(
    (cartProduct) => cartProduct?.productId === product?._id,
  );

  async function handleAddToCart() {
    const newProduct = {
      name: product?.name,
      image: product?.image?.mobile,
      quantity: 1,
      price: product?.price,
      productId: product?._id,
    };

    const res = await addProductToCartAction(newProduct, product.slug);

    if (res?.error) {
      toast.error(res.error);
    }
  }

  return (
    <div className="mt-8 flex items-center gap-4">
      {/* quantity control */}
      {currentProductInCart ? (
        <button className="number-container h-12 w-[120px] justify-between p-4">
          <Minus className="size-3 text-black/25" />

          <span>{currentProductInCart?.quantity}</span>

          <Plus
            className="size-3 text-black/30"
            // onClick={() => handleProductQuantity("incr")}
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
