"use client";

import { useState } from "react";
import ChatInput from "@/components/chat/input";
import ChatMessages from "@/components/chat/messages";
import useApp from "@/hooks/use-app";
import ChatHeader from "@/components/chat/header";
import ShoppingCart from "@/components/chat/ShoppingCart";

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

  // State for controlling cart visibility
  const [showCart, setShowCart] = useState(false);
  const toggleCart = () => setShowCart((prev) => !prev);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-blue-50 via-blue-300 to-blue-50 text-gray-900 dark:bg-gradient-to-b dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 dark:text-gray-100">
      {/* Pass the toggleCart function as a prop */}
      <ChatHeader clearMessages={clearMessages} toggleCart={toggleCart} />
      <div className="flex flex-col justify-center items-center min-h-screen pt-16 px-5 space-y-8">
        <ChatMessages messages={messages} indicatorState={indicatorState} />
        {showCart && <ShoppingCart />}
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






