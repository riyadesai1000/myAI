// components/FramePreview.tsx
"use client";

import React, { useState } from "react";
import getFrameImage, { FrameImage } from "@/lib/frameUtils";

export default function FramePreview() {
  const [frameName, setFrameName] = useState("Gillian");
  const frame: FrameImage = getFrameImage(frameName);

  return (
    <div className="p-4">
      <input
        type="text"
        value={frameName}
        onChange={(e) => setFrameName(e.target.value)}
        placeholder="Enter frame name..."
        className="p-2 border border-gray-300 rounded"
      />
      <div className="mt-4">
        <h3 className="text-xl font-bold">{frameName}</h3>
        <img src={frame.url} alt={frame.alt} className="max-w-xs rounded shadow-md" />
      </div>
    </div>
  );
}
