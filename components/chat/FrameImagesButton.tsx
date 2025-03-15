"use client";

import React, { useState } from "react";
import Image from "next/image";
import getFrameImage from "@/lib/frameUtils";

interface FrameImagesButtonProps {
  frameNames: string[];
  className?: string;
}

export default function FrameImagesButton({ frameNames, className }: FrameImagesButtonProps) {
  const [visible, setVisible] = useState(false);

  const handleToggle = () => {
    setVisible((prev) => !prev);
  };

  return (
    <div>
      <button
        onClick={handleToggle}
        className={`bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition-colors ${className}`}
      >
        {visible ? "Hide Frame Images" : "Show Frame Images"}
      </button>
      {visible && (
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {frameNames.map((name, idx) => {
            const frame = getFrameImage(name);
            return frame ? (
              <div key={idx} className="border rounded shadow-md p-2">
                <Image
                  src={frame.url}
                  alt={frame.alt}
                  width={200}
                  height={150}
                  className="rounded"
                />
                <p className="text-center text-sm mt-2">{frame.frame}</p>
              </div>
            ) : (
              <p key={idx} className="text-red-600">Frame "{name}" not found.</p>
            );
          })}
        </div>
      )}
    </div>
  );
}

