import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartItem } from "@/redux/types";

interface OrderState {
  subTotal: number;
  vat: number;
  deliveryFee: number;
  discount: number;
  total: number;
  coupon: string;
}

const initialState: OrderState = {
  subTotal: 0,
  vat: 0,
  deliveryFee: 0,
  discount: 0,
  total: 0,
  coupon: "",
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setCoupon: (state, action: PayloadAction<string>) => {
      state.coupon = action.payload;
    },

    calculateSummary: (state, action: PayloadAction<ICartItem[]>) => {
      const products = action.payload;

      const subTotal = products.reduce((acc, item) => {
        const variant = item.variants.find(
          (v) =>
            v.size === item.selectedSize && v.quantity === item.selectedPack,
        );

        if (!variant) return acc;

        return acc + variant.price * item.quantity;
      }, 0);

      const vat = subTotal * 0.05;
      const deliveryFee = subTotal > 500 ? 0 : 25;

      let discount = 0;

      if (state.coupon.toLowerCase() === "save10") {
        discount = subTotal * 0.1;
      }

      const total = subTotal + vat + deliveryFee - discount;

      state.subTotal = subTotal;
      state.vat = vat;
      state.deliveryFee = deliveryFee;
      state.discount = discount;
      state.total = total;
    },
  },
});

export const { setCoupon, calculateSummary } = orderSlice.actions;
export default orderSlice.reducer;
