import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className=" w-full bg-[#131313]">
      <div className="  max-w-[1400px] mx-auto  ">
     <div className=" max-w-7xl mx-auto h-full flex items-center justify-center lg:px-[6.5rem] md:px-[9rem]  lg:py-0 md:py-40 z-30 lg:bg-none  bg-cover bg-center md:bg-[url('/homepage/bg-md.png')]  ">
          <div className=" max-w-md lg:max-w-md md:max-w-[40rem]  space-y-6 flex flex-col items-center lg:items-start m-0 ">
            <p className="uppercase tracking-[8px] text-[#FFFFFF] m-0">New Product</p>
            <h1 className="text-[56px]  font-bold leading-tight text-[#FFFFFF] m-0 ">
              XX99 MARK II <br  /> HEADPHONES
            </h1>
            <p className="text-[#FFFFFF] text-center lg:text-start md:text-center text-[15px] max-w-[350px]  ">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Link  href="/headphones">
            <button className="bg-[#D87D4A] font-[700] text-white px-6 py-3 uppercase tracking-wide hover:bg-[#FBAF85] transition lg:text-[13px]">
              See Product
            </button>
            </Link>
          </div>
          <div className=' overflow-hidden  lg:inline-block hidden '>
            <Image src="/homepage/Bitmap.png" alt="hero-image"width={600} height={100} className="scale-100" />
          </div>
        </div>
        </div>
    </div>
  )
}

export default Hero