"use client";
import { FieldValues } from "react-hook-form";
import Container from "../shared/Container";
import AppForm from "./AppForm";
import TextInput from "./input-fields/TextInput";
import { Textarea } from "@/components/ui/textarea";
import SubmitButton from "../buttons/SubmitButton";

export default function Order() {
  const handleSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <Container>
      <div className="bg-white p-10 rounded-2xl mb-10">
        <h2 className="text-3xl font-semibold mb-6">Place Your Order</h2>

        <AppForm onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TextInput
              name="name"
              placeholder="Enter your name"
              label="Full name"
            />

            <TextInput
              name="companyName"
              type="text"
              placeholder="Enter your company name"
              label="Company Name/Laboratory Name"
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

            <TextInput
              name="interested"
              placeholder="Research Piptied"
              label="Interested in"
            />
            <TextInput
              name="quentity"
              placeholder="Enter Your Quantity"
              label="Estimate Quantity"
            />

            <div className="col-span-full">
              <Textarea
                className="h-32 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                name="message"
                placeholder="Write your message"
              />
            </div>
          </div>
          <div className="max-w-xs m-auto  mt-6">
            <SubmitButton text="Send Request" className="rounded-full h-12" />
          </div>
        </AppForm>
      </div>
    </Container>
  );
}
