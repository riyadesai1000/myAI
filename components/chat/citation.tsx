"use client";

import React from "react";
import { Tooltip } from "react-tippy";
import Link from "next/link";
import { EMPTY_CITATION_MESSAGE } from "@/configuration/ui";
import { Citation } from "@/types";

// Create a temporary variable for the Tooltip with an any cast.
const CustomTooltip = Tooltip as any;

export function CitationCircle({
  number,
  citation,
}: {
  number: number;
  citation: Citation;
}) {
  const isValidUrl = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const hasSourceUrl = isValidUrl(citation.source_url);
  const hasSourceDescription = citation.source_description.trim() !== "";

  return (
    <CustomTooltip
      title=""
      position="bottom"
      trigger="mouseenter"
      interactive={true}
      html={
        <div className="bg-white p-3 rounded-md shadow-lg flex flex-col justify-center border border-gray-300">
          <p className="text-base">
            {hasSourceUrl ? (
              <Link
                href={citation.source_url}
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                {citation.source_description}
              </Link>
            ) : (
              citation.source_description || EMPTY_CITATION_MESSAGE
            )}
          </p>
        </div>
      }
    >
      <span className="cursor-pointer bg-white border border-gray-300 rounded-full px-3 py-1 text-sm font-bold mx-1">
        [{number}]
      </span>
    </CustomTooltip>
  );
}

export default CitationCircle;

