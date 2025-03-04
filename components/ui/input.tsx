// components/chat/input.tsx
"use client";

import { useState } from "react";
import { ArrowUp } from "lucide-react";

interface ChatInputProps {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  input: string;
  isLoading: boolean;
}

export default function ChatInput({
  handleInputChange,
  handleSubmit,
  input,
  isLoading,
}: ChatInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex-0 flex w-full p-2 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900`}
    >
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="Type your message here..."
        disabled={isLoading}
        className="flex-grow px-3 py-2 bg-white text-black dark:bg-white dark:text-black rounded-l focus:outline-none placeholder-gray-500"
      />
      <button
        type="submit"
        disabled={input.trim() === "" || isLoading}
        className="px-4 py-2 bg-white text-black border-l border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-300 transition-colors rounded-r"
      >
        <ArrowUp className="w-5 h-5 text-black" />
      </button>
    </form>
  );
}
