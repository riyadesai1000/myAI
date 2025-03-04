// app/page.tsx
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
    <div className="min-h-screen w-full bg-gradient-to-b from-blue-50 via-blue-100 to-blue-50 text-gray-900 dark:bg-gradient-to-b dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 dark:text-gray-100">
      {/* The updated ChatHeader with End Conversation + Dark Mode toggle */}
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

