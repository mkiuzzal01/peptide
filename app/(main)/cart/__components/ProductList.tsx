"use client";

import { useAppSelector } from "@/redux/hooks";
import ProductCard from "./ProductCard";
import OrderSummery from "./OrderSummery";

export default function ProductList() {
  const { products } = useAppSelector((state) => state.cart);

  const totalPrice = products.reduce((acc, curr) => {
    const price = Number(curr.price) || 0;
    return acc + price;
  }, 0);

  return (
    <div className="flex flex-col md:flex-row justify-between gap-6 pb-10">
      {/* LEFT: CART ITEMS */}
      <div className="flex-1 space-y-5">
        {products.length > 0 ? (
          products.map((product: any) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))
        ) : (
          <p className="text-gray-500">Your cart is empty</p>
        )}
      </div>

      {/* RIGHT: SUMMARY */}
      <OrderSummery />
    </div>
  );
}
