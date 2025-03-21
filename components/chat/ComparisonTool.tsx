"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import getFrameImage, { FrameImage } from "@/lib/frameUtils";

export interface CartItem {
  frame: string;
  url: string;
  cdnUrl?: string; // optional property for direct image URL
  price: string;
  dimensions: string;
  alt: string;
}

interface ComparisonToolProps {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

export default function ComparisonTool({ cart, setCart }: ComparisonToolProps) {
  const [frameName, setFrameName] = useState("");
  const [showComparison, setShowComparison] = useState(false);
  const [showImages, setShowImages] = useState(false);

  const addToCart = () => {
    const trimmed = frameName.trim();
    if (!trimmed) return;
    if (cart.length >= 5) {
      alert("Cannot input more than 5 frames!");
      setFrameName("");
      return;
    }
    const frameData: FrameImage | undefined = getFrameImage(trimmed);
    if (frameData && !cart.some(item => item.frame.toLowerCase() === frameData.frame.toLowerCase())) {
      setCart(prev => [
        ...prev,
        {
          frame: frameData.frame,
          url: frameData.url,
          cdnUrl: frameData.cdnUrl,
          price: frameData.price,
          dimensions: frameData.dimensions,
          alt: frameData.alt,
        },
      ]);
    }
    setFrameName("");
  };

  const compareFrames = () => {
    if (cart.length < 2) {
      alert("Please add at least two frames to compare.");
      return;
    }
    setShowComparison(true);
  };

  const clearCart = () => {
    setCart([]);
    setShowComparison(false);
    setShowImages(false);
  };

  return (
    <div className="p-4 border rounded shadow-md bg-white dark:bg-gray-800 w-full max-w-md transition-colors duration-300 relative">
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
                <span className="text-blue-600 font-medium">{item.frame}</span>
              </li>
            ))}
          </ul>
          <div className="flex space-x-2 mb-2">
            <button
              onClick={compareFrames}
              className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition-colors flex-grow"
            >
              Compare Frames
            </button>
            <button
              onClick={() => setShowImages(!showImages)}
              className="bg-purple-600 text-white px-4 py-2 rounded shadow hover:bg-purple-700 transition-colors flex-grow"
            >
              {showImages ? "Hide Frame Images" : "Show Frame Images"}
            </button>
          </div>
        </>
      )}
      {showComparison && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 p-6 rounded shadow-lg w-80">
            <h3 className="text-lg font-bold mb-4">Frame Comparison</h3>
            <ul className="space-y-2 max-h-48 overflow-y-auto">
              {cart.map((item, index) => (
                <li key={index} className="flex flex-col items-center">
                  <Link
                    href={item.url}
                    target="_blank"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    {item.frame}
                  </Link>
                  <span className="text-sm mt-1">
                    Price: {item.price} | Dimensions: {item.dimensions}
                  </span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setShowComparison(false)}
              className="mt-4 bg-gray-600 text-white px-4 py-2 rounded shadow hover:bg-gray-700 transition-colors w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
      {showImages && (
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {cart.map((item, idx) => (
            <div key={idx} className="border rounded shadow-md p-2">
              <Image
                src={item.cdnUrl || item.url}
                alt={item.alt}
                width={200}
                height={150}
                className="rounded"
              />
              <p className="text-center text-sm mt-2">{item.frame}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}




