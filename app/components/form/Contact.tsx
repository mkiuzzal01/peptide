"use client";

import { useState } from "react";
import AppForm from "./AppForm";
import TextInput from "./input-fields/TextInput";
import TextArea from "./input-fields/TextArea";
import { FieldValues } from "react-hook-form";
import { useContactMutation } from "@/redux/features/contact/contact.api";
import SubmitButton from "../buttons/SubmitButton";
import { toast } from "react-toastify";

export default function Contact() {
  const [contact, { isLoading }] = useContactMutation();
  const [topic, setTopic] = useState("Wholesale");

  const onSubmit = async (values: FieldValues, reset: () => void) => {
    try {
      const res = await contact({ ...values, topic: topic }).unwrap();
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
    <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm border border-gray-100">
      <AppForm onSubmit={onSubmit}>
        <div className="space-y-6">
          {/* NAME */}
          <TextInput
            required
            type="text"
            name="name"
            label="Full Name"
            placeholder="Enter your full name"
          />

          {/* EMAIL + TOPIC */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {/* EMAIL */}
            <TextInput
              required
              type="email"
              name="email"
              label="Email Address"
              placeholder="Enter your email address"
            />

            {/* TOPIC */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-600">Topic</label>

              <div className="flex justify-between gap-2">
                {["Wholesale", "General Inquiry"].map((item) => {
                  const active = topic === item;

                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setTopic(item)}
                      className={`w-full px-4 py-2 rounded-lg text-sm border transition-all duration-200
                        ${
                          active
                            ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                            : "bg-white text-gray-600 border-gray-200 hover:border-blue-500 hover:text-blue-600"
                        }`}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* MESSAGE */}
          <TextArea
            required
            label="Message"
            name="description"
            placeholder="Write your message here..."
          />

          {/* SUBMIT */}
          <div className="flex justify-end pt-2">
            <SubmitButton
              text="Send Message"
              loading={isLoading}
              className="rounded-full h-10 w-40"
            />
          </div>
        </div>
      </AppForm>
    </div>
  );
}
