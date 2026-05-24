"use client";

import { useState } from "react";
import Container from "@/app/components/shared/Container";
import productImg1 from "@/public/products/image 32.png";
import Image from "next/image";
import ProductTabs from "./ProductTabs";
import QuantityControl from "@/app/components/shared/QuantityControl";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addToCart } from "@/redux/features/cart/cart.slice";
import { toast } from "react-toastify";

interface Props {
  slug: string;
}

const productDetails = {
  id: 1,
  title: "BPC-157",
  image: productImg1,
  cas: "CAS #: 137525-51-0",
  size: [5, 10, 15],
  quantityOptions: ["Single Vial", "Pack of 10"],
  price: 39,
};

export default function ProductDetails({ slug }: Props) {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.cart);

  const [selectedSize, setSelectedSize] = useState<number>(5);
  const [selectedQuantityOption, setSelectedQuantityOption] =
    useState<string>("Single Vial");
  const [quantity, setQuantity] = useState<number>(1);

  const handleIncrease = () => setQuantity((prev) => prev + 1);

  const handleDecrease = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleAddToCart = () => {
    const existingProduct = products.find(
      (product) => product.id === String(productDetails.id),
    );

    if (existingProduct) {
      toast.info("Already in cart");
      return;
    }

    dispatch(
      addToCart({
        id: String(productDetails.id),
        name: productDetails.title,
        price: String(productDetails.price),
        image: productDetails.image,
        quantity,
        weight: `${selectedSize}mg`,
        packSize: selectedQuantityOption,
      }),
    );

    toast.success("Added to cart");
  };

  return (
    <Container>
      <div className="min-h-screen py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* IMAGE */}
          <div className="bg-white rounded-3xl p-10 flex items-center justify-center">
            <Image
              src={productDetails.image}
              alt={productDetails.title}
              className="w-[210px] h-auto object-contain"
            />
          </div>

          {/* CONTENT */}
          <div className="bg-white rounded-3xl p-6 space-y-4">
            {/* TOP */}
            <div className="flex justify-between">
              <div>
                <p className="text-xs text-gray-400">Order Now, Ships Today</p>
                <h1 className="text-4xl font-bold text-[#222] mt-1">
                  {productDetails.title}
                </h1>
                <p className="text-sm text-gray-400 mt-1">
                  {productDetails.cas}
                </p>
              </div>

              <div className="text-right">
                <p className="text-3xl font-bold text-[#222]">
                  ${productDetails.price}.00
                </p>
                <p className="text-sm text-gray-400">One-time</p>
              </div>
            </div>

            {/* SIZE + QTY OPTIONS */}
            <div className="flex justify-between gap-6">
              <div>
                <p className="text-sm font-medium mb-3">Size</p>
                <div className="flex gap-2 flex-wrap">
                  {productDetails.size.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-1.5 rounded-full text-sm border transition
                        ${
                          selectedSize === size
                            ? "bg-[#0A84FF] text-white border-[#0A84FF]"
                            : "bg-white text-gray-500 border-gray-200"
                        }`}
                    >
                      {size} mg
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-medium mb-3">Quantity</p>
                <div className="flex gap-2 flex-wrap">
                  {productDetails.quantityOptions.map((item) => (
                    <button
                      key={item}
                      onClick={() => setSelectedQuantityOption(item)}
                      className={`px-4 py-1.5 rounded-full text-sm border transition
                        ${
                          selectedQuantityOption === item
                            ? "bg-[#0A84FF] text-white border-[#0A84FF]"
                            : "bg-white text-gray-500 border-gray-200"
                        }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* COUNTER + BUTTON */}
            <div className="flex justify-between items-center">
              <QuantityControl
                quantity={quantity}
                onDecrease={handleDecrease}
                onIncrease={handleIncrease}
              />

              <button
                onClick={handleAddToCart}
                className="bg-[#0A84FF] hover:bg-[#0077f0] transition text-white px-10 py-3 rounded-full text-sm font-medium"
              >
                Add to Cart
              </button>
            </div>

            {/* INFO BOX */}
            <div className="bg-[#f8f8f8] rounded-2xl p-4">
              <h3 className="font-semibold text-sm mb-2">Research Use Only</h3>
              <p className="text-xs text-gray-500 leading-5">
                All products are intended solely for laboratory research only.
              </p>
            </div>

            {/* TABS */}
            <div className="bg-[#f8f8f8] rounded-2xl p-4">
              <ProductTabs />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
