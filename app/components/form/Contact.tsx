"use client";

import { useState } from "react";
import AppForm from "./AppForm";
import TextInput from "./input-fields/TextInput";
import { FieldValues } from "react-hook-form";

export default function Contact() {
  const [topic, setTopic] = useState("Wholesale");

  const onSubmit = (values: FieldValues) => {
    console.log({ ...values, topic });
  };

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-8 lg:p-10">
      <AppForm onSubmit={onSubmit}>
        <div className="space-y-5">
          {/* Full Name */}
          <TextInput type="text" name="name" label="Full name" />

          {/* Email + Topic Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <TextInput
              type="email"
              name="email"
              label="Email"
              placeholder="Enter your email address"
            />

            {/* Topic Selector */}
            <div className="flex gap-2 w-full">
              {["Wholesale", "General Inquiry"].map((item) => {
                const active = topic === item;

                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setTopic(item)}
                    className={`px-4 py-2 rounded-lg border text-sm transition
                        ${
                          active
                            ? "bg-blue-600 text-white border-blue-600"
                            : "bg-white text-gray-600 border-gray-200 hover:border-blue-500"
                        }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Message */}
          <TextInput
            type="textarea"
            name="message"
            label="Message"
            placeholder="Describe your message here..."
          />

          {/* Submit */}
          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-medium transition"
            >
              Send message
            </button>
          </div>
        </div>
      </AppForm>
    </div>
  );
}
