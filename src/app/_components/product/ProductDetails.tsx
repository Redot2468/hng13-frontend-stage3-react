import BackButton from "@/app/_components/product/BackButton";
import ProductButtons from "@/app/_components/product/ProductButtons";
import ProductGallery from "@/app/_components/product/ProductGallery";
import SimilarProducts from "@/app/_components/product/SimilarProducts";
import BestGear from "@/app/_components/ui/BestGear";
import Categories from "@/app/_components/ui/Categories";
import { blurDataUrl } from "@/app/_utils/blurdataurl";
import { fetchQuery } from "convex/nextjs";
import Image from "next/image";
import { api } from "../../../../convex/_generated/api";

interface ProductDetailsType {
  slug: string;
}

export default async function ProductDetails({ slug }: ProductDetailsType) {
  const [product] = await Promise.all([
    fetchQuery(api.product.getProductBySlug, { slug }),
    // getCartProducts(user?.id),
  ]);

  console.log(product, "product-2");

  return (
    <div className="sm mx-auto max-w-[500px] border px-4 sm:max-w-[700px] md:px-6 lg:max-w-[1110px]">
      {/* first section image and desc */}
      <BackButton />

      <div className="mt-6 flex flex-col items-center justify-between gap-6 sm:mt-10 sm:flex-row lg:mt-12">
        {/* image */}
        <div className="relative h-[327px] w-full sm:h-[480px] sm:w-[281px] lg:h-[560px] lg:w-[540px]">
          {product?.at(0)?.image?.mobile && (
            <Image
              src={product?.at(0)?.image?.mobile?.slice(1) ?? ""}
              alt={product?.at(0)?.name ?? ""}
              fill
              className="w-full bg-top object-cover"
              quality={100}
              placeholder="blur"
              blurDataURL={blurDataUrl}
              priority={true}
            />
          )}

          {product?.at(0)?.image?.tablet && (
            <Image
              src={product?.at(0)?.image?.tablet?.slice(1) ?? ""}
              alt={product?.at(0)?.name ?? ""}
              fill
              className="w-full object-cover"
              quality={100}
              placeholder="blur"
              blurDataURL={blurDataUrl}
              priority={true}
            />
          )}

          {product?.at(0)?.image?.desktop && (
            <Image
              src={product?.at(0)?.image?.desktop?.slice(1) ?? ""}
              alt={product?.at(0)?.name ?? ""}
              fill
              className="w-[50%] object-cover"
              quality={100}
              placeholder="blur"
              blurDataURL={blurDataUrl}
              priority={true}
            />
          )}
        </div>

        <div className="relative border text-left sm:w-[50%] lg:w-[446px]">
          {product?.at(0)?.new && (
            <p className="text-brown-dark text-sm tracking-[10px] uppercase">
              new product
            </p>
          )}

          <h2 className="mt-5 text-black uppercase sm:text-[28px] lg:text-[40px]">
            {product?.at(0)?.name}
          </h2>

          <p className="mt-4 font-medium tracking-[0px] text-black/50">
            {product?.at(0)?.description}
          </p>

          <p className="mt-6 text-lg font-bold tracking-[1.29px] text-black">
            ${product?.at(0)?.price.toLocaleString()}
          </p>

          <ProductButtons product={product.at(0)} />
        </div>
      </div>

      {/* features and in the box */}
      <div className="mt-20 flex flex-col gap-24 sm:mt-24 lg:mt-28 lg:flex-row">
        {/* features */}
        <div className="space-y-8 lg:w-[60%]">
          <h5 className="font-bold uppercase">features</h5>

          <div className="space-y-6 text-black/40">
            <p>{product?.at(0)?.features?.split("\n\n")?.at(0)}</p>
            <p className="">{product?.at(0)?.features?.split("\n\n")?.at(1)}</p>
          </div>
        </div>

        {/* in the box */}
        <div className="items-start space-y-5 border sm:flex sm:justify-between lg:w-[40%] lg:flex-col lg:justify-normal">
          <h5 className="font-bold uppercase">in the box</h5>
          <ul className="space-y-2">
            {product?.at(0)?.includes?.map((item, idx) => (
              <li key={idx} className="flex items-center gap-6">
                <span className="text-brown-dark leading-[25px] font-bold">
                  {item?.quantity}x
                </span>
                <span className="text-black/50">{item?.item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/*gallery  */}
      <ProductGallery product={product?.at(0)} />

      {/* other products */}
      <SimilarProducts product={product?.at(0)} />

      <div className="mt-28">
        <Categories />
      </div>

      <BestGear />
    </div>
  );
}
