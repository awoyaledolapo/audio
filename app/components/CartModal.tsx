"use client";
import { useCart } from "../context/CardContext";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type CartModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function CartModal({ isOpen, onClose }: CartModalProps) {
  const { cart } = useCart();
  const [lastItem, setLastItem] = useState<typeof cart[0] | null>(null);

  useEffect(() => {
    if (cart.length > 0) {
      setLastItem(cart[cart.length - 1]); // always pick the most recent item added
    }
  }, [cart]);

  if (!isOpen || !lastItem) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl shadow-lg w-[310px] lg:w-[400px] md:w-[400px] p-6 text-center relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-black"
        >
          ✕
        </button>

       
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 bg-red-900 rounded-full flex items-center justify-center">
            <span className="text-white text-2xl">✓</span>
          </div>
        </div>

        <h2 className="text-xl font-bold mb-6">ADDED TO YOUR CART</h2>

        {/* Product Info */}
        <div className="bg-gray-100 rounded-lg p-4 flex items-center gap-4 mb-6">
          <div className="relative w-16 h-16 rounded-md overflow-hidden">
            <Image
              src={lastItem.images} 
              alt={lastItem.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="text-left flex-1">
            <p className="font-semibold">{lastItem.name}</p>
            <p className="text-gray-600">${lastItem.price.toLocaleString()}</p>
          </div>
          <span className="font-semibold text-gray-700">x{lastItem.quantity}</span>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          <button
            onClick={onClose}
            className="bg-black text-white py-3 rounded-md font-bold uppercase tracking-wide hover:bg-gray-800"
          >
            Continue Shopping
          </button>
         <Link className="bg-red-900 hover:bg-red-600"  href="/checkout"> 
          <button className=" text-white py-3 rounded-md font-bold uppercase tracking-wide ">
            Checkout
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
