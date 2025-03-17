"use client";

import React from "react";
import { Tooltip } from "react-tippy";
import Link from "next/link";
import { EMPTY_CITATION_MESSAGE } from "@/configuration/ui";
import { Citation } from "@/types";

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
    <Tooltip
      title=""
      position="bottom"
      trigger="mouseenter"
      interactive={true}
      html={
        <div className="bg-white p-2 rounded-md shadow-sm flex flex-col justify-center border border-gray-200">
          <p>
            {hasSourceUrl ? (
              <Link
                href={citation.source_url}
                target="_blank"
                className="text-blue-500 hover:underline text-sm"
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
      <span className="cursor-pointer bg-gray-200 rounded-full px-2 py-1">
        [{number}]
      </span>
    </Tooltip>
  );
}

export default CitationCircle;
