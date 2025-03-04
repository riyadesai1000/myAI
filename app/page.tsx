"use client";

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

  return (
    // The outer container has a full-screen height and the desired background color.
    <div className="min-h-screen w-full bg-blue-100 text-gray-900">
      <ChatHeader clearMessages={clearMessages} />
      {/* This container will hold the chat messages and fill the same background color. */}
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
