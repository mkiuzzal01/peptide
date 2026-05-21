"use client";

import { Controller, useFormContext } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface TextAreaProps {
  label: string;
  name: string;
  placeholder?: string;
  className?: string;
  rows?: number;
  disabled?: boolean;
}

export default function TextArea({
  label,
  name,
  placeholder,
  className,
  rows = 4,
  disabled = false,
}: TextAreaProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = (errors?.[name]?.message as string | undefined) || "";

  return (
    <div className={cn("space-y-1.5 w-full mb-6", className)}>
      {/* LABEL */}
      <Label htmlFor={name} className="text-sm font-medium text-gray-600">
        {label}
      </Label>

      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            <Textarea
              id={name}
              {...field}
              rows={rows}
              placeholder={placeholder}
              disabled={disabled}
              className={cn(
                "w-full transition resize-none",
                "focus-visible:ring-2 focus-visible:ring-primary/30",
                "focus-visible:border-primary",
                errorMessage && "border-red-500",
              )}
            />

            {errorMessage && (
              <p className="text-xs text-red-500 mt-1">{errorMessage}</p>
            )}
          </>
        )}
      />
    </div>
  );
}
