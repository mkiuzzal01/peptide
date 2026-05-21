"use client";

import { useState } from "react";

interface Props {
  tab?: string;
}

export default function ProductTabs({ tab }: Props) {
  const [activeTab, setActiveTab] = useState(tab || "Purity");

  const tabs = ["Purity", "Endotoxin"];

  return (
    <div className="bg-[#f8f8f8] rounded-2xl p-4">
      {/* Tabs */}
      <div className="flex gap-2 mb-4">
        {tabs.map((tab) => {
          const isActive = activeTab === tab;

          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 rounded-full text-xs transition border
                ${
                  isActive
                    ? "bg-[#0A84FF] text-white border-[#0A84FF]"
                    : "bg-white text-gray-500 border-gray-200 hover:border-[#0A84FF]"
                }`}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      {activeTab === "Purity" && (
        <div>
          <h3 className="font-semibold text-sm text-[#222]">
            Certificate of Analysis
          </h3>

          <p className="text-xs text-gray-400 mt-1">
            Third-party tested for 99% purity, ID, quantity.
          </p>

          {/* Files */}
          <div className="flex flex-wrap gap-3 mt-4">
            {["DPS-185170", "DPS-457207", "DPS-545720"].map((item) => (
              <button
                key={item}
                className="px-5 py-2 rounded-full border border-[#0A84FF] text-[#0A84FF] text-xs hover:bg-[#0A84FF] hover:text-white transition"
              >
                {item}
              </button>
            ))}

            <button className="px-5 py-2 rounded-full bg-[#e9e9e9] text-xs text-gray-600 hover:bg-gray-300 transition">
              View all
            </button>
          </div>
        </div>
      )}

      {activeTab === "Endotoxin" && (
        <div>
          <h3 className="font-semibold text-sm text-[#222]">
            Endotoxin Report
          </h3>

          <p className="text-xs text-gray-400 mt-1">
            Tested and verified for endotoxin compliance.
          </p>

          <div className="flex flex-wrap gap-3 mt-4">
            {["ENDO-001", "ENDO-002"].map((item) => (
              <button
                key={item}
                className="px-5 py-2 rounded-full border border-[#0A84FF] text-[#0A84FF] text-xs hover:bg-[#0A84FF] hover:text-white transition"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
