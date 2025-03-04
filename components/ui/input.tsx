"use client";

import { Button } from "@/components/ui/button";
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
      className="p-4 flex items-center bg-white dark:bg-gray-900 shadow-sm border-t border-gray-200 dark:border-gray-700"
    >
      <input
        className="flex-grow bg-transparent border-none focus:outline-none px-3 py-2 text-black dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
        type="text"
        value={input}
        onChange={handleInputChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="Type your message here..."
        disabled={isLoading}
      />
      <Button
        type="submit"
        disabled={isLoading || input.trim() === ""}
        className="ml-2 flex items-center gap-1 px-4 py-2 bg-white text-black dark:bg-gray-800 dark:text-gray-100 border border-gray-300 dark:border-gray-700 rounded shadow-sm"
      >
        <ArrowUp className="w-5 h-5" />
        Send
      </Button>
    </form>
  );
}

