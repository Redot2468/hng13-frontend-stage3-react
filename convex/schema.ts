import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // Other tables here...

  products: defineTable({
    category: v.string(),
    categoryImage: v.object({
      desktop: v.string(),
      mobile: v.string(),
      tablet: v.string(),
    }),
    description: v.string(),
    features: v.string(),
    gallery: v.object({
      first: v.object({
        desktop: v.string(),
        mobile: v.string(),
        tablet: v.string(),
      }),
      second: v.object({
        desktop: v.string(),
        mobile: v.string(),
        tablet: v.string(),
      }),
      third: v.object({
        desktop: v.string(),
        mobile: v.string(),
        tablet: v.string(),
      }),
    }),
    id: v.float64(),
    image: v.object({
      desktop: v.string(),
      mobile: v.string(),
      tablet: v.string(),
    }),
    includes: v.array(v.object({ item: v.string(), quantity: v.float64() })),
    name: v.string(),
    new: v.boolean(),
    others: v.array(
      v.object({
        image: v.object({
          desktop: v.string(),
          mobile: v.string(),
          tablet: v.string(),
        }),
        name: v.string(),
        slug: v.string(),
      }),
    ),
    price: v.float64(),
    slug: v.string(),
  }).index("category", ["category"]),
});
