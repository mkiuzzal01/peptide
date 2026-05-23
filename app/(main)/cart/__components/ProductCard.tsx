"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useState } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { removeCartItem } from "@/redux/features/cart/cart.slice";

interface Props {
  id: string;
  name: string;
  price: string;
  image: string;
}

export default function CartProductCard({ id, name, price, image }: Props) {
  const dispatch = useAppDispatch();

  const [size, setSize] = useState("05 mg");
  const [pack, setPack] = useState("Single Vial");
  const [qty, setQty] = useState(3);

  return (
    <div className="relative flex items-center justify-between gap-4 bg-white border rounded-2xl p-4 shadow-sm">
      {/* REMOVE BUTTON */}
      <button
        onClick={() => dispatch(removeCartItem(id))}
        className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition"
      >
        <X size={16} />
      </button>

      {/* IMAGE */}
      <div className="w-20 h-20 flex items-center justify-center shrink-0 bg-gray-50 rounded-xl">
        <Image
          src={image}
          alt={name}
          width={70}
          height={70}
          className="object-contain"
        />
      </div>

      {/* CONTENT */}
      <div className="flex-1 space-y-2">
        {/* TITLE */}
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>

        {/* SIZE */}
        <div className="flex gap-2 flex-wrap">
          {["05 mg", "10 mg", "15 mg"].map((item) => (
            <button
              key={item}
              onClick={() => setSize(item)}
              className={`px-3 py-1 text-xs rounded-full border transition
              ${
                size === item
                  ? "bg-[#0A84FF] text-white border-[#0A84FF]"
                  : "text-gray-600 border-gray-200 hover:border-[#0A84FF]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* QTY */}
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span>Qty:</span>
          <select
            value={qty}
            onChange={(e) => setQty(Number(e.target.value))}
            className="border rounded px-2 py-1 text-xs"
          >
            {[1, 2, 3, 4, 5].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* PRICE */}
      <div className="min-w-[90px] text-right">
        {/* PACK */}
        <div className="flex gap-2 flex-wrap">
          {["Single Vial", "Pack of 10"].map((item) => (
            <button
              key={item}
              onClick={() => setPack(item)}
              className={`px-3 py-1 text-xs rounded-full border transition
              ${
                pack === item
                  ? "bg-[#0A84FF] text-white border-[#0A84FF]"
                  : "text-gray-600 border-gray-200 hover:border-[#0A84FF]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        <p className="text-lg font-semibold text-gray-900">{price}</p>
      </div>
    </div>
  );
}
