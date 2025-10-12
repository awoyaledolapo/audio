"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { HiOutlineShoppingCart } from "react-icons/hi";
import CartPage from './Cart';
import { useCart } from '../context/CardContext';

const Nav = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const { cart } = useCart();

  // Get total items in cart
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-black text-white ">
      <div className="max-w-[70rem] mx-auto flex items-center justify-between px-6 lg:px-10 xl:px-6 py-6 ">
       
        <div className="font-bold text-2xl ">audiospace</div>

       
        <ul className="hidden md:flex space-x-8 text-sm uppercase tracking-widest">
          <li>
            <Link href="/" className="hover:text-red-900">Home</Link>
          </li>
          <li>
            <Link href="/headphones" className="hover:text-red-900">Headphones</Link>
          </li>
          <li>
            <Link href="/speakers" className="hover:text-red-900">Speakers</Link>
          </li>
          <li>
            <Link href="/earphones" className="hover:text-red-900">Earphones</Link>
          </li>
        </ul>

        {/* Cart icon with badge */}
        <button
          onClick={() => setCartOpen(!cartOpen)}
          className="relative hidden md:block lg:block"
        >
          <HiOutlineShoppingCart size={28} />

          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {totalItems}
            </span>
          )}
        </button>

       {cartOpen && <CartPage position="top" />}
      </div>
    </nav>
  )
}

export default Nav
