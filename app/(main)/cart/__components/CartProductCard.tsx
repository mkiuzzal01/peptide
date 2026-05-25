"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { useAppDispatch } from "@/redux/hooks";

import {
  removeCartItem,
  updateCartItem,
} from "@/redux/features/cart/cart.slice";

import { ICartItem, IProductVariant } from "@/redux/types";

interface Props {
  item: ICartItem;
}

export default function CartProductCard({ item }: Props) {
  const dispatch = useAppDispatch();

  const {
    id,
    name,
    thumbnail,
    variants,
    quantity,
    selectedPack,
    selectedSize,
  } = item;

  // UNIQUE SIZES
  const sizes = [...new Set(variants.map((v) => v.size))];

  // LOCAL STATES
  const [currentSize, setCurrentSize] = useState(selectedSize);
  const [currentPack, setCurrentPack] = useState(selectedPack);
  const [qty, setQty] = useState(quantity);

  // FILTERED VARIANTS
  const filteredVariants = useMemo(() => {
    return variants.filter((v) => v.size === currentSize);
  }, [variants, currentSize]);

  // AVAILABLE PACKS
  const packs = filteredVariants.map((v) => v.quantity);

  // AUTO SELECT PACK
  useEffect(() => {
    const exists = filteredVariants.find((v) => v.quantity === currentPack);

    if (!exists && filteredVariants.length > 0) {
      setCurrentPack(filteredVariants[0].quantity);
    }
  }, [currentSize]);

  // SELECTED VARIANT
  const selectedVariant: IProductVariant | undefined = variants.find(
    (v) => v.size === currentSize && v.quantity === currentPack,
  );

  // UPDATE REDUX
  useEffect(() => {
    dispatch(
      updateCartItem({
        id,
        quantity: qty,
        selectedSize: currentSize,
        selectedPack: currentPack,
      }),
    );
  }, [dispatch, id, qty, currentSize, currentPack]);

  return (
    <div className="relative flex flex-col lg:flex-row gap-5 bg-white border rounded-2xl p-4 shadow-sm">
      {/* REMOVE BUTTON */}
      <button
        onClick={() => dispatch(removeCartItem(id))}
        className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition"
      >
        <X size={16} />
      </button>

      {/* IMAGE */}
      <div className="w-full lg:w-28 h-28 flex items-center justify-center shrink-0 bg-gray-50 rounded-xl">
        <Image
          src={selectedVariant?.image || thumbnail}
          alt={name}
          width={100}
          height={100}
          className="object-contain w-full h-full p-2"
        />
      </div>

      {/* CONTENT */}
      <div className="flex-1 space-y-4">
        {/* TITLE */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-gray-900">
            {name}
          </h3>

          <p className="text-sm text-gray-500">
            Stock: {selectedVariant?.stock || 0}
          </p>
        </div>

        {/* SIZE + PACK */}
        <div className="flex items-center justify-between gap-4">
          {/* SIZE */}
          <div className="space-y-2">
            <div className="flex flex-wrap gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setCurrentSize(size)}
                  className={`px-3 py-1.5 text-xs md:text-sm rounded-full border transition
                  ${
                    currentSize === size
                      ? "bg-[#0A84FF] text-white border-[#0A84FF]"
                      : "text-gray-600 border-gray-200 hover:border-[#0A84FF]"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* PACK */}
          <div className="space-y-2">
            <div className="flex flex-wrap gap-2">
              {packs.map((pack) => (
                <button
                  key={pack}
                  onClick={() => setCurrentPack(pack)}
                  className={`px-3 py-1.5 text-xs md:text-sm rounded-full border transition
                  ${
                    currentPack === pack
                      ? "bg-[#0A84FF] text-white border-[#0A84FF]"
                      : "text-gray-600 border-gray-200 hover:border-[#0A84FF]"
                  }`}
                >
                  {pack}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* QUANTITY + PRICE */}
        <div className="flex justify-between items-center gap-3">
          {/* QUANTITY */}
          <div className="flex items-center gap-3">
            <select
              value={qty}
              onChange={(e) => setQty(Number(e.target.value))}
              className="border rounded-lg px-3 py-2 text-sm outline-none focus:border-[#0A84FF]"
            >
              {Array.from({ length: selectedVariant?.stock || 1 }, (_, i) => (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>

          {/* PRICE */}
          <div>
            <p className="text-2xl font-bold text-gray-900">
              €{" "}
              {selectedVariant
                ? (selectedVariant.price * qty).toFixed(2)
                : "0.00"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
