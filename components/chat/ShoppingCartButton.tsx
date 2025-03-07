"use client";

import React, { useState } from "react";
import getFrameImage, { FrameImage } from "@/lib/frameUtils";

export interface CartItem {
  frame: string;
  url: string;
  price: string;
  dimensions: string;
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
      setCart(prev => [
        ...prev,
        { frame: frameData.frame, url: frameData.url, price: frameData.price, dimensions: frameData.dimensions }
      ]);
    }
    setFrameName("");
  };

  const compareFrames = () => {
    if (cart.length > 5) {
      alert("Too many frames to compare!");
      return;
    }
    if (cart.length < 2) {
      alert("Please add at least two frames to compare.");
      return;
    }
    const comparison = cart
      .map(item => `${item.frame}: Price ${item.price}, Dimensions ${item.dimensions}`)
      .join("\n");
    alert(`Frame Information:\n${comparison}`);
  };

  const clearCart = () => setCart([]);

  return (
    <div className="p-4 border rounded shadow-md bg-white dark:bg-gray-800 w-full max-w-md transition-colors duration-300">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-bold">Compare Frames</h2>
        <button onClick={clearCart} className="text-red-600 text-sm underline">
          Clear Cart
        </button>
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
        <p className="text-gray-500">No frames added.</p>
      ) : (
        <>
          <ul className="space-y-2 max-h-48 overflow-y-auto mb-4">
            {cart.map((item, index) => (
              <li key={index}>
                {/* Display only the frame name */}
                <span className="text-blue-600 font-medium">{item.frame}</span>
              </li>
            ))}
          </ul>
          <button
            onClick={compareFrames}
            className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition-colors w-full mb-2"
          >
            Compare Frames
          </button>
        </>
      )}
    </div>
  );
}

