import Checkout from "@/app/_components/checkout/Checkout";
import CheckoutSuccess from "@/app/_components/checkout/CheckoutSuccess";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout",
};

export default function Page() {
  return (
    <div>
      <Checkout />
      <CheckoutSuccess />
    </div>
  );
}
