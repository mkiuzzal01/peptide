"use client";
import { useAppSelector } from "@/redux/hooks";
import OrderSummery from "./OrderSummery";
import NotFoundMessage from "@/app/components/utils/NotFoundMessage";
import CartProductCard from "./CartProductCard";

export default function ProductList() {
  const { products } = useAppSelector((state) => state.cart);

  return (
    <div className="flex flex-col md:flex-row justify-between gap-6 pb-10">
      <div className="flex-1 space-y-5">
        {products?.length > 0 ? (
          products?.map((product: any, idx: number) => (
            <CartProductCard key={`${product?.id}-${idx}`} item={product} />
          ))
        ) : (
          <NotFoundMessage
            title="No product added yet"
            message="Please add products to your cart"
          />
        )}
      </div>
      <OrderSummery />
    </div>
  );
}
