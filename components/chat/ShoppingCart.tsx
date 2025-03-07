"use client";

import React, { useState } from "react";
import Link from "next/link";
import getFrameImage, { FrameImage } from "@/lib/frameUtils";

export interface CartItem {
  frame: string;
  url: string;
}

interface ShoppingCartProps {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

export default function ShoppingCart({ cart, setCart }: ShoppingCartProps) {
  const [frameName, setFrameName] = useState("");

  const addToCart = () => {
    const trimmed = frameName.trim();
    if (!trimmed) return;
    const frameData: FrameImage | undefined = getFrameImage(trimmed);
    // Only add if frameData exists and it's not already in the cart (case-insensitive)
    if (frameData && !cart.some(item => item.frame.toLowerCase() === frameData.frame.toLowerCase())) {
      setCart(prev => [...prev, { frame: frameData.frame, url: frameData.url }]);
    }
    setFrameName("");
  };

  // New function: Compare frames
  const compareFrames = () => {
    if (cart.length < 2) {
      alert("Please add at least two frames to compare.");
    } else {
      const framesList = cart.map(item => item.frame).join(", ");
      alert(`Comparing frames: ${framesList}`);
    }
  };

  return (
    <div className="p-4 border rounded shadow-md bg-white dark:bg-gray-800 w-full max-w-md">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-bold">Shopping Cart</h2>
      </div>
      <div className="flex flex-col sm:flex-row items-stretch gap-2 mb-4">
        <input
          type="text"
          value={frameName}
          onChange={(e) => setFrameName(e.target.value)}
          placeholder="Enter frame name..."
          className="flex-grow p-2 border rounded dark:bg-gray-700 dark:text-white"
        />
        <button
          onClick={addToCart}
          className="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700 transition-colors"
        >
          Add
        </button>
      </div>
      {cart.length === 0 ? (
        <p className="text-gray-500">No items in cart.</p>
      ) : (
        <>
          <ul className="space-y-2 max-h-48 overflow-y-auto mb-4">
            {cart.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.url}
                  target="_blank"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  {item.frame}
                </Link>
              </li>
            ))}
          </ul>
          <button
            onClick={compareFrames}
            className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition-colors w-full"
          >
            Compare Frames
          </button>
        </>
      )}
    </div>
  );
}





