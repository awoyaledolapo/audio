
"use client";
import Image from "next/image";
import {  useCart } from "../context/CardContext";
import Link from "next/link";



export default function CartPage({ position = "top" }: { position?: "top" | "bottom" }) {
  const positionClass =
    position === "bottom"
      ? "absolute bottom-20 right-6"
      : "absolute right-6 top-20";
  const { cart, clearCart, increaseQty, decreaseQty } = useCart();

  // calculate total
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className={`${positionClass} z-[9999] w-[300px] md:w-[377px] bg-white text-black shadow-lg rounded-lg p-6`}>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold">Cart ({cart.length})</h2>
        <button
          onClick={clearCart}
          className="text-gray-500 underline hover:text-black text-sm"
        >
          Remove all
        </button>
      </div>

      {/* Items */}
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              {/* Left: Image + Info */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 relative rounded-lg overflow-hidden">
                  <Image
                    src={item.images}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold">{item.name}</p>
                  <p className="text-gray-500 text-sm">
                    ${item.price.toLocaleString()}
                  </p>
                </div>
              </div>

              {/* Right: Quantity controls */}
              <div className="flex items-center bg-gray-100">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="px-2 py-1 text-sm hover:text-red-600"
                >
                  -
                </button>
                <span className="px-3">{item.quantity}</span>
                <button
                  onClick={() => increaseQty(item.id)}
                  className="px-2 py-1 text-sm hover:text-green-600"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Total */}
      {cart.length > 0 && (
        <>
          <div className="flex justify-between mt-6">
            <p className="uppercase text-gray-500 text-sm">Total</p>
            <p className="font-bold text-lg">${total.toLocaleString()}</p>
          </div>

        <Link  href="/checkout">
          <button className="mt-6 w-full bg-red-900 text-white py-3 font-bold uppercase tracking-wide hover:bg-red-600">
            Checkout
          </button>
          </Link>
        </>
      )}
    </div>
  );
}
