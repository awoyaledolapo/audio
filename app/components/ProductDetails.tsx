"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import { useCart } from '../context/CardContext';
import { ProductDetailsType } from '../api/Products/types/ProductDetails';
import CartModal from './CartModal';
import { useRouter } from "next/navigation"
const ProductDetails = ({data}:{data:ProductDetailsType}) => {
     const { addToCart } = useCart();
     const [quantity, setQuantity] = useState(1);
     const [count,setCount]=useState(1)
     const [isModalOpen, setModalOpen] = useState(false);
     const router=useRouter()

  const increaseQty = () =>{setQuantity((prev) => prev + 1) , setCount((prev) => prev + 1);}
  const decreaseQty = () =>{
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1)),setCount((prev) => prev - 1);}

    const handleCart=()=>{
    addToCart({...data, quantity}),
    setModalOpen(true)
    }
  return (
    <div className=" max-w-[68rem] mx-auto md:px-0 px-3 lg:px-0  ">
    <button
       onClick={()=>router.back()}
          className="text-gray-500 hover:text-black mb-6 mt-10 "
        >
          Go Back
        </button>
        <div className='flex  flex-col lg:flex-row xl:flex-row md:flex-row  '>
          <div className="relative h-[327px] md:h-[390px] md:w-[281px] lg:h-[560px] lg:w-[540px]">
            <Image
              src={data.images}
              alt={data.name}
              width={600}
              height={10}
              className="w-full h-full object-cover "
            />

          </div>
          <div className="md:py-[2.813rem] md:pl-[4.375rem] lg:pl-[7.813rem] mt-10 lg:mt-0 md:mt-0">

            <h1 className="text-3xl md:text-4xl font-bold uppercase mb-10 max-w-[10rem]">
              {data.name}
            </h1>
            <p className="text-gray-600 max-w-[30rem] mb-10">{data.description}</p>
            <p className="text-2xl font-semibold mb-10">$ {data.price.toLocaleString()}</p>


            <div className="flex items-center gap-4">
              <div className="flex items-center border border-gray-300">
                <button onClick={decreaseQty} className="px-3 py-2">-</button>
                <span className="px-4">{count}</span>
                <button onClick={increaseQty}  className="px-3 py-2">+</button>
              </div>
              <button className="bg-red-900 text-white px-6 py-3 font-semibold hover:bg-red-700" onClick={handleCart}>
                Add to Cart
              </button>
            </div>
          </div>
            <CartModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        </div>
    </div>
  )
}

export default ProductDetails