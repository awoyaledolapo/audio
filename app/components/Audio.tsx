import Image from 'next/image';
import React from 'react'


type ImageType = {
  imageSrc: string;
  imageSrc2:string
}

const Audio: React.FC<ImageType> = ({ imageSrc,imageSrc2 }) => {
  return (
    <section className="text-center py-[4rem] px-6 mx-auto max-w-[1110px] lg:flex lg:flex-row-reverse lg:items-center lg:justify-between mt-[8rem]">
   
<div className="rounded-lg overflow-hidden w-[100%] h-[30%] md:w-[100%] sm:w-[100%] xl:w-[50%] lg:w-[50%] flex md:justify-center md:self-center  ">
        <Image
          src={imageSrc}
          alt="Listening to music"
          width={200}
          height={100}
          className="object-fit w-full h-full hidden lg:block"
        />
        <Image
          src={imageSrc2}
          alt="Listening to music"
          width={200}
          height={100}
          className="object-fit w-full h-full lg:hidden md:block"
        />
      </div>

      <div className="lg:max-w-[445px]">
        <p className="py-8 uppercase text-[40px] leading-[normal] font-bold tracking-[0.0625em] md:text-[2.5rem] md:px-8 md:pt-12 lg:px-0 lg:pt-0">
          Bringing You The  
          <span className="text-[#D87D4A]"> Best</span> Audio Gear</p>
        <p className="text-opacity-50 leading-[1.5625em] text-[0.938rem] text-black md:px-10 lg:px-0">
          Located at the heart of New York City, Audiophile is the premier store for high end headphones, 
          earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms
           available for you to browse and experience a wide range of our products. Stop by our store to meet
            some of the fantastic people who make Audiophile the best place to buy your portable audio 
            equipment.</p>

      </div>
      
    </section>
  )
}

export default Audio
