import { Doc } from "../../../convex/_generated/dataModel";

export type ProductType = Doc<"products">;

export type CartType = Doc<"carts"> | undefined;

export interface NewCartProductType {
  image: string;
  name: string;
  price: number;
  quantity: number;
  productId: string;
}
