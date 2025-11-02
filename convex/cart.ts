import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const addCartProduct = mutation({
  args: {
    image: v.string(),
    name: v.string(),
    price: v.float64(),
    quantity: v.number(),
    productId: v.string(),
  },

  handler: async (ctx, args) => {
    await ctx.db.insert("carts", {
      image: args.image,
      name: args.name,
      price: args.price,
      quantity: args.quantity,
      productId: args.productId,
    });
  },
});

export const getCarts = query({
  handler: async (ctx) => {
    return await ctx.db.query("carts").collect();
  },
});
