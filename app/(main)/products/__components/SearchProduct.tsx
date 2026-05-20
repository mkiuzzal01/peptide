"use client";

import { Search, SlidersHorizontal } from "lucide-react";

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SearchProduct() {
  return (
    <div className="w-full max-w-md rounded-3xl border border-border bg-background p-6 shadow-sm">
      {/* Search */}
      <div className="space-y-2">
        <Label htmlFor="search">Search Products</Label>

        <div className="relative">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

          <Input
            id="search"
            type="text"
            placeholder="Search products..."
            className="h-12 rounded-full pl-12 pr-4"
          />
        </div>
      </div>

      {/* Price Range */}
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <Label>Price Range</Label>

          <span className="text-sm text-muted-foreground">$20 - $500</span>
        </div>

        <Input type="range" min="20" max="500" className="cursor-pointer" />

        <div className="flex items-center gap-3">
          <Input type="number" placeholder="Min" className="h-11 rounded-xl" />

          <Input type="number" placeholder="Max" className="h-11 rounded-xl" />
        </div>
      </div>

      {/* Sorting */}
      <div className="mt-6 space-y-4">
        <Label>Sort By</Label>

        <div className="space-y-3">
          <div className="flex items-center space-x-3 rounded-xl border border-border p-3 transition-colors hover:bg-muted/50">
            <Checkbox id="low-price" />

            <Label
              htmlFor="low-price"
              className="cursor-pointer text-sm font-normal"
            >
              Price: Low to High
            </Label>
          </div>

          <div className="flex items-center space-x-3 rounded-xl border border-border p-3 transition-colors hover:bg-muted/50">
            <Checkbox id="high-price" />

            <Label
              htmlFor="high-price"
              className="cursor-pointer text-sm font-normal"
            >
              Price: High to Low
            </Label>
          </div>
        </div>
      </div>
    </div>
  );
}
