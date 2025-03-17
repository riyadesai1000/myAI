"use client";

import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import React from "react";

interface ChatInputProps {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
}

export default function ChatInput({
  handleInputChange,
  handleSubmit,
  input,
  setInput,
  isLoading,
}: ChatInputProps) {
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    handleInputChange(e);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(e);
    setInput(""); // Clear the input after submission
  };

  return (
    <div className="fixed bottom-0 w-full p-5 bg-white dark:bg-gray-900 shadow-md">
      <form onSubmit={onSubmit} className="flex items-center space-x-2">
        <input
          type="text"
          value={input}
          onChange={onInputChange}
          placeholder="Ask more about Warby Parker here!"
          disabled={isLoading}
          className="flex-grow p-2 border rounded bg-transparent placeholder-gray-500 dark:placeholder-gray-400"
        />
        <Button
          type="submit"
          disabled={input.trim() === "" || isLoading}
          className="rounded-full w-10 h-10 p-0 flex items-center justify-center"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      </form>
    </div>
  );
}




