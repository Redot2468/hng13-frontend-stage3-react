import CartBlock from "@/app/_components/cart/CartBlock";
import CartInitializer from "@/app/_components/cart/CartInitializer";
import { fetchQuery } from "convex/nextjs";
import { api } from "../../../../convex/_generated/api";

export default async function Cart() {
  const cart = await fetchQuery(api.cart.getCarts);

  return (
    <>
      <CartBlock />
      <CartInitializer cartProducts={cart} />
    </>
  );
}

// if there are not product, disable checkout btn and remove the "Remove all" button
