"use client";

import { useState, useEffect } from "react";
import ChatInput from "@/components/chat/input";
import ChatMessages from "@/components/chat/messages";
import useApp from "@/hooks/use-app";
import ChatHeader from "@/components/chat/header";

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

  // State to control dark mode (true = dark, false = light)
  const [darkMode, setDarkMode] = useState(false);

  // Add or remove the "dark" class on <html> whenever darkMode changes
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-blue-50 via-blue-100 to-blue-50 text-gray-900 dark:bg-gradient-to-b dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 dark:text-gray-100 relative">
      {/* Dark Mode Toggle: pinned in the top-right corner */}
      <div className="absolute top-4 right-4 z-50">
        <button
          onClick={() => setDarkMode((prev) => !prev)}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded shadow transition-colors"
        >
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>

      <ChatHeader clearMessages={clearMessages} />

      <div className="flex flex-col justify-center items-center min-h-screen pt-16 px-5">
        <ChatMessages messages={messages} indicatorState={indicatorState} />
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
