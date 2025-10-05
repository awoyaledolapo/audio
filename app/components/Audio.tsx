import Image from 'next/image';
import React from 'react'


type ImageType = {
    imageSrc:string;
}

const Audio:React.FC<ImageType> = ({imageSrc}) => {
  return (
   <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Left content */}
      <div className="text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold uppercase leading-snug mb-6">
          Bringing you the{" "}
          <span className="text-red-900">best</span> audio gear
        </h2>

        <p className="text-gray-600 text-base leading-relaxed max-w-lg mx-auto md:mx-0">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>

      <div className="rounded-lg overflow-hidden w-[100%] h-[70%]">
        <Image
          src={imageSrc}
          alt="Listening to music"
          width={200}
          height={100}
          className="object-fit w-full h-full"
        />
      </div>
    </section>
  )
}

export default Audio