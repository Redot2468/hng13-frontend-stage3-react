import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
// Id, image, name, price, quantity

export const orderSchema = () => {
  return {
    name: v.string(),
    email: v.string(),
    address: v.string(),
    phone: v.string(),
    orders: v.array(
      v.object({
        _id: v.string(),
        _creationTime: v.number(),
        image: v.string(),
        name: v.string(),
        price: v.float64(),
        quantity: v.number(),
        productId: v.string(),
      }),
    ),
  };
};
export default defineSchema({
  carts: defineTable({
    image: v.string(),
    name: v.string(),
    price: v.float64(),
    quantity: v.number(),
    idu: v.string(),
    productId: v.string(),
  }),

  order: defineTable(orderSchema()),

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
  })
    .index("category", ["category"])
    .index("slug", ["slug"]),
});
