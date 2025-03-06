"use client";

import React, { useState } from "react";
import Link from "next/link";
import getFrameImage from "@/lib/frameUtils"; // This returns an object { url: string, alt: string }

interface CartItem {
  frame: string;
  url: string;
}

export default function ShoppingCart() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [frameName, setFrameName] = useState("");
  const [showCart, setShowCart] = useState(false);

  const addToCart = () => {
    const trimmed = frameName.trim();
    if (!trimmed) return;
    // Check for duplicates in a case-insensitive way, but store original casing.
    const duplicate = cart.some(
      (item) => item.frame.toLowerCase() === trimmed.toLowerCase()
    );
    if (!duplicate) {
      // Retrieve the URL from your helper and store only the URL string.
      const { url } = getFrameImage(trimmed);
      setCart((prev) => [...prev, { frame: trimmed, url }]);
    }
    setFrameName("");
  };

  return (
    <div className="relative p-4 border rounded-lg shadow-lg bg-white dark:bg-gray-800">
      {/* Toggle Button */}
      <button
        onClick={() => setShowCart(!showCart)}
        className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition-colors mb-4"
      >
        {showCart ? "Hide Cart" : "Show Cart"}
      </button>

      {/* Cart Panel */}
      {showCart && (
        <div className="p-4 border rounded-lg bg-gray-50 dark:bg-gray-700 shadow-md max-h-60 overflow-y-auto mb-4">
          <h2 className="text-xl font-bold mb-2">Shopping Cart</h2>
          {cart.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            <ul className="space-y-2">
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
          )}
        </div>
      )}

      {/* Add Item Section */}
      <div className="flex flex-col sm:flex-row items-stretch gap-2">
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
          Add to Cart
        </button>
      </div>
    </div>
  );
}


