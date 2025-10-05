"use client"

import {useContext,createContext,useEffect,useState} from 'react'
import { ProductType } from '../api/Products/types/product'
 
type  ProductContextType={

    products:ProductType,
    loading:boolean
}

const  ProductsContext= createContext<ProductContextType>({
      products:[],
      loading:true
})
export const ProductProvider = ({ children }: { children: React.ReactNode }) => {

     const [products, setProducts] = useState<ProductType>([]) 
  const [loading, setLoading] = useState(true) 
  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch("/api/Products")
        const data = await res.json()
        setProducts(data)
      } catch (err) {
        console.error("Error fetching products:", err)
      } finally {
        setLoading(false) 
      }
    }
    fetchProduct()
  }, [])

  return (
     <ProductsContext.Provider value={{ products, loading }}>
      {children}
    </ProductsContext.Provider>
  )
}
export const useProducts = () => useContext(ProductsContext)
