"use client"

import Link from "next/link"
import { useProducts } from "../context/ProductContext"
import SharedHeader from "../components/SharedHeader"
import Cat from "../components/Cat"
import Audio from "../components/Audio"
import Image from "next/image"

const Page = () => {
  const {products,loading}= useProducts()

  const earphones= products.filter(p=> p.category==="earphones")
  
     if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-red-900 border-t-transparent"></div>
      </div>
    )
  }

  return (
    <div>
         <SharedHeader Header="EARPHONES" />
      <div className="max-w-[75rem] mx-auto">
        <div className="space-y-20 py-10 bg-white">
          {earphones.map((product, index) => (
            <div
              key={product.id}
              className={`flex flex-col md:flex-row items-center justify-center gap-[3rem] md:px-10 mt-10 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Product Image */}
              <div className="w-full md:w-1/2 flex justify-center">
                <Image
                  src={product.image || "/placeholder.png"}
                  alt={product.name}
                  className="rounded-lg shadow-lg max-w-[18rem] lg:max-w-[31rem] md:max-w-[31rem] xl:max-w-[31rem] object-cover"
                   width={600}
                                height={0}
                />
              </div>

              {/* Product Details */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h2 className="text-3xl max-w-[26rem] md:max-w-[30rem] lg:max-w-[30rem] md:text-4xl font-bold mb-4">
                  {product.name}
                </h2>
                <p className="text-gray-600 mb-6">{product.info}</p>

                <Link href={`/products/${product.id}`}>
                  <button className="bg-red-900 hover:bg-red-800 text-white px-6 py-3 rounded-md font-semibold">
                    Go to Product
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
 <div className="mt-[10rem]">
   <Cat/>
   </div> 
   <Audio imageSrc="/homepage/bd-m.jpg" imageSrc2="/homepage/bt-md.jpg"/>
    </div>
  )
}

export default Page