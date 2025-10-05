"use client"
import { useContext, createContext, useState, ReactNode } from "react";

export type CartType = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  images: string;
};

type CartContextType = {
  cart: CartType[];
  addToCart: (item: CartType) => void;
  clearCart: () => void;
  
  
  increaseQty: (id: string) => void;
  decreaseQty: (id: string) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);
export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartType[]>([]);
  const addToCart = (item: CartType) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + item.quantity } : p
        );
      }
      return [...prev, item];
    });
  };

  const clearCart = () => setCart([]);


  const increaseQty = (id: string) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id: string) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0) 
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart, increaseQty, decreaseQty}}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
}
