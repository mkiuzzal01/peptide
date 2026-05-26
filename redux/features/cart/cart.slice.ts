import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartItem } from "@/redux/types";

interface CartState {
  products: ICartItem[];
}

const loadCart = (): ICartItem[] => {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem("cart") || "[]");
  } catch {
    return [];
  }
};

const saveCart = (data: ICartItem[]) => {
  if (typeof window === "undefined") return;
  localStorage.setItem("cart", JSON.stringify(data));
};

const initialState: CartState = {
  products: loadCart(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICartItem>) => {
      const existing = state.products.find(
        (p) =>
          p.id === action.payload.id &&
          p.selectedSize === action.payload.selectedSize &&
          p.selectedPack === action.payload.selectedPack &&
          p.selectedVariantId === action.payload.selectedVariantId,
      );

      if (existing) {
        existing.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }

      saveCart(state.products);
    },

    updateCartItem: (
      state,
      action: PayloadAction<{
        id: number;
        oldVariantId: number;
        selectedSize: string;
        selectedPack: string;
        quantity: number;
        selectedVariantId: number;
      }>,
    ) => {
      const item = state.products.find(
        (p) =>
          p.id === action.payload.id &&
          p.selectedVariantId === action.payload.oldVariantId,
      );

      if (item) {
        item.selectedSize = action.payload.selectedSize;
        item.selectedPack = action.payload.selectedPack;
        item.quantity = action.payload.quantity;
        item.selectedVariantId = action.payload.selectedVariantId;
      }

      saveCart(state.products);
    },

    removeCartItem: (
      state,
      action: PayloadAction<{
        id: number;
        variantId: number;
      }>,
    ) => {
      state.products = state.products.filter(
        (p) =>
          !(
            p.id === action.payload.id &&
            p.selectedVariantId === action.payload.variantId
          ),
      );

      saveCart(state.products);
    },

    clearCart: (state) => {
      state.products = [];
      saveCart(state.products);
    },
  },
});

export const { addToCart, removeCartItem, updateCartItem, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
