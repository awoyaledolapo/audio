import React from 'react'
import Image from "next/image";
import Link from 'next/link';
type ProductCardProps = {
  image: string;
  title: string;
  buttonText?: string;
};
const Ear :React.FC<ProductCardProps> = ({image,title,buttonText}) => {
  return (
    <div className=" max-w-[68rem] mx-auto flex gap-10 items-center mt-10 ">
      
      <div className="rounded-lg overflow-hidden w-[66%]">
        <Image
          src={image}
          alt={title}
          width={200}
          height={0}
          className="object-cover w-full h-full"
        />
      </div>

  
      <div className="flex flex-col justify-center bg-gray-100 rounded-lg py-34 px-38">
        <div className='max-w-[20rem]'>
        <h2 className="text-2xl font-bold mb-6 ">{title}</h2>
        <Link  href="/earphones">
        <button className="inline-block border border-black px-6 py-2 text-sm font-medium uppercase tracking-wide transition hover:bg-red-900 hover:text-white">
          {buttonText}
        </button>
        </Link>
        </div>
      </div>
      
     
    </div>
  );
};




export default Ear