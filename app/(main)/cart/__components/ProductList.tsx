"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export default function ProductList() {
  const dispatch = useAppDispatch();

  const { products } = useAppSelector((state) => state.addToCart);

  return <div>{products.length}</div>;
}
