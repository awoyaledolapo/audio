"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "../context/CardContext";
import Image from "next/image";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function OrderConfirmationModal({ isOpen, onClose }: Props) {
  const { cart ,clearCart} = useCart();
  const router = useRouter();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 50;
  const vat = total * 0.2;
  const grandTotal = total + shipping + vat;

  // Automatically redirect when modal opens
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        router.push("/"); 
        onClose();
        clearCart(); 
      }, 8000); 
      return () => clearTimeout(timer);
    }
  }, [isOpen, router, onClose,clearCart]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[999]"
      onClick={() => {
        router.push("/");
        onClose();
      }}
    >
      <div
        className="bg-white rounded-lg p-8 w-[90%] max-w-[600px] relative"
        onClick={(e) => e.stopPropagation()} 
      >
        <button
          onClick={() => {
            router.push("/");
            onClose();
          }}
          className="absolute top-4 right-4 text-gray-500 text-xl"
        >
          ×
        </button>

        <div className="flex flex-col items-start gap-6">
          <div className="bg-red-900 w-16 h-16 flex items-center justify-center rounded-full text-white text-3xl">
            ✓
          </div>
          <h2 className="text-2xl font-bold">THANK YOU FOR YOUR ORDER</h2>
          <p className="text-gray-600">
            You will receive an email confirmation shortly.
          </p>

          <div className="flex w-full bg-gray-100 rounded-lg overflow-hidden">
            <div className="flex-1 p-4">
              {cart[0] && (
                <div className="flex items-center gap-4 mb-2">
                  <Image
                    src={cart[0].images}
                    alt={cart[0].name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <p className="font-semibold">{cart[0].name}</p>
                    <p className="text-gray-500">${cart[0].price.toFixed(2)}</p>
                  </div>
                  <p className="ml-auto text-gray-700 font-medium">
                    x{cart[0].quantity}
                  </p>
                </div>
              )}
              {cart.length > 1 && (
                <p className="text-gray-500 text-sm">
                  and {cart.length - 1} other item(s)
                </p>
              )}
            </div>
            <div className="bg-black text-white p-6 flex flex-col justify-center items-start">
              <p className="uppercase text-sm tracking-wide text-gray-400">
                Grand Total
              </p>
              <p className="text-2xl font-bold">${grandTotal.toFixed(2)}</p>
            </div>
          </div>

          <button
            onClick={() => {
              router.push("/");
              onClose();
              clearCart();
            }}
            className="w-full bg-red-900 text-white py-3 rounded-md text-lg font-semibold hover:bg-red-600 transition"
          >
            BACK TO HOME
          </button>
        </div>
      </div>
    </div>
  );
}
