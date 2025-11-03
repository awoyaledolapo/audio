import type { Metadata } from "next";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { ProductProvider } from "./context/ProductContext"
import { Manrope } from "next/font/google";
import { ConvexClientProvider } from "./ConvexClientProvider";
import { CartProvider } from "./context/CardContext";
import BottomNav from "./components/BottomNav";

const manrope = Manrope({ subsets: ["latin"], weight: ["400","500","700"] });


export const metadata: Metadata = {
  title: "audiospace",
  description: "an ecommrce website for anything audio",
  manifest:"/manifest.json"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       className={manrope.className}
      >
        <ConvexClientProvider>
         <ProductProvider>
      <CartProvider>
        <Nav /> 
         {children}
       <BottomNav/> 
      </CartProvider>
    </ProductProvider>
    
    <Footer/>
    </ConvexClientProvider>
      </body>
    </html>
  );
}
