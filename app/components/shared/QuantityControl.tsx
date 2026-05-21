"use client";

import { Minus, Plus } from "lucide-react";

interface QuantityControlProps {
  quantity: number;
  onDecrease: () => void;
  onIncrease: () => void;
}

export default function QuantityControl({
  quantity,
  onDecrease,
  onIncrease,
}: QuantityControlProps) {
  return (
    <div className="flex items-center gap-3 bg-[#f5f5f5] rounded-full px-3 py-2 w-fit">
      <button
        onClick={onDecrease}
        className="w-7 h-7 rounded-full bg-[#e9e9e9] flex items-center justify-center"
      >
        <Minus size={16} />
      </button>

      <span className="text-sm font-medium min-w-[20px] text-center">
        {quantity}
      </span>

      <button
        onClick={onIncrease}
        className="w-7 h-7 rounded-full bg-white shadow flex items-center justify-center"
      >
        <Plus size={16} />
      </button>
    </div>
  );
}
