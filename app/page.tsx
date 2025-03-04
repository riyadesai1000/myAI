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
    // Outer container with custom background and text color
    <div className="min-h-screen w-full bg-blue-100 text-gray-900">
      <ChatHeader clearMessages={clearMessages} />
      <div className="flex justify-center items-center min-h-screen pt-16">
        <div className="flex flex-col max-w-screen-lg w-full h-full p-5 bg-white rounded shadow-lg">
          {/* Chat message box with a white background, rounded corners, and a subtle shadow */}
          <ChatMessages messages={messages} indicatorState={indicatorState} />
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
