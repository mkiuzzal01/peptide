"use client";

import { useMemo, useState } from "react";

interface Size {
  id: number;
  size: string;
}

interface CoaItem {
  id: number;
  type: "purity" | "endotoxin" | string;
  lot_number: string;
  file: string;
  size: Size;
}

interface Props {
  payload?: CoaItem[];
}

export default function ProductTabs({ payload = [] }: Props) {
  const [activeTab, setActiveTab] = useState<"purity" | "endotoxin">("purity");

  // Group data properly
  const { purityFiles, endotoxinFiles } = useMemo(() => {
    return {
      purityFiles: payload.filter((item) => item.type === "purity"),
      endotoxinFiles: payload.filter((item) => item.type === "endotoxin"),
    };
  }, [payload]);

  const tabs = [
    { key: "purity", label: "Purity" },
    { key: "endotoxin", label: "Endotoxin" },
  ] as const;

  const renderFiles = (files: CoaItem[]) => {
    if (!files.length) {
      return (
        <p className="text-xs text-gray-400 mt-3">No documents available</p>
      );
    }

    return (
      <div className="flex flex-wrap gap-3 mt-4">
        {files.map((item) => (
          <a
            key={item.id}
            href={item.file}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full border border-[#0A84FF] text-[#0A84FF] text-xs hover:bg-[#0A84FF] hover:text-white transition"
          >
            {item.lot_number}
          </a>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-[#f8f8f8] rounded-2xl p-4">
      {/* Tabs */}
      <div className="flex gap-2 mb-4">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.key;

          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-1.5 rounded-full text-xs transition border
                ${
                  isActive
                    ? "bg-[#0A84FF] text-white border-[#0A84FF]"
                    : "bg-white text-gray-500 border-gray-200 hover:border-[#0A84FF]"
                }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Content */}
      {activeTab === "purity" && (
        <div>
          <h3 className="font-semibold text-sm text-[#222]">
            Certificate of Analysis
          </h3>
          <p className="text-xs text-gray-400 mt-1">
            Third-party tested for 99% purity, ID, quantity.
          </p>

          {renderFiles(purityFiles)}
        </div>
      )}

      {activeTab === "endotoxin" && (
        <div>
          <h3 className="font-semibold text-sm text-[#222]">
            Endotoxin Report
          </h3>
          <p className="text-xs text-gray-400 mt-1">
            Tested and verified for endotoxin compliance.
          </p>

          {renderFiles(endotoxinFiles)}
        </div>
      )}
    </div>
  );
}
