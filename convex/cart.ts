import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const addCartProduct = mutation({
  args: {
    image: v.string(),
    name: v.string(),
    price: v.float64(),
    quantity: v.number(),
    productId: v.string(),
    idu: v.string(),
  },

  handler: async (ctx, args) => {
    await ctx.db.insert("carts", {
      image: args.image,
      name: args.name,
      price: args.price,
      quantity: args.quantity,
      productId: args.productId,
      idu: args.idu,
    });
  },
});

export const getCarts = query({
  handler: async (ctx) => {
    return await ctx.db.query("carts").collect();
  },
});

export const updateCart = mutation({
  args: { id: v.string(), type: v.string() },
  handler: async (ctx, args) => {
    const { id, type } = args;
    const cartProducts = await ctx.db.query("carts").collect();

    const cartProductToUpdate = cartProducts.find(
      (product) => product?.idu === id,
    );

    console.log(cartProductToUpdate, "ohhhhhhhhhhhhhhhhhh");

    if (cartProductToUpdate) {
      await ctx.db.patch(cartProductToUpdate?._id, {
        quantity:
          type === "incr"
            ? cartProductToUpdate?.quantity + 1
            : cartProductToUpdate?.quantity > 0
              ? cartProductToUpdate?.quantity - 1
              : cartProductToUpdate?.quantity,
      });
    }
  },
});

export const deleteCart = mutation({
  handler: async (ctx) => {
    const allCarts = await ctx.db.query("carts").collect();

    allCarts.forEach(async (product) => {
      await ctx.db.delete(product?._id);
    });
  },
});
