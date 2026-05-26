"use client";
import { useAppSelector } from "@/redux/hooks";
import OrderSummery from "./OrderSummery";
import NotFoundMessage from "@/app/components/utils/NotFoundMessage";
import CartProductCard from "./CartProductCard";

export default function ProductList() {
  const { products } = useAppSelector((state) => state.cart);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-4">
      <div className="col-span-2 space-y-4 pb-4">
        {products?.length > 0 ? (
          products?.map((product: any, idx: number) => (
            <CartProductCard key={`${product?.id}-${idx}`} item={product} />
          ))
        ) : (
          <NotFoundMessage
            buttonLink="/products"
            buttonText="Shop Now"
            title="No product added yet"
            message="Please add products to your cart"
          />
        )}
      </div>
      <div className="sticky top-20 h-fit">
        <OrderSummery />
      </div>
    </div>
  );
}
