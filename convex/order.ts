import { mutation, query } from "./_generated/server";
import { orderSchema } from "./schema";

export const addOrder = mutation({
  args: orderSchema(),

  handler: async (ctx, args) => {
    const { name, email, phone, address, orders } = args;
    await ctx.db.insert("order", {
      name,
      email,
      phone,
      address,
      orders,
    });
  },
});

export const getOrder = query({
  handler: async (ctx) => {
    const allOrders = await ctx.db.query("order").order("desc").collect();

    return allOrders[0];
  },
});
