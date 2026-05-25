"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  calculateSummary,
  setCoupon,
} from "@/redux/features/order/order.slice";

export default function OrderSummery() {
  const dispatch = useAppDispatch();
  const [couponInput, setCouponInput] = useState("");

  const { products } = useAppSelector((state) => state.cart);
  const { subTotal, vat, deliveryFee, discount, total } = useAppSelector(
    (state) => state.order,
  );

  useEffect(() => {
    dispatch(calculateSummary(products));
  }, [products, couponInput]);

  const handleApplyCoupon = () => {
    dispatch(setCoupon(couponInput));
  };

  return (
    <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-md border border-gray-100">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Order Summary</h2>

        <span className="text-sm text-gray-500">{products.length} Items</span>
      </div>

      {/* SUMMARY */}
      <div className="space-y-4 text-sm">
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

          <span>
            {deliveryFee === 0 ? "Free" : `€ ${deliveryFee.toFixed(2)}`}
          </span>
        </div>

        <div className="flex justify-between text-red-500">
          <span>Coupon Discount</span>

          <span>-€ {discount.toFixed(2)}</span>
        </div>

        <div className="border-t pt-4 flex justify-between text-lg font-semibold text-gray-900">
          <span>Total</span>

          <span>€ {total.toFixed(2)}</span>
        </div>
      </div>

      {/* COUPON */}
      <div className="mt-6 flex gap-2">
        <input
          type="text"
          placeholder="Promo coupon (SAVE10)"
          value={couponInput}
          onChange={(e) => setCouponInput(e.target.value)}
          className="
            w-full
            rounded-xl
            border
            border-gray-200
            px-4
            py-3
            text-sm
            outline-none
            focus:border-blue-500
          "
        />

        <button
          onClick={handleApplyCoupon}
          className="
            rounded-xl
            border
            border-blue-600
            px-4
            py-3
            text-sm
            font-medium
            text-blue-600
            hover:bg-blue-50
            transition
          "
        >
          Apply
        </button>
      </div>

      {/* CHECKOUT */}
      <Link href="/checkout">
        <button
          className="
            mt-5
            w-full
            rounded-xl
            bg-blue-600
            py-3
            font-semibold
            text-white
            hover:bg-blue-700
            transition
          "
        >
          Proceed to Checkout
        </button>
      </Link>
    </div>
  );
}
