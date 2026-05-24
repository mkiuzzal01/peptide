"use client";

import { Controller, useFormContext } from "react-hook-form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { cn } from "@/lib/utils";

interface OtpInputProps {
  name: string;
  length?: number;
  className?: string;
  label?: string;
  required?: boolean;
}

export default function OtpInput({
  name,
  length = 6,
  className,
  label,
  required = false,
}: OtpInputProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const fieldError = errors?.[name];

  const errorMessage =
    (fieldError?.message as string) ||
    (fieldError?.type === "required" ? `${label || "OTP"} is required` : "");

  return (
    <div className={cn("space-y-2 w-full", className)}>
      {/* LABEL */}
      {label && (
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
            {label}
            {required && <span className="text-red-500">*</span>}
          </label>
        </div>
      )}

      {/* OTP CONTROL */}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <div className="space-y-2">
            <InputOTP
              required={required}
              maxLength={length}
              value={field.value || ""}
              onChange={field.onChange}
            >
              <InputOTPGroup className="flex items-center justify-center gap-2 sm:gap-3">
                {Array.from({ length }).map((_, index) => (
                  <InputOTPSlot
                    key={index}
                    index={index}
                    className="
                      h-12 w-12 sm:h-14 sm:w-14
                      rounded-xl border border-gray-200
                      bg-white text-center text-base font-semibold

                      transition-all duration-200

                      focus-within:border-primary
                      focus-within:ring-2
                      focus-within:ring-primary/20

                      hover:border-primary/50
                    "
                  />
                ))}
              </InputOTPGroup>
            </InputOTP>

            {/* ERROR */}
            {errorMessage && (
              <p className="text-center text-xs text-red-500">{errorMessage}</p>
            )}
          </div>
        )}
      />
    </div>
  );
}
