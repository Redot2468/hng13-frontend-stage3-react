import ProductDetails from "@/app/_components/product/ProductDetails";
import { fetchQuery } from "convex/nextjs";
import { Suspense } from "react";
import { api } from "../../../convex/_generated/api";

interface ParamType {
  params: Promise<{ productId: string }>;
}

export async function generateMetadata({ params }: ParamType) {
  const { productId: productSlug } = await params;
  const product = await fetchQuery(api.product.getProductBySlug, {
    slug: productSlug,
  });

  return { title: product?.at(0)?.name };
}

export default async function Page({ params }: ParamType) {
  const { productId: productSlug } = await params;
  return (
    <div className="pt-12">
      <Suspense fallback={<div>Loading...</div>}>
        <ProductDetails slug={productSlug} />
      </Suspense>
    </div>
  );
}
