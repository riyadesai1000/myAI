"use client";

import React, { useState } from "react";
import Link from "next/link";

interface CartItem {
  frame: string;
  url: string;
}

interface ShoppingCartButtonProps {
  cart: CartItem[];
}

export default function ShoppingCartButton({ cart }: ShoppingCartButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button className="relative bg-blue-600 text-white p-2 rounded-full">
        🛒
        {cart.length > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {cart.length}
          </span>
        )}
      </button>
      {isHovered && cart.length > 0 && (
        <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-lg z-10">
          <ul className="p-2 space-y-1 max-h-64 overflow-y-auto">
            {cart.map((item, index) => (
              <li key={index} className="text-sm">
                <Link href={item.url} target="_blank" className="text-blue-600 hover:underline">
                  {item.frame}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
