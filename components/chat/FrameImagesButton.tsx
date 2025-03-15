"use client";

import { useState } from "react";
import getFrameImage, { FrameImage } from "@/lib/frameUtils";
import Image from "next/image";

export default function FramePreview() {
  const [frameName, setFrameName] = useState("Gillian");
  const frame: FrameImage | undefined = getFrameImage(frameName);

  if (!frame) {
    return (
      <div className="p-4">
        <p>Frame not found: {frameName}</p>
        <input
          type="text"
          value={frameName}
          onChange={(e) => setFrameName(e.target.value)}
          placeholder="Enter frame name..."
          className="border p-2 rounded"
        />
      </div>
    );
  }

  return (
    <div className="p-4">
      <div>
        <input
          type="text"
          value={frameName}
          onChange={(e) => setFrameName(e.target.value)}
          placeholder="Enter frame name..."
          className="border p-2 rounded"
        />
      </div>
      <div className="mt-4">
        <Image
          src={frame.url}
          alt={frame.alt}
          width={400}
          height={300}
          className="rounded shadow-md"
        />
      </div>
    </div>
  );
}
