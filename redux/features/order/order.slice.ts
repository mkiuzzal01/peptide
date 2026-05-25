// order.slice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ICartItem } from "@/redux/types";

interface CouponState {
  code: string;
  type: string;
  value: number;
  discount: number;
  valid: boolean;
}

interface OrderState {
  subTotal: number;
  vat: number;
  deliveryFee: number;
  discount: number;
  total: number;

  coupon: CouponState | null;
}

const initialState: OrderState = {
  subTotal: 0,
  vat: 0,
  deliveryFee: 0,
  discount: 0,
  total: 0,

  coupon: null,
};

const orderSlice = createSlice({
  name: "order",
  initialState,

  reducers: {
    applyCoupon: (state, action: PayloadAction<CouponState>) => {
      state.coupon = action.payload;
    },

    removeCoupon: (state) => {
      state.coupon = null;
    },

    calculateSummary: (state, action: PayloadAction<ICartItem[]>) => {
      const products = action.payload;

      // SUBTOTAL
      const subTotal = products.reduce((acc, item) => {
        const variant = item.variants.find(
          (variant) =>
            variant.size === item.selectedSize &&
            variant.quantity === item.selectedPack,
        );

        if (!variant) return acc;

        return acc + variant.price * item.quantity;
      }, 0);

      // VAT
      const vat = subTotal * 0.05;

      // DELIVERY
      const deliveryFee = subTotal > 500 ? 0 : 25;

      // DISCOUNT
      let discount = 0;

      if (state.coupon?.valid) {
        discount = state.coupon.discount;
      }

      // TOTAL
      const total = subTotal + vat + deliveryFee - discount;

      state.subTotal = subTotal;
      state.vat = vat;
      state.deliveryFee = deliveryFee;
      state.discount = discount;
      state.total = total;
    },
  },
});

export const { applyCoupon, removeCoupon, calculateSummary } =
  orderSlice.actions;

export default orderSlice.reducer;
