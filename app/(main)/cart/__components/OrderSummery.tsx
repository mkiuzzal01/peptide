"use client";

import { useState, useMemo } from "react";
import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";

export default function OrderSummery() {
  const [coupon, setCoupon] = useState("");

  const { products } = useAppSelector((state) => state.cart);

  // 🔥 Subtotal (price * quantity)
  const subTotal = useMemo(() => {
    return products.reduce((acc, item) => {
      const price = Number(item.price) || 0;
      return acc + price * item.quantity;
    }, 0);
  }, [products]);

  // 💰 VAT (example: 5%)
  const vat = useMemo(() => subTotal * 0.05, [subTotal]);

  // 🚚 Delivery logic
  const deliveryFee = useMemo(() => {
    return subTotal > 500 ? 0 : 25.8;
  }, [subTotal]);

  // 🎟️ Coupon (basic example)
  const discount = useMemo(() => {
    if (coupon.toLowerCase() === "save10") {
      return subTotal * 0.1;
    }
    return 0;
  }, [coupon, subTotal]);

  const total = subTotal + vat + deliveryFee - discount;

  return (
    <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-md">
      <h2 className="mb-6 text-xl font-semibold text-gray-800">
        Order Summary
      </h2>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between text-gray-600">
          <span>Sub Total</span>
          <span>€ {subTotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between text-gray-600">
          <span>VAT (5%)</span>
          <span>€ {vat.toFixed(2)}</span>
        </div>

        <div className="flex justify-between text-gray-600">
          <span>Delivery Fee</span>
          <span>€ {deliveryFee.toFixed(2)}</span>
        </div>

        <div className="flex justify-between text-red-500">
          <span>Coupon Discount</span>
          <span>-€ {discount.toFixed(2)}</span>
        </div>

        <div className="border-t pt-3 flex justify-between text-base font-semibold text-gray-800">
          <span>Total</span>
          <span>€ {total.toFixed(2)}</span>
        </div>
      </div>

      {/* Coupon */}
      <div className="mt-6 flex gap-2">
        <input
          type="text"
          placeholder="Promo coupon (try SAVE10)"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          className="w-full rounded-xl border px-4 py-2 text-sm outline-none focus:border-blue-500"
        />
        <button className="rounded-xl border border-blue-600 px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50">
          Redeem
        </button>
      </div>

      <Link href={"/checkout"}>
        <button className="mt-5 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700 transition">
          Proceed to Checkout
        </button>
      </Link>
    </div>
  );
}
