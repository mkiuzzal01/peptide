"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";
import { Button } from "@/components/ui/button";

interface Link {
  url: string | null;
  label: string;
  active: boolean;
}

interface PaginationProps {
  links: Link[];
}

export default function Pagination({ links }: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [, startTransition] = useTransition();

  const goToUrl = (url: string | null) => {
    if (!url) return;

    const page = new URL(url).searchParams.get("page");

    const params = new URLSearchParams(searchParams.toString());

    if (page) {
      params.set("page", page);
    }

    startTransition(() => {
      router.push(`?${params.toString()}`);
    });
  };

  if (!links || links.length <= 3) return null;

  return (
    <div className="flex items-center justify-center gap-2 mt-6 flex-wrap">
      {links.map((link, index) => {
        const label = link.label
          .replace("&laquo;", "←")
          .replace("&raquo;", "→");

        const isDisabled = !link.url;

        return (
          <Button
            key={index}
            variant={link.active ? "default" : "outline"}
            disabled={isDisabled}
            onClick={() => goToUrl(link.url)}
            className="min-w-10"
          >
            {label}
          </Button>
        );
      })}
    </div>
  );
}
