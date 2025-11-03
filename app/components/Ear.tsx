import React from 'react'
import Image from "next/image";
import Link from 'next/link';
type ProductCardProps = {
  image: string;
  title: string;
  buttonText?: string;
};
const Ear  = ({image,title,buttonText}:ProductCardProps) => {
  return (
    <div className=" max-w-[68rem] mx-auto flex flex-col lg:flex-row gap-[10rem] items-center px-6 sm:px-6 md:px-6 xl:px-2 mt-[4rem] lg:px-10 ">
   
      
<div className="flex flex-col gap-y-6 md:flex-row md:items-stretch md:gap-x-4">
<div className="lg:w-[540px] xl:w-[540px] ">
 <Image
          src={image}
          alt={title}
          width={1200}
          height={100}
          className="object-cover w-full h-full rounded-lg"
        />
</div>
<div className="bg-[#F1F1F1] rounded-lg  lg:w-[410px] xl:w-[520px] px-[4.5rem] py-10">
<p className="uppercase text-black text-[1.75rem] font-bold tracking-[0.125em] pb-8  relative">YX1 <br/> Earphones</p>
<a href="/earphones/yx1-earphones">
<button className="inline-block border border-black px-6 py-2 text-sm font-medium uppercase tracking-wide transition hover:bg-[black] hover:text-white">
          {buttonText}
        </button>
        </a>
</div>

</div>
     
    </div>
  );
};



export default Ear


   
     