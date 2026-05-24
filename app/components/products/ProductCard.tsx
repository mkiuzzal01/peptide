"use client";

import Action from "../buttons/Action";
import Bag from "../icons/Bag";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addToCart } from "@/redux/features/cart/cart.slice";
import { toast } from "react-toastify";
import prodcutImage from "@/public/products/products.png";
import Image from "next/image";

interface ProductCardProps {
  id: number | string;
  slug: string;
  cas: string;
  name: string;
  price: string;
  image: string | any;
}

export default function ProductCard({
  id,
  slug,
  cas,
  name,
  price,
  image,
}: ProductCardProps) {
  const dispatch = useAppDispatch();

  const { products } = useAppSelector((state) => state.cart);

  const handleAddToCart = () => {
    const existingProduct = products.find(
      (product) => product.id === String(id),
    );

    if (existingProduct) {
      toast.info("Product already added to cart");

      return;
    }

    dispatch(
      addToCart({
        id: String(id),
        name,
        price,
        image,
        quantity: 1,
        weight: "1kg",
        packSize: "1kg",
      }),
    );

    toast.success("Product added to cart");
  };

  return (
    <div className="group bg-white rounded-3xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Content */}
      <div className="p-6">
        {/* Product Info */}
        <div className="text-center space-y-2">
          <p className="text-sm font-medium tracking-wide text-gray-400 uppercase">
            CAS #: {cas}
          </p>

          <h3 className="text-xl font-bold text-gray-900">{name}</h3>

          <p className="font-normal">From {price}</p>
        </div>

        <div className="mt-6 flex items-center justify-center gap-3">
          <Link href={`/products/${slug}`}>
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

          <Action
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
          />
        </div>
      </div>

      {/* Product Image */}
      <div className="flex items-center justify-center p-3">
        <Image
          src={image || prodcutImage}
          alt={name}
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
  );
}
