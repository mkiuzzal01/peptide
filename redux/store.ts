import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import addToCartReducer from "./features/cart/addToCart.slice";
import { baseApi } from "./base/baseAPI";
import { userSlice } from "./features/user/user.slice";

const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  user: userSlice.reducer,
  addToCart: addToCartReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(baseApi.middleware),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
