"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import getFrameImage, { FrameImage } from "@/lib/frameUtils";

export interface CartItem {
  frame: string;
  url: string;
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
         

