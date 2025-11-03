import ProductDetails from "@/app/_components/product/ProductDetails";
import { ProductDetailsSkeleton } from "@/app/_components/skeletons/ProductDetails";
import { fetchQuery } from "convex/nextjs";
import { Suspense } from "react";
import { api } from "../../../convex/_generated/api";

interface ParamType {
  params: Promise<{ productId: string }>;
}

export async function generateStaticParams() {
  const products = await fetchQuery(api.product.getAllProducts);

  console.log(products, "yyyyyyyyyyyyyyyyyyyyyyy");

  return products?.map((product) => ({ productId: product?.slug }));
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
      <Suspense fallback={<ProductDetailsSkeleton />}>
        <ProductDetails slug={productSlug} />
      </Suspense>
    </div>
  );
}
