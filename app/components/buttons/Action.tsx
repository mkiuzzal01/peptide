"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React, { ButtonHTMLAttributes } from "react";

interface ActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export default function Action({
  name,
  icon,
  iconPosition = "left",
  className,
  ...props
}: ActionProps) {
  return (
    <Button
      {...props}
      className={cn("inline-flex items-center justify-center", className)}
    >
      {icon && iconPosition === "left" && icon}

      <span>{name}</span>

      {icon && iconPosition === "right" && icon}
    </Button>
  );
}
