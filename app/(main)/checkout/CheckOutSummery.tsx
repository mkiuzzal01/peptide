"use client";

import { useAppSelector } from "@/redux/hooks";

export default function CheckOutSummery() {
  const { products } = useAppSelector((state) => state.cart);
  const { subTotal, vat, deliveryFee, discount, total } = useAppSelector(
    (state) => state.order,
  );

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
    </div>
  );
}
