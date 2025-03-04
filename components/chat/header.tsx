// components/chat/header.tsx
"use client";

import { useState, useEffect } from "react";

interface ChatHeaderProps {
  clearMessages: () => void;
}

export default function ChatHeader({ clearMessages }: ChatHeaderProps) {
  const [darkMode, setDarkMode] = useState(false);

  // Add or remove the "dark" class on <html> when darkMode changes
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="flex justify-between items-center p-4 bg-white dark:bg-gray-900 dark:text-gray-100 shadow-sm">
      <h1 className="text-xl font-bold">VisionMate: A Warby Parker AI Assistant</h1>
      <div className="flex items-center space-x-2">
        {/* End Conversation button, same styling as before */}
        <button
          className="px-4 py-2 text-sm border border-gray-300 rounded bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700"
          onClick={clearMessages}
        >
          End Conversation
        </button>

        {/* Dark Mode toggle button, same styling */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 text-sm border border-gray-300 rounded bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </div>
  );
}

