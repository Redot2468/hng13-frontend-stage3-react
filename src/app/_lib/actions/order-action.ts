import { sendOrderConfirmationEmail } from "@/app/_components/checkout/OrderConfirmationTemplate";
import { CheckoutSchema } from "@/app/_lib/schema/checkout-schema";
import { CheckoutSchemaType } from "@/app/_types/product-types";
import { fetchMutation, fetchQuery } from "convex/nextjs";
import { api } from "../../../../convex/_generated/api";

export async function addOrderAction(formData: CheckoutSchemaType) {
  const validatingData = CheckoutSchema.safeParse(formData);
  if (!validatingData?.success) {
    return {
      error: "Something went wrong validating form.",
    };
  }

  const { address, city, country, name, phone, email } = validatingData?.data;

  const fullAddress = `${address}, ${city}, ${country}`;

  try {
    const carts = await fetchQuery(api.cart.getCarts);

    await fetchMutation(api.order.addOrder, {
      name,
      address: fullAddress,
      phone,
      email,
      orders: carts,
    });

    const order = await fetchQuery(api.order.getOrder);

    await sendOrderConfirmationEmail(email, {
      customerName: name,
      orderNumber: order?._id.slice(0, 5) as string,
      items: order.orders,
      shippingAddress: fullAddress,
    });

    return { success: "Order successfully placed" };
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);

      return {
        error: "Something went wrong!",
      };
    }
  }
}
