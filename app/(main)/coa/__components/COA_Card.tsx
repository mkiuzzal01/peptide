"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

interface CoaItem {
  id: number;
  size_id: number;
  size: string;
  type: string;
  lot_number: string;
  file: string;
}

interface SizeItem {
  id: number;
  size: string;
}

interface COACardProps {
  title: string;
  coas: CoaItem[];
  sizes: SizeItem[];
  image: string;
}

export default function COA_Card({ title, coas, sizes, image }: COACardProps) {
  const tabs = ["purity", "endotoxin"];

  const [activeTab, setActiveTab] = useState("purity");
  const [activeDose, setActiveDose] = useState(sizes?.[0]?.size || "");

  const filteredCertificates = useMemo(() => {
    return coas?.filter(
      (item) =>
        item.type.toLowerCase() === activeTab && item.size === activeDose,
    );
  }, [coas, activeDose, activeTab]);

  return (
    <div
      className="
        rounded-2xl border border-gray-200
        bg-white p-5 shadow-sm
        transition-all duration-300
        hover:shadow-md
      "
    >
      {/* Top Tabs */}
      <div className="mb-5 flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`
              rounded-full border px-4 py-1.5
              text-xs font-medium capitalize
              transition-all duration-200
              ${
                activeTab === tab
                  ? "border-primary bg-primary text-white"
                  : "border-gray-200 text-gray-600 hover:border-primary hover:text-primary"
              }
            `}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Product */}
        <div className="flex items-center gap-4">
          <div className="relative h-16 w-16 overflow-hidden rounded-xl border border-gray-100 bg-gray-50">
            <Image src={image} alt={title} fill className="object-cover" />
          </div>

          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          </div>
        </div>

        {/* Sizes */}
        <div className="flex flex-col gap-2">
          <span className="text-xs font-medium uppercase tracking-wide text-gray-500">
            Dose
          </span>

          <div className="flex flex-wrap gap-2">
            {sizes?.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveDose(item.size)}
                className={`
                  rounded-lg border px-3 py-1.5
                  text-sm font-medium transition-all
                  ${
                    activeDose === item.size
                      ? "border-primary bg-primary text-white"
                      : "border-gray-200 text-gray-700 hover:border-primary hover:text-primary"
                  }
                `}
              >
                {item.size}
              </button>
            ))}
          </div>
        </div>

        {/* Certificates */}
        <div className="flex flex-col gap-2">
          <span className="text-xs font-medium uppercase tracking-wide text-gray-500">
            Certificates
          </span>

          <div className="flex flex-wrap gap-2">
            {filteredCertificates?.map((item) => (
              <a
                key={item.id}
                href={item.file}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-2
                  rounded-lg bg-primary px-3 py-2
                  text-xs font-medium text-white
                  transition-opacity hover:opacity-90
                "
              >
                {item.lot_number}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
