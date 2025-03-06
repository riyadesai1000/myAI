"use client";

import { useState } from "react";
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

  // Cart state lifted to the page
  const [cart, setCart] = useState<{ frame: string; url: string }[]>([]);

  // addToCart: uses case-sensitive check
  const addToCart = (frameName: string) => {
    const trimmed = frameName.trim();
    if (!trimmed) return;
    // getFrameImage returns an object with { url, alt } – we extract the URL
    const { url } = require("@/lib/frameUtils").getFrameImage(trimmed);
    // Use a case-sensitive check: if the exact frame string is already in the cart, do nothing.
    if (!cart.some((item) => item.frame === trimmed)) {
      setCart((prev) => [...prev, { frame: trimmed, url }]);
    }
  };

  // You might integrate addToCart in your chat logic or input

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-blue-50 via-blue-300 to-blue-50 text-gray-900 dark:bg-gradient-to-b dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 dark:text-gray-100">
      <ChatHeader clearMessages={clearMessages} cart={cart} />
      <div className="flex flex-col justify-center items-center min-h-screen pt-16 px-5 space-y-8">
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







