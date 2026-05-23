"use client";
import { FieldValues } from "react-hook-form";
import Container from "../shared/Container";
import AppForm from "./AppForm";
import TextInput from "./input-fields/TextInput";
import { Textarea } from "@/components/ui/textarea";
import SubmitButton from "../buttons/SubmitButton";

export default function CheckOut() {
  const handleSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div className="bg-white rounded-2xl mb-10">
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
          <div className="max-w-xs m-auto  mt-6">
            <SubmitButton text="Submit" className="rounded-full h-12" />
          </div>
        </AppForm>
      </div>
    </div>
  );
}
