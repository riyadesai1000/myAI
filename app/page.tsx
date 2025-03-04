"use client";

import { useState } from "react";
import ChatInput from "@/components/chat/input";
import ChatMessages from "@/components/chat/messages";
import useApp from "@/hooks/use-app";
import ChatHeader from "@/components/chat/header";
import { getFrameImage } from "@/lib/frameUtils";

export default function Chat() {
  const {
    messages,
    handleInputChange,
    handleSubmit,
    input,
    isLoading,
    indicatorState,
    clearMessages,
  } = useApp();

  // Local state for the frame name that user wants to preview
  const [frameName, setFrameName] = useState("Gillian");

  // Get the image object based on the frame name
  const frame = getFrameImage(frameName);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-blue-50 via-blue-300 to-blue-50 text-gray-900">
      <ChatHeader clearMessages={clearMessages} />
      <div className="flex flex-col justify-center items-center min-h-screen pt-16 px-5">
        <ChatMessages messages={messages} indicatorState={indicatorState} />

        {/* Input field to enter frame name */}
        <input
          type="text"
          value={frameName}
          onChange={(e) => setFrameName(e.target.value)}
          placeholder="Enter a frame name (e.g., Daisy, Durand)"
          className="w-full max-w-md p-2 border border-gray-300 rounded mb-4 mt-4"
        />

        {/* Display the frame image */}
        <div>
          <h2 className="text-xl font-bold">{frameName}</h2>
          <img
            src={frame.url}
            alt={frame.alt}
            className="max-w-xs rounded shadow-md mt-2"
          />
        </div>
      </div>
      <ChatInput
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        input={input}
        isLoading={isLoading}
      />
    </div>
  );
}
