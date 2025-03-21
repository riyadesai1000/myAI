// In your app/page.tsx
"use client";

import { useState } from "react";
import ChatInput from "@/components/chat/input";
import ChatMessages from "@/components/chat/messages";
import useApp from "@/hooks/use-app";
import ChatHeader from "@/components/chat/header";
import ShoppingCart, { CartItem } from "@/components/chat/ComparisonTool";
import FrameImagesButton from "@/components/chat/FrameImagesButton";

export default function Chat() {
  const {
    messages,
    handleInputChange,
    handleSubmit,
    isLoading,
    indicatorState,
    clearMessages,
  } = useApp();

  // Create local state for input and cart
  const [input, setInput] = useState("");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);
  const toggleCart = () => setShowCart(prev => !prev);

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-blue-50 via-blue-300 to-blue-50 text-gray-900 dark:bg-gradient-to-b dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 dark:text-gray-100">
      <ChatHeader clearMessages={clearMessages} toggleCart={toggleCart} showCart={showCart} />

      {showCart && (
        <div className="fixed top-20 right-5 z-50">
          <ShoppingCart cart={cart} setCart={setCart} />
        </div>
      )}

      <div className="flex flex-col justify-center items-center min-h-screen pt-16 px-5 space-y-8">
        <ChatMessages messages={messages} indicatorState={indicatorState} />
        <FrameImagesButton frameNames={["Gillian", "Daisy", "Durand", "Bodie", "Crane"]} className="mt-4" />
      </div>

      <ChatInput
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        input={input}
        setInput={setInput}
        isLoading={isLoading}
      />
    </div>
  );
}















