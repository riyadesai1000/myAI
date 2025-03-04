"use client";

import { useState } from "react";
import ChatInput from "@/components/chat/input";
import ChatMessages from "@/components/chat/messages";
import ChatHeader from "@/components/chat/header";
import SuggestionsBox from "@/components/chat/SuggestionsBox";
import useApp from "@/hooks/use-app";

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

  // Define a list of suggestion prompts
  const suggestions = [
    "What is VisionMate?",
    "What are Warby Parker's most popular frames?",
    "What is the Buy a Pair, Give a Pair?",
    "What can you do?",
    "What is Warby Parker?",
  ];

  // When a suggestion is clicked, we simulate an input change event to update the text box.
  const onSelectSuggestion = (suggestion: string) => {
    const syntheticEvent = {
      target: { value: suggestion },
    } as React.ChangeEvent<HTMLInputElement>;
    handleInputChange(syntheticEvent);
  };

  return (
    <>
      <ChatHeader clearMessages={clearMessages} />
      <div className="flex justify-center items-center h-screen bg-gradient-to-b from-blue-50 via-blue-300 to-blue-50 text-gray-900">
        <div className="flex flex-col max-w-screen-lg w-full h-full p-5">
          <ChatMessages messages={messages} indicatorState={indicatorState} />

          {/* Suggestions Box Section */}
          <div className="mt-4">
            <SuggestionsBox
              suggestions={suggestions}
              onSelect={onSelectSuggestion}
            />
          </div>
        </div>
      </div>
      <ChatInput
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        input={input}
        isLoading={isLoading}
      />
    </>
  );
}
