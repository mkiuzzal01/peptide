"use client";
import { FieldValues } from "react-hook-form";
import Container from "../shared/Container";
import AppForm from "./AppForm";
import TextInput from "./input-fields/TextInput";
import { Textarea } from "@/components/ui/textarea";
import SubmitButton from "../buttons/SubmitButton";
import { Checkbox } from "@/components/ui/checkbox";

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
          <div className="grid grid-cols-1">
            <TextInput
              name="name"
              placeholder="Enter your name"
              label="Full name"
            />

            <TextInput
              name="email"
              type="email"
              placeholder="Enter your email"
              label="Email"
            />
            <TextInput
              name="phone"
              placeholder="Enter your phone number"
              label="Phone"
            />

            <div className="col-span-full">
              <Textarea
                className="h-32 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                name="address"
                placeholder="Enter your address"
              />
            </div>
          </div>
        </AppForm>
        <div className="flex items-center gap-2 py-2">
          <Checkbox />
          <label className="text-xs text-gray-700" htmlFor="terms">
            I agree to Tech Takes Terms of Service and Privacy Policy.
          </label>
        </div>
      </div>
    </div>
  );
}
