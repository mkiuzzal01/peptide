"use client";
import { FieldValues } from "react-hook-form";
import AppForm from "./AppForm";
import TextInput from "./input-fields/TextInput";
import TextArea from "./input-fields/TextArea";
import { Checkbox } from "@/components/ui/checkbox";
import SubmitButton from "../buttons/SubmitButton";
import { usePlaceOrderMutation } from "@/redux/features/order/order.api";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { toast } from "react-toastify";
import { usePathname, useRouter } from "next/navigation";
import { clearCart } from "@/redux/features/cart/cart.slice";
import Link from "next/link";

export default function CheckOut() {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { products } = useAppSelector((state) => state.cart);
  const { coupon } = useAppSelector((state) => state.order);

  const [placeOrder, { isLoading }] = usePlaceOrderMutation();

  const handleSubmit = async (data: FieldValues, reset: () => void) => {
    try {
      const items = products.map((item) => ({
        variant_id: Number(item.selectedVariantId),
        quantity: Number(item.quantity),
      }));

      const payload = {
        ...data,
        coupon: coupon?.code || null,
        items,
      };

      const res = await placeOrder(payload).unwrap();

      toast.success(res?.message || "Order placed successfully");
      reset();
      dispatch(clearCart());
      router.replace(res?.data?.checkout_url);
    } catch (error: any) {
      toast.error(error?.data?.message || "Failed to place order");
      if (error?.data?.message === "Unauthenticated.") {
        router.replace(`/sign-in?redirect=${pathname}`);
      }
    }
  };

  return (
    <div className="bg-white rounded-2xl p-5">
      <div className="container p-5">
        <h2 className="text-3xl font-semibold mb-6">
          Shipping & Delivery Information
        </h2>

        <AppForm onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4">
            <TextInput
              name="customer_name"
              placeholder="Enter your name"
              label="Full name"
              required
            />

            <TextInput
              name="customer_email"
              type="email"
              placeholder="Enter your email"
              label="Email"
              required
            />

            <TextInput
              name="customer_phone"
              placeholder="Enter your phone number"
              label="Phone"
              required
            />

            <div className="col-span-full">
              <TextArea
                label="Address"
                required
                name="customer_address"
                placeholder="Enter your address"
              />
            </div>

            <div className="flex items-center gap-2 py-2">
              <Checkbox id="terms" required />

              <label htmlFor="terms" className="text-xs text-gray-700">
                I agree to Tech Takes{" "}
                <Link href="/terms" className="text-primary">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-primary">
                  Privacy Policy
                </Link>
              </label>
            </div>
          </div>

          <div className="flex justify-end mt-5">
            <SubmitButton
              text={isLoading ? "Placing Order..." : "Proceed to Checkout"}
              className="h-12 w-full lg:w-auto rounded-md"
            />
          </div>
        </AppForm>
      </div>
    </div>
  );
}
