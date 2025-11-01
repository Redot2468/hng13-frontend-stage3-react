import { v } from "convex/values";
import { query } from "./_generated/server";

export const getProductsByCategory = query({
  args: { category: v.string() },
  handler: async (ctx, args) => {
    const products = await ctx.db
      .query("products")
      .withIndex("category", (q) => q.eq("category", args.category))
      .collect();

    return products;
  },
});
