"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { EraserIcon } from "lucide-react";
import Image from "next/image";
import { CHAT_HEADER, CLEAR_BUTTON_TEXT } from "@/configuration/ui";
import { AI_NAME } from "@/configuration/identity";

export const AILogo = () => (
  <div className="w-12 h-12 relative">
    <Image src="/ai-logo.png" alt={AI_NAME} width={48} height={48} />
    <div className="w-2 h-2 rounded-full bg-green-500 absolute -bottom-0.5 -right-0.5"></div>
  </div>
);

export default function ChatHeader({
  clearMessages,
}: {
  clearMessages: () => void;
}) {
  // Dark mode state
  const [darkMode, setDarkMode] = useState(false);

  // Add/remove the "dark" class on <html> when darkMode changes
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="z-10 flex justify-center items-center fixed top-0 w-full p-5 bg-white shadow-[0_10px_15px_-3px_rgba(255,255,255,1)] dark:bg-gray-900 dark:text-gray-100">
      <div className="flex w-full">
        {/* Left spacing */}
        <div className="flex-0 w-[100px]"></div>

        {/* Center section: AI Logo + Chat Header */}
        <div className="flex-1 flex justify-center items-center gap-2">
          <AILogo />
          <p>{CHAT_HEADER}</p>
        </div>

        {/* Right section: End Conversation + Dark Mode Toggle */}
        <div className="flex-0 w-[100px] flex justify-end items-center gap-2">
          {/* End Conversation button */}
          <Button
            onClick={clearMessages}
            className="gap-2 shadow-sm"
            variant="outline"
            size="sm"
          >
            <EraserIcon className="w-4 h-4" />
            <span>{CLEAR_BUTTON_TEXT}</span>
          </Button>

          {/* Dark Mode toggle, same styling as the End Conversation button */}
          <Button
            onClick={() => setDarkMode(!darkMode)}
            className="gap-2 shadow-sm"
            variant="outline"
            size="sm"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </Button>
        </div>
      </div>
    </div>
  );
}

