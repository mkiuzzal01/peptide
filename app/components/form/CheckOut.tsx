"use client";

import { FieldValues } from "react-hook-form";
import AppForm from "./AppForm";
import TextInput from "./input-fields/TextInput";
import { Checkbox } from "@/components/ui/checkbox";
import SubmitButton from "../buttons/SubmitButton";
import TextArea from "./input-fields/TextArea";

export default function CheckOut() {
  const handleSubmit = (data: FieldValues) => {
    console.log(data);
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

            {/* ADDRESS */}
            <div className="col-span-full">
              <TextArea
                label="Address"
                required
                name="customer_address"
                placeholder="Enter your address"
              />
            </div>

            {/* TERMS */}
            <div className="flex items-center gap-2 py-2">
              <Checkbox id="terms" required />

              <label htmlFor="terms" className="text-xs text-gray-700">
                I agree to Tech Takes Terms of Service and Privacy Policy.
              </label>
            </div>
          </div>

          <div className="flex justify-end mt-5">
            <SubmitButton
              text="Proceed to Checkout"
              className="h-12 w-full lg:w-auto rounded-md"
            />
          </div>
        </AppForm>
      </div>
    </div>
  );
}
