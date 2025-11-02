"use server";

import { NewCartProductType } from "@/app/_types/product-types";
import { fetchMutation } from "convex/nextjs";
import { revalidatePath } from "next/cache";
import { api } from "../../../../convex/_generated/api";
import { Id } from "../../../../convex/_generated/dataModel";

export async function deleteProductAction() {
  try {
    await fetchMutation(api.cart.deleteCart);

    revalidatePath("/");
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);

      return {
        error: "Something went wrong",
      };
    }
  }
}

export async function updateProductQuantityAction(
  type: "incr" | "decr",
  id: string,
) {
  try {
    await fetchMutation(api.cart.updateCart, {
      id: id as Id<"carts">,
      type,
    });

    revalidatePath("/");
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);

      return { error: `Something went wrong` };
    }
  }
}

export async function addProductToCartAction(
  cartProduct: NewCartProductType,
  slug: string,
) {
  if (!cartProduct) return;

  try {
    await fetchMutation(api.cart.addCartProduct, {
      name: cartProduct?.name,
      quantity: cartProduct?.quantity,
      image: cartProduct?.image,
      price: cartProduct?.price,
      productId: cartProduct?.productId,
    });

    revalidatePath(`/${slug}`);
    return { success: true };
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);

      return {
        error: `Something went wrong`,
      };
    }
  }
}
