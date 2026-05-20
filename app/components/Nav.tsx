"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { HiOutlineShoppingCart, HiMenu, HiX } from "react-icons/hi";
import CartPage from "./Cart";
import { useCart } from "../context/CardContext";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/headphones", label: "Headphones" },
  { href: "/speakers", label: "Speakers" },
  { href: "/earphones", label: "Earphones" },
];

const Nav = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cart } = useCart();
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);

  // Get total items in cart
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Close cart when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setCartOpen(false);
      }
    };
    if (cartOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [cartOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setCartOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleCartToggle = () => {
    setCartOpen((prev) => !prev);
    setMobileMenuOpen(false);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen((prev) => !prev);
    setCartOpen(false);
  };

  return (
    <>
      <nav
        ref={navRef}
        className="bg-[#131313] text-white relative z-50"
        aria-label="Main navigation"
      >
        {/* ── Main bar ── */}
        <div className="max-w-[70rem] mx-auto flex items-center justify-between px-6 lg:px-10 xl:px-6 py-6">

          {/* ── Logo ── */}
          <Link
            href="/"
            className="font-bold text-2xl tracking-tight select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded"
            aria-label="audiospace home"
          >
            audiospace
          </Link>

          {/* ── Desktop nav links (lg+) ── */}
          <ul
            className="hidden lg:flex items-center space-x-8 text-sm uppercase tracking-widest"
            role="menubar"
          >
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href} role="none">
                <Link
                  href={href}
                  role="menuitem"
                  className={`relative pb-1 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded
                    after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-red-700 after:transition-all after:duration-300
                    ${
                      pathname === href
                        ? "text-red-500 after:w-full"
                        : "hover:text-red-400 after:w-0 hover:after:w-full"
                    }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* ── Right side: Cart + Hamburger ── */}
          <div className="flex items-center gap-4">
            {/* Cart icon — visible on ALL screen sizes */}
            <button
              id="cart-toggle-btn"
              onClick={handleCartToggle}
              aria-label={`Open cart. ${totalItems} item${totalItems !== 1 ? "s" : ""} in cart`}
              aria-expanded={cartOpen}
              className="relative p-1 rounded transition-colors duration-200 hover:text-red-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
            >
              <HiOutlineShoppingCart size={26} />
              {totalItems > 0 && (
                <span
                  aria-hidden="true"
                  className="absolute -top-1.5 -right-1.5 bg-red-600 text-white text-[10px] font-bold min-w-[18px] h-[18px] flex items-center justify-center rounded-full px-0.5 leading-none"
                >
                  {totalItems}
                </span>
              )}
            </button>

            {/* Hamburger button — visible on sm and md only (< lg) */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={handleMobileMenuToggle}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              className="lg:hidden relative w-8 h-8 flex items-center justify-center rounded transition-colors duration-200 hover:text-red-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
            >
              {/* Animated icon swap */}
              <span
                className={`absolute transition-all duration-300 ${
                  mobileMenuOpen
                    ? "opacity-100 rotate-0 scale-100"
                    : "opacity-0 rotate-90 scale-75"
                }`}
                aria-hidden="true"
              >
                <HiX size={24} />
              </span>
              <span
                className={`absolute transition-all duration-300 ${
                  mobileMenuOpen
                    ? "opacity-0 -rotate-90 scale-75"
                    : "opacity-100 rotate-0 scale-100"
                }`}
                aria-hidden="true"
              >
                <HiMenu size={24} />
              </span>
            </button>
          </div>
        </div>

        {/* ── Divider ── */}
        <hr className="lg:max-w-[66rem] md:max-w-[44rem] max-w-full mx-auto opacity-20" />

        {/* ── Cart dropdown ── */}
        {cartOpen && (
          <div className="absolute right-4 top-full mt-2 z-[9999]">
            <CartPage position="inline" />
          </div>
        )}
      </nav>

      {/* ── Mobile / Tablet slide-down menu ── */}
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={() => setMobileMenuOpen(false)}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer panel */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Mobile navigation menu"
        aria-modal="true"
        className={`fixed top-0 left-0 h-full w-[280px] max-w-[85vw] bg-[#1a1a1a] z-50 lg:hidden flex flex-col shadow-2xl
          transition-transform duration-300 ease-in-out
          ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="font-bold text-2xl tracking-tight text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded"
            aria-label="audiospace home"
          >
            audiospace
          </Link>
          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
            className="p-1 rounded text-white/70 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
          >
            <HiX size={22} />
          </button>
        </div>

        {/* Nav links */}
        <nav aria-label="Mobile navigation" className="flex-1 px-6 py-8">
          <ul className="flex flex-col gap-1" role="menu">
            {NAV_LINKS.map(({ href, label }, i) => (
              <li key={href} role="none">
                <Link
                  href={href}
                  role="menuitem"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ transitionDelay: mobileMenuOpen ? `${i * 60}ms` : "0ms" }}
                  className={`flex items-center w-full px-4 py-3.5 rounded-lg text-sm uppercase tracking-widest font-medium
                    transition-all duration-200
                    ${
                      pathname === href
                        ? "bg-red-900/40 text-red-400 border-l-2 border-red-500 pl-[calc(1rem-2px)]"
                        : "text-white/80 hover:bg-white/5 hover:text-white border-l-2 border-transparent hover:border-red-700"
                    }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Drawer footer */}
        <div className="px-6 pb-8 border-t border-white/10 pt-6">
          <p className="text-white/30 text-xs uppercase tracking-widest">
            audiospace © 2025
          </p>
        </div>
      </div>
    </>
  );
};

export default Nav;
