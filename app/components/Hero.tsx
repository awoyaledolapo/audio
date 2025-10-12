import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className=" w-full bg-black">
      <div className=" lg:h-[75vh] xl:h-[88vh]  md:h-[95vh] h-[95vh] max-w-[1400px] mx-auto lg:bg-[url('/homepage/hero-image3.jpg')] md:bg-[url('/homepage/hero-sm.jpg')]  bg-[url('/homepage/hero-sm.jpg')] bg-cover bg-center">
     <div className=" max-w-7xl mx-auto h-full flex items-center lg:px-[6.5rem] md:px-[9rem]">
          <div className="max-w-md lg:max-w-md md:max-w-[40rem]  space-y-6 flex flex-col items-center lg:items-start ">
            <p className="uppercase tracking-[8px] text-gray-400">New Product</p>
            <h1 className="text-4xl  md:text-7xl font-bold leading-tight text-red-900 ">
              XX99 MARK II <br /> HEADPHONES
            </h1>
            <p className="text-gray-400 text-center lg:text-start md:text-2xl ">
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
    </div>
  )
}

export default Hero