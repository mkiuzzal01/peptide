"use client";

import React, { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface TextInputProps {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  icon?: React.ReactNode;
  className?: string;
  required?: boolean;
}

export default function TextInput({
  label,
  name,
  placeholder,
  type = "text",
  icon,
  className,
  required = false,
}: TextInputProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  const errorMessage = (errors?.[name]?.message as string | undefined) || "";

  return (
    <div className={cn("space-y-1.5 w-full mb-6", className)}>
      {/* LABEL */}
      <div className="flex items-center justify-between">
        <Label htmlFor={name} className="text-sm font-medium text-gray-600">
          {label}
          {required && <span className="ml-1 text-red-500">*</span>}
        </Label>
      </div>

      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            {/* INPUT WRAPPER */}
            <div className="relative group">
              {/* LEFT ICON */}
              {icon && (
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors">
                  <span className="flex h-4 w-4 items-center justify-center">
                    {icon}
                  </span>
                </div>
              )}

              {/* INPUT */}
              <Input
                id={name}
                {...field}
                type={isPassword ? (showPassword ? "text" : "password") : type}
                placeholder={placeholder}
                required={required}
                aria-invalid={!!errorMessage}
                className={cn(
                  "h-11 w-full transition",
                  "focus-visible:ring-2 focus-visible:ring-primary/30",
                  "focus-visible:border-primary",
                  icon && "pl-9",
                  isPassword && "pr-10",
                )}
              />

              {/* PASSWORD TOGGLE */}
              {isPassword && (
                <button
                  type="button"
                  onClick={() => setShowPassword((p) => !p)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-primary"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              )}
            </div>

            {/* ERROR MESSAGE */}
            {errorMessage && (
              <p className="mt-1 text-xs text-red-500">{errorMessage}</p>
            )}
          </>
        )}
      />
    </div>
  );
}
