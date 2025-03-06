"use client";

import React, { useState } from "react";
import Link from "next/link";
import getFrameLink from "@/lib/frameUtils"; // Ensure this helper returns the URL for a frame

interface CartItem {
  frame: string;
  url: string;
}

export default function ShoppingCart() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [frameName, setFrameName] = useState("");

  const addToCart = () => {
    if (!frameName.trim()) return;
    const url = getFrameLink(frameName.trim());
    // Add frame only if it's not already in the cart
    setCart((prevCart) => {
      if (prevCart.some((item) => item.frame.toLowerCase() === frameName.trim().toLowerCase())) {
        return prevCart;
      }
      return [...prevCart, { frame: frameName.trim(), url }];
    });
    setFrameName("");
  };

  return (
    <div className="p-4 border rounded shadow-md bg-white dark:bg-gray-800">
      <h2 className="text-xl font-bold mb-2">Shopping Cart</h2>
      <div className="mb-4">
        <input
          type="text"
          value={frameName}
          onChange={(e) => setFrameName(e.target.value)}
          placeholder="Enter frame name..."
          className="border p-2 rounded w-full mb-2"
        />
        <button
          onClick={addToCart}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add to Cart
        </button>
      </div>
      {cart.length === 0 ? (
        <p className="text-gray-500">No items in cart.</p>
      ) : (
        <ul className="space-y-2">
          {cart.map((item, index) => (
            <li key={index}>
              <Link href={item.url} target="_blank" className="text-blue-600 underline">
                {item.frame}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
