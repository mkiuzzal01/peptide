"use client";

import Action from "../buttons/Action";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import prodcutImage from "@/public/products/products.png";
import Image from "next/image";
import { IProduct } from "@/redux/types";

interface ProductCardProps {
  product: IProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.cart);

  // const handleAddToCart = () => {
  //   const defaultVariant = product.variants?.[0];

  //   if (!defaultVariant) {
  //     toast.error("Variant not found");
  //     return;
  //   }

  //   const exists = products.find(
  //     (p) =>
  //       p.id === product.id &&
  //       p.selectedSize === defaultVariant.size &&
  //       p.selectedPack === defaultVariant.quantity,
  //   );

  //   if (exists) {
  //     toast.error("Product already added");
  //     return;
  //   }

  //   const variant = product.variants.find(
  //     (v) =>
  //       v.size === defaultVariant.size &&
  //       v.quantity === defaultVariant.quantity,
  //   );

  //   dispatch(
  //     addToCart({
  //       id: product.id,
  //       name: product.name,
  //       thumbnail: product.thumbnail || "",
  //       quantity: 1,
  //       selectedVariantId: variant?.id || 0,
  //       selectedSize: defaultVariant.size,
  //       selectedPack: defaultVariant.quantity,
  //       variants: product.variants || [],
  //     }),
  //   );

  //   toast.success("Added to cart");
  // };

  return (
    <Link href={`/products/${product?.slug}`}>
      <div className="group bg-white rounded-3xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        {/* Content */}
        <div className="p-6">
          {/* Product Info */}
          <div className="text-center space-y-2">
            <p className="text-sm font-medium tracking-wide text-gray-400 uppercase">
              CAS #: {product?.cas_number}
            </p>

            <h3 className="text-xl font-bold text-gray-900">{product?.name}</h3>

            <p className="font-normal">From $ {product?.from_price}</p>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <Link href={`/products/${product?.slug}`}>
              <Action
                name="View Details"
                title="View Details"
                className="
                h-8
                px-2
                rounded-full
                border border-gray-200
                bg-white
                text-gray-700
                text-sm font-semibold
                hover:bg-gray-100
                transition-all duration-200
                flex items-center justify-center
              "
              />
            </Link>

            {/* <Action
            onClick={handleAddToCart}
            name="Add to Cart"
            title="Add to Cart"
            icon={<Bag size="w-5 h-5" />}
            iconPosition="right"
            className="
              h-8
              px-2
              rounded-full
              bg-blue-600
              text-white
              text-sm font-semibold
              hover:bg-blue-700
              transition-all duration-200
              flex items-center justify-center gap-2
              shadow-sm
            "
          /> */}
          </div>
        </div>

        {/* Product Image */}
        <div className="flex items-center justify-center p-3">
          <Image
            src={product?.thumbnail || prodcutImage}
            alt={product?.name || ""}
            width={300}
            height={300}
            className="
            w-full
            h-32
            object-contain
            transition-transform
            duration-300
            group-hover:scale-105
          "
          />
        </div>
      </div>
    </Link>
  );
}
