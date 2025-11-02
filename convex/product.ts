import { v } from "convex/values";
import { query } from "./_generated/server";

export const getProductBySlug = query({
  args: { slug: v.string() },
  handler: (ctx, args) => {
    return ctx.db
      .query("products")
      .withIndex("slug", (q) => q.eq("slug", args.slug))
      .collect();
  },
});
