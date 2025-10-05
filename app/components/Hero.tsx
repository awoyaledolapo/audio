import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className="h-[95vh] w-full bg-[url('/homepage/hero-image3.jpg')] bg-cover bg-center">
     <div className=" max-w-7xl mx-auto h-full flex items-center px-[6.5rem]">
          <div className="max-w-md space-y-6">
            <p className="uppercase tracking-[8px] text-gray-400">New Product</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-red-900 ">
              XX99 MARK II <br /> HEADPHONES
            </h1>
            <p className="text-gray-400">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Link  href="/headphones">
            <button className="bg-red-900 text-white px-6 py-3 uppercase tracking-wide hover:bg-red-600 transition">
              See Product
            </button>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Hero