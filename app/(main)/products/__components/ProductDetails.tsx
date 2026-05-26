"use client";

import { useEffect, useMemo, useState } from "react";
import Container from "@/app/components/shared/Container";
import productImg1 from "@/public/products/image 32.png";
import Image from "next/image";
import ProductTabs from "./ProductTabs";
import QuantityControl from "@/app/components/shared/QuantityControl";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addToCart } from "@/redux/features/cart/cart.slice";
import { toast } from "react-toastify";

interface Props {
  payload: any;
}

export default function ProductDetails({ payload }: Props) {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.cart);

  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedQuantityOption, setSelectedQuantityOption] = useState<
    string | null
  >(null);
  const [quantity, setQuantity] = useState<number>(1);

  // -----------------------------
  // DERIVE SIZES FROM VARIANTS
  // -----------------------------
  const sizes = useMemo(() => {
    const map = new Map<number, { id: number; size: string }>();

    payload?.variants?.forEach((v: any) => {
      if (!map.has(v.size_id)) {
        map.set(v.size_id, {
          id: v.size_id,
          size: v.size,
        });
      }
    });

    return Array.from(map.values());
  }, [payload?.variants]);

  // -----------------------------
  // DERIVE QUANTITIES FROM VARIANTS
  // -----------------------------
  const quantityOptions = useMemo(() => {
    const map = new Map<number, string>();

    payload?.variants?.forEach((v: any) => {
      if (!map.has(v.quantity_id)) {
        map.set(v.quantity_id, v.quantity);
      }
    });

    return Array.from(map.values());
  }, [payload?.variants]);

  // -----------------------------
  // AUTO SELECT DEFAULTS
  // -----------------------------
  useEffect(() => {
    if (sizes.length && selectedSize === null) {
      setSelectedSize(sizes[0].id);
    }
  }, [sizes, selectedSize]);

  useEffect(() => {
    if (quantityOptions.length && selectedQuantityOption === null) {
      setSelectedQuantityOption(quantityOptions[0]);
    }
  }, [quantityOptions, selectedQuantityOption]);

  // -----------------------------
  // GET SELECTED VARIANT
  // -----------------------------
  const selectedVariant = useMemo(() => {
    return payload?.variants?.find(
      (v: any) =>
        v.size_id === selectedSize && v.quantity === selectedQuantityOption,
    );
  }, [payload?.variants, selectedSize, selectedQuantityOption]);

  // -----------------------------
  // CART CHECK
  // -----------------------------

  const handleAddToCart = () => {
    if (!selectedVariant) {
      toast.error("Please select valid variant");
      return;
    }

    const exists = products.find(
      (p) =>
        p.id === payload?.id &&
        p.selectedSize === selectedVariant.size &&
        p.selectedPack === selectedVariant.quantity,
    );

    if (exists) {
      toast.error("Product already added");
      return;
    }

    dispatch(
      addToCart({
        id: payload?.id,
        name: payload?.name,
        thumbnail: payload?.thumbnail,
        quantity,
        selectedSize: selectedVariant.size,
        selectedPack: selectedVariant.quantity,

        selectedVariantId: selectedVariant.id,

        variants: payload.variants,
      }),
    );

    toast.success("Added to cart");
  };

  const handleIncrease = () => setQuantity((prev) => prev + 1);

  const handleDecrease = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  return (
    <Container>
      <div className="py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* IMAGE */}
          <div className="bg-white rounded-3xl p-10 flex items-center justify-center">
            <Image
              src={selectedVariant?.image || payload?.thumbnail || productImg1}
              alt={payload?.name}
              width={210}
              height={210}
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
                  {payload?.name}
                </h1>

                <p className="text-sm text-gray-400 mt-1">
                  CAS #: {payload?.cas_number}
                </p>
              </div>

              <div className="text-right">
                <p className="text-3xl font-bold text-[#222]">
                  ${selectedVariant?.price ?? payload?.price_from}
                </p>
                <p className="text-sm text-gray-400">One-time</p>
              </div>
            </div>

            {/* SIZE + QUANTITY */}
            <div className="flex justify-between gap-6">
              {/* SIZE */}
              <div>
                <p className="text-sm font-medium mb-3">Size</p>

                <div className="flex gap-2 flex-wrap">
                  {sizes.map((size) => (
                    <button
                      key={size.id}
                      onClick={() => setSelectedSize(size.id)}
                      className={`px-4 py-1.5 rounded-full text-sm border transition
                        ${
                          selectedSize === size.id
                            ? "bg-[#0A84FF] text-white border-[#0A84FF]"
                            : "bg-white text-gray-500 border-gray-200"
                        }`}
                    >
                      {size.size}
                    </button>
                  ))}
                </div>
              </div>

              {/* QUANTITY */}
              <div>
                <p className="text-sm font-medium mb-3">Quantity</p>

                <div className="flex gap-2 flex-wrap">
                  {quantityOptions.map((item) => (
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
                {payload?.research_use_only}
              </p>
            </div>

            {/* TABS */}
            <div className="bg-[#f8f8f8] rounded-2xl p-4">
              <ProductTabs payload={payload?.coas} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
