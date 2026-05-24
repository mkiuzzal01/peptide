"use client";

import { FieldValues } from "react-hook-form";
import Container from "../shared/Container";
import AppForm from "./AppForm";
import TextInput from "./input-fields/TextInput";
import { ArrowLeft, Mail } from "lucide-react";
import SubmitButton from "../buttons/SubmitButton";
import { useRouter } from "next/navigation";
import { useForgotPasswordMutation } from "@/redux/features/auth/auth.api";
import { toast } from "react-toastify";

export default function Forgot() {
  const router = useRouter();
  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();

  const onSubmit = async (values: FieldValues, reset: () => void) => {
    try {
      const res = await forgotPassword(values).unwrap();

      if (res?.message) {
        toast.info(res?.message);
        reset();
        router.push(`/verify?email=${values?.email}&from=forgot`);
      }
    } catch (error: any) {
      toast.error(error?.data?.message);
    }
  };

  return (
    <Container>
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="grid grid-cols-1 w-full max-w-lg bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg">
          <div className="pt-4 px-4">
            <button
              className="flex items-center gap-2 text-xs cursor-pointer  font-semibold text-gray-700"
              onClick={() => {
                router.push("/sign-in");
              }}
            >
              <ArrowLeft size={18} />
              Back
            </button>
          </div>
          {/* ================= RIGHT FORM ================= */}
          <div className="p-6 md:p-10 flex flex-col justify-center">
            {/* HEADER */}
            <div className="flex justify-center items-center flex-col gap-1 mb-8">
              <h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl mb-2">
                Forgot Password
              </h2>
              <p className="text-xs md:text-sm text-muted-foreground">
                Please enter the email address associated with your account, and
                we&apos;ll email you a link to reset your password.
              </p>
            </div>

            {/* FORM */}
            <AppForm
              onSubmit={onSubmit}
              defaultValues={{
                email: "",
              }}
            >
              <div className="space-y-5">
                <TextInput
                  icon={<Mail size={18} />}
                  label="Email"
                  name="email"
                  className="h-12"
                  placeholder="Enter email"
                />

                {/* SUBMIT */}
                <div className="pt-2">
                  <SubmitButton
                    loading={isLoading}
                    text="Reset Password"
                    className="h-12 w-full rounded-full"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <button
                    className="text-xs font-semibold text-gray-700 cursor-pointer"
                    onClick={() => {
                      router.push("/sign-in");
                    }}
                  >
                    Back
                  </button>
                </div>
              </div>
            </AppForm>
          </div>
        </div>
      </div>
    </Container>
  );
}
