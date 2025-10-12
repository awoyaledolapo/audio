"use client"
import Link from "next/link";
import { FaHouse, FaHeadphones, FaVolumeHigh, FaEarListen, FaCartShopping } from "react-icons/fa6";
import { useCart } from "../context/CardContext";
import { useEffect, useState } from "react";
import CartPage from "./Cart";

export default function BottomNav() {
   const [cartOpen, setCartOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const { cart } = useCart();
    useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/30 backdrop-blur-md  shadow-md block sm:hidden z-50">
      <div className="flex justify-between items-center px-6 py-3 text-gray-600">
       <Link href="/"> <button className="text-red-900">
          <FaHouse size={24} />
        </button>
</Link>

<Link href="/headphones">
        <button className="hover:text-red-900">
          <FaHeadphones size={24} />
        </button>
</Link>
<Link href="/speakers">
        <button className="hover:text-blue-600">
          <FaVolumeHigh size={24} />
        </button>
</Link>
<Link href="/earphones">
        <button className="hover:text-blue-600">
          <FaEarListen size={24} />
        </button>
        </Link>
      
       <button  onClick={() => setCartOpen(!cartOpen )} className="text-red-900">
          <FaCartShopping size={24} />
          {totalItems > 0 && (
            <span className="absolute top-[1] right-[2] bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {totalItems}
            </span>
          )}
        </button>
       {cartOpen && <CartPage position="bottom" />}

      </div>
    </nav>
  );
}



        