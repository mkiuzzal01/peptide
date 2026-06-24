"use client";

import { useEffect, useState, useTransition, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Define your defaults here for easier maintenance
const DEFAULT_MIN = 0;
const DEFAULT_MAX = 500;

export default function SearchProduct() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [, startTransition] = useTransition();

  const lockRef = useRef(false);

  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [minPrice, setMinPrice] = useState(
    Number(searchParams.get("min_price")) || DEFAULT_MIN,
  );
  const [maxPrice, setMaxPrice] = useState(
    Number(searchParams.get("max_price")) || DEFAULT_MAX,
  );
  const [sort, setSort] = useState(searchParams.get("sort_by") || "");

  const buildParams = () => {
    const params = new URLSearchParams(searchParams.toString());

    if (search) params.set("search", search);
    else params.delete("search");

    let min = minPrice;
    let max = maxPrice;
    if (min > max) [min, max] = [max, min];

    // Only include price query params if they differ from default values
    if (min === DEFAULT_MIN && max === DEFAULT_MAX) {
      params.delete("min_price");
      params.delete("max_price");
    } else {
      params.set("min_price", String(min));
      params.set("max_price", String(max));
    }

    if (sort) params.set("sort_by", sort);
    else params.delete("sort_by");

    return params;
  };

  // SINGLE CONTROLLED EFFECT (NO LOOP)
  useEffect(() => {
    if (lockRef.current) return;

    const timer = setTimeout(() => {
      lockRef.current = true;

      const params = buildParams();

      startTransition(() => {
        router.replace(`?${params.toString()}`, { scroll: false });
      });

      // unlock after navigation settles
      setTimeout(() => {
        lockRef.current = false;
      }, 300);
    }, 500);

    return () => clearTimeout(timer);
  }, [search, minPrice, maxPrice, sort]);

  const handleSort = (value: string) => {
    setSort((prev) => (prev === value ? "" : value));
  };

  return (
    <div className="w-full bg-white max-w-md rounded-3xl border border-border p-6 shadow-sm">
      {/* SEARCH */}
      <div className="space-y-2">
        <Label>Search Products</Label>

        <div className="relative">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

          <Input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="h-12 rounded-full pl-12 pr-4"
          />
        </div>
      </div>

      {/* PRICE */}
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <Label>Price Range</Label>

          <span className="text-sm text-muted-foreground">
            ${minPrice} - ${maxPrice}
          </span>
        </div>

        <Input
          type="range"
          min={DEFAULT_MIN}
          max={DEFAULT_MAX}
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        />

        <div className="flex gap-3">
          <Input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
          />

          <Input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>
      </div>

      {/* SORT */}
      <div className="mt-6 space-y-4">
        <Label>Sort By</Label>

        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 border rounded-xl hover:bg-muted/50">
            <Checkbox
              checked={sort === "low_to_high"}
              onCheckedChange={() => handleSort("low_to_high")}
            />
            <Label>Price: Low to High</Label>
          </div>

          <div className="flex items-center gap-3 p-3 border rounded-xl hover:bg-muted/50">
            <Checkbox
              checked={sort === "high_to_low"}
              onCheckedChange={() => handleSort("high_to_low")}
            />
            <Label>Price: High to Low</Label>
          </div>
        </div>
      </div>
    </div>
  );
}
