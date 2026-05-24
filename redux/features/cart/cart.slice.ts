import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICartProduct {
  id: string;
  name: string;
  price: string;
  quantity: number;
  image: string | any;
  weight?: string;
  packSize?: string;
}

interface IInitialState {
  products: ICartProduct[];
}

const loadCartFromLocalStorage = (): ICartProduct[] => {
  if (typeof window === "undefined") return [];

  try {
    const cartData = localStorage.getItem("cart");

    return cartData ? JSON.parse(cartData) : [];
  } catch (error) {
    console.error("Failed to load cart:", error);
    return [];
  }
};

const saveCartToLocalStorage = (products: ICartProduct[]) => {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem("cart", JSON.stringify(products));
  } catch (error) {
    console.error("Failed to save cart:", error);
  }
};

const initialState: IInitialState = {
  products: loadCartFromLocalStorage(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICartProduct>) => {
      state.products.push(action.payload);

      saveCartToLocalStorage(state.products);
    },

    removeCartItem: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload,
      );

      saveCartToLocalStorage(state.products);
    },
  },
});

export const { addToCart, removeCartItem } = cartSlice.actions;

export default cartSlice.reducer;
