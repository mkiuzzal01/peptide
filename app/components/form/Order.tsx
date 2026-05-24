"use client";
import { FieldValues } from "react-hook-form";
import Container from "../shared/Container";
import AppForm from "./AppForm";
import TextInput from "./input-fields/TextInput";
import { Textarea } from "@/components/ui/textarea";
import SubmitButton from "../buttons/SubmitButton";
import { useWholeSaleOrderMutation } from "@/redux/features/wholesale/wholesale.api";
import { toast } from "react-toastify";

export default function Order() {
  const [submitOrder, { isLoading }] = useWholeSaleOrderMutation();

  const onSubmit = async (values: FieldValues, reset: () => void) => {
    try {
      const res = await submitOrder(values).unwrap();
      if (res.message) {
        toast.success(res.message);
        reset();
      }
    } catch (error: any) {
      if (error.data.message) {
        toast.error(error.data.message);
      }
    }
  };

  return (
    <Container>
      <div className="bg-white p-10 rounded-2xl mb-10">
        <h2 className="text-3xl font-semibold mb-6">Place Your Order</h2>

        <AppForm onSubmit={onSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TextInput
              required
              name="full_name"
              placeholder="Enter your name"
              label="Full name"
            />

            <TextInput
              required
              name="company_name"
              type="text"
              placeholder="Enter your company name"
              label="Company Name/Laboratory Name"
            />

            <TextInput
              required
              name="email"
              type="email"
              placeholder="Enter your email"
              label="Email"
            />
            <TextInput
              required
              name="phone"
              placeholder="Enter your phone number"
              label="Phone"
            />

            <TextInput
              required
              name="products_interested"
              placeholder="Research Piptied"
              label="Interested in"
            />
            <TextInput
              required
              name="estimated_quantity"
              placeholder="Enter Your Quantity"
              label="Estimate Quantity"
            />

            <div className="col-span-full">
              <Textarea
                required
                className="h-32 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                name="message"
                placeholder="Write your message"
              />
            </div>
          </div>
          <div className="max-w-xs m-auto  mt-6">
            <SubmitButton
              text="Send Request"
              loading={isLoading}
              className="rounded-full h-12"
            />
          </div>
        </AppForm>
      </div>
    </Container>
  );
}
