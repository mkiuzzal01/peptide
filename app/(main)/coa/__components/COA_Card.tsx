"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";

interface COACardProps {
  title: string;
  cas?: string;
  doseOptions: string[];
  image: StaticImageData;
  certificates: string[];
}

export default function COA_Card({
  title,
  cas,
  doseOptions,
  image,
  certificates,
}: COACardProps) {
  const [activeTab, setActiveTab] = useState("Purity");
  const [activeDose, setActiveDose] = useState(doseOptions[0]);
  const [showAll, setShowAll] = useState(false);

  const tabs = ["Purity", "Endotoxin"];
  const visibleCerts = showAll ? certificates : certificates.slice(0, 3);

  return (
    <div className="bg-white border rounded-xl p-4 shadow-sm">
      {/* Tabs */}
      <div className="flex gap-2 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1.5 rounded-full text-xs border transition
            ${
              activeTab === tab
                ? "bg-[#0A84FF] text-white border-[#0A84FF]"
                : "bg-white text-gray-500 border-gray-200 hover:border-[#0A84FF]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Main Row */}
      <div className="flex items-center justify-between gap-6">
        {/* Left: Image + Info */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 relative shrink-0">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover rounded-lg"
            />
          </div>

          <div>
            <h3 className="text-base font-semibold">{title}</h3>
            {cas && <p className="text-xs text-gray-500">CAS #: {cas}</p>}
          </div>
        </div>

        {/* Middle: Dose */}
        <div className="flex flex-col gap-1">
          <span className="text-xs text-gray-500">Dose</span>

          <div className="flex gap-2">
            {doseOptions.map((dose) => (
              <button
                key={dose}
                onClick={() => setActiveDose(dose)}
                className={`px-3 py-1 rounded-md text-xs border transition
                ${
                  activeDose === dose
                    ? "bg-[#0A84FF] text-white border-[#0A84FF]"
                    : "bg-white text-gray-600 border-gray-200 hover:border-[#0A84FF]"
                }`}
              >
                {dose}
              </button>
            ))}
          </div>
        </div>

        {/* Right: Certificates */}
        <div className="flex flex-col gap-1">
          <h1 className="text-xs text-gray-500 mb-2">Certificates</h1>
          <div className="flex items-center gap-2 flex-wrap justify-end max-w-md">
            {visibleCerts.map((file, idx) => (
              <a
                key={idx}
                href={`/coa/${file}`}
                target="_blank"
                className="px-3 py-1 text-xs rounded-md bg-[#0A84FF] text-white hover:opacity-90"
              >
                {file}
              </a>
            ))}

            {certificates.length > 3 && (
              <button
                onClick={() => setShowAll(!showAll)}
                className="text-xs px-3 py-1 border rounded-md text-gray-600 hover:border-[#0A84FF]"
              >
                {showAll ? "Show less" : "View more"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
