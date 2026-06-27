"use client";
import { FieldValues } from "react-hook-form";
import Container from "../shared/Container";
import AppForm from "./AppForm";
import TextInput from "./input-fields/TextInput";
import { Lock, Mail, User } from "lucide-react";
import Image from "next/image";
import SocialLogin from "../utils/SocialLogin";
import SubmitButton from "../buttons/SubmitButton";
import logo from "@/public/auth/sign-in.jpg";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { useRegisterMutation } from "@/redux/features/auth/auth.api";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignUp() {
  const router = useRouter();
  const [register, { isLoading }] = useRegisterMutation();
  const [terms, setTerms] = useState(false);
  const [age, setAge] = useState(false);

  const onSubmit = async (values: FieldValues, reset: () => void) => {
    try {
      const res = await register({
        ...values,
        is_terms_privacy_accepted: terms,
        is_age_verified: age,
      }).unwrap();

      if (res?.message) {
        toast.info(res?.message);
        reset();
        router.push(`/verify?email=${res?.data?.email}`);
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  return (
    <Container>
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-5xl bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg">
          {/* ================= LEFT IMAGE ================= */}
          <div className="hidden md:flex items-center justify-center">
            <Image
              src={logo}
              alt="signin"
              className="w-full h-full object-cover"
            />
          </div>

          {/* ================= RIGHT FORM ================= */}
          <div className="p-6 md:p-10 flex flex-col justify-center">
            {/* HEADER */}
            <div className="flex justify-center items-center flex-col gap-1 mb-8">
              <h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl mb-2">
                Crate your account
              </h2>
              <p className="text-xs md:text-sm text-muted-foreground">
                Create your account for secure, seamless ordering
              </p>
            </div>

            {/* SOCIAL LOGIN */}
            <div className="space-y-4">
              <SocialLogin />

              {/* DIVIDER */}
              <div className="flex items-center gap-3">
                <div className="h-px bg-gray-200 flex-1" />
                <span className="text-xs text-gray-400 uppercase">or</span>
                <div className="h-px bg-gray-200 flex-1" />
              </div>
            </div>

            {/* FORM */}
            <AppForm
              onSubmit={onSubmit}
              defaultValues={{
                name: "",
                email: "",
                password: "",
              }}
            >
              <div className="space-y-5">
                <TextInput
                  icon={<User size={18} />}
                  label="Full Name"
                  name="name"
                  className="h-12"
                  placeholder="Enter full name"
                />

                <TextInput
                  icon={<Mail size={18} />}
                  label="Email"
                  name="email"
                  className="h-12"
                  placeholder="Enter email"
                />

                <TextInput
                  icon={<Lock size={18} />}
                  label="Password"
                  name="password"
                  type="password"
                  className="h-12"
                  placeholder="Enter password"
                />

                <TextInput
                  icon={<Lock size={18} />}
                  label="Confirm Password"
                  name="password_confirmation"
                  type="password"
                  className="h-12"
                  placeholder="Enter confirm password"
                />

                <div className="py-2 space-y-1">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      checked={terms}
                      onCheckedChange={(value) => setTerms(value as boolean)}
                    />
                    <label className="text-xs text-gray-700" htmlFor="terms">
                      I agree to Tech Takes{" "}
                      <Link
                        href="/terms"
                        className="text-primary font-semibold"
                      >
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/privacy"
                        className="text-primary font-semibold"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      checked={age}
                      onCheckedChange={(value) => setAge(value as boolean)}
                    />
                    <label className="text-xs text-gray-700" htmlFor="terms">
                      I confirm that I am 18 years of age or older.
                    </label>
                  </div>
                </div>

                {/* SUBMIT */}
                <SubmitButton
                  disabled={!terms || !age}
                  text="Sign Up"
                  className="h-12 rounded-full"
                  loading={isLoading}
                />
                <div>
                  <p className="text-xs text-gray-700 text-center">
                    Already have an account?{" "}
                    <Link
                      href="/sign-in"
                      className="text-primary font-semibold"
                    >
                      Sign In
                    </Link>
                  </p>
                </div>
              </div>
            </AppForm>
          </div>
        </div>
      </div>
    </Container>
  );
}
