"use client";

import ChatInput from "@/components/chat/input";
import ChatMessages from "@/components/chat/messages";
import ShoppingCart from "@/components/ShoppingCart"; // adjust path if needed
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
    <div className="min-h-screen w-full bg-gradient-to-b from-blue-50 via-blue-300 to-blue-50 text-gray-900 dark:bg-gradient-to-b dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 dark:text-gray-100">
      {/* Header */}
      <ChatHeader clearMessages={clearMessages} />
      
      {/* Main content area */}
      <div className="flex flex-col justify-center items-center min-h-screen pt-16 px-5 space-y-8">
        {/* Shopping Cart appears immediately after header */}
        <ShoppingCart />
        {/* Chat messages come after */}
        <ChatMessages messages={messages} indicatorState={indicatorState} />
      </div>

      {/* Chat Input */}
      <ChatInput
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        input={input}
        isLoading={isLoading}
      />
    </div>
  );
}



