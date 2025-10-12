
import Cat from '@/app/components/Cat';
import Image from 'next/image';
import { notFound } from 'next/navigation'

import ProductDetails from '@/app/components/ProductDetails';
import Audio from '@/app/components/Audio';



export default async function Page({ params }: { params: { id: string } }) {
 
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/Products/${params.id}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) return notFound();
  const data = await res.json();
  console.log(data)

  return (
    <>
      <div className=' mx-auto max-w-[1110px] lg:max-w-[1110px] md:max-w-[700px] px-3 lg:px-10 xl:px-6'>
        
        
  <ProductDetails data={data}/>

        <div className="lg:flex lg:flex-row lg:items-start lg:py-40 lg:gap-x-[7.813rem] md:px-0 px-3 lg:px-0">
          <div className="py-[5.5rem] md:py-[7.5rem] lg:p-0 lg:max-w-[635px]">
            <h2 className="uppercase text-[1.5rem] md:text-[2rem] font-bold leading-[2.25rem] tracking-[0.0535625em] pb-6 md:pb-8">Features</h2>
            <p className="text-black text-opacity-50 leading-[1.563rem] text-[0.938rem]">
              {data.features}
            </p>
          </div>

          <div className="pb-24 md:pb-[7.5rem] md:flex md:flex-row md:items-start md:justify-between md:w-[80%] lg:block">
            <h2 className="uppercase text-[1.5rem] md:text-[2rem] font-bold leading-[2.25rem] tracking-[0.0535625em] pb-6">In the box</h2>
            <div className="flex flex-col gap-y-2">
              {data.inBox.map((item: string, index: number) => (
  <div key={index} className="flex items-center gap-x-6">
    <p className="text-[0.938rem] text-red-600 leading-[1.563rem]">1x</p>
    <p className="text-[0.938rem] text-black text-opacity-50 leading-[1.563rem]">
      {item}
    </p>
  </div>
))}

            </div>
          </div>
        </div>



        <div className="flex flex-col gap-y-6 md:flex-row md:gap-x-6 md:max-h-[300px] lg:max-h-[600px] ">
          <div className="flex flex-col gap-y-6 md:basis-[30%]">



            <div className="relative h-[288px] md:w-[300px] lg:h-[310.5px] lg:w-[375px] rounded-lg">
              <Image src="/productdeet/proddeet2.avif" alt="prod" width={1000} height={60} className='object-cover w-full h-full rounded-2xl ' />
            </div>
            <div className="relative h-[288px] md:w-[300px] lg:h-[310.5px] lg:w-[375px]">
              <Image src="/productdeet/proddeet3.avif" alt="prod" width={1000} height={60} className='object-cover w-full h-full rounded-2xl ' />
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[595px] md:basis-[60%] lg:basis-auto lg:flex-1">
            <Image src="/productdeet/proddeet1.avif" alt="prod" width={600} height={60} className='object-cover w-full h-full rounded-2xl ' />
          </div>
        </div>



        <div className="pb-[7.5rem] py-24 md:pb-[10.75rem]  mt-0 md:mt-10">


          <h2 className="uppercase text-[1.5rem] md:text-[2rem] text-center font-bold leading-[2.25rem] tracking-[0.0535625em] pb-10 lg:text-[2rem]">You may also like</h2>

          <div className="flex flex-col gap-y-14 md:flex-row md:items-center md:gap-x-[0.688rem] lg:gap-x-[1.875rem]">

            <div className="flex flex-col items-center justify-center text-center flex-1">
              <div className="bg-[#f2efef] rounded-lg w-full mb-8">

                <div className="bg-[#f2efef] rounded-lg md:py-[3.875rem] md:px-[2.313rem]">
                  <div className="relative h-[130px] md:h-[225px] w-full">
                    <Image src="/this/alsolike1.avif" alt="also-like" width={600} height={200} className='object-cover w-full h-full ' />
                  </div>
                </div>
              </div>
           <p className="pb-8 text-[1.75rem] md:text-2xl font-bold leading-[normal] tracking-[0.0625em] uppercase lg:text-2xl lg:pt-10">XX59</p>
            <a href="/earphones">
              <button className="inline-flex items-center justify-center whitespace-nowrap uppercase text-[0.813rem] font-bold tracking-[0.0625em] ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300 bg-red-900 hover:bg-hit-pink text-white h-10 px-8 py-4">See Product</button>
            </a>
             </div>

             <div className="flex flex-col items-center justify-center text-center flex-1">
              <div className="bg-bg-[#f2efef] rounded-lg w-full mb-8">

                <div className="bg-[#f2efef] rounded-lg md:py-[3.875rem] md:px-[2.313rem]">
                  <div className="relative h-[130px] md:h-[225px] w-full">
                    <Image src="/this/alsolike2.avif" alt="also-like" width={600} height={200} className='object-cover w-full h-full ' />
                  </div>
                </div>
              </div>
           <p className="pb-8 text-[1.75rem] md:text-2xl font-bold leading-[normal] tracking-[0.0625em] uppercase lg:text-2xl lg:pt-10">XX99 Mark I</p>
            <a href="/headphones">
              <button className="inline-flex items-center justify-center whitespace-nowrap uppercase text-[0.813rem] font-bold tracking-[0.0625em] ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300 bg-red-900 hover:bg-hit-pink text-white h-10 px-8 py-4">See Product</button>
            </a>
             </div>

             <div className="flex flex-col items-center justify-center text-center flex-1">
              <div className="bg-[#f2efef] rounded-lg w-full mb-8">

                <div className="bg-[#f2efef] rounded-lg md:py-[3.875rem] md:px-[2.313rem]">
                  <div className="relative h-[130px] md:h-[225px] w-full">
                    <Image src="/this/alsolike3.avif" alt="also-like" width={600} height={200} className=' object-cover w-full h-full' />
                  </div>
                </div>
              </div>
           <p className="pb-8 text-[1.75rem] md:text-2xl font-bold leading-[normal] tracking-[0.0625em] uppercase lg:text-2xl lg:pt-10">ZX9 SPEAKERS</p>
            <a href="/speakers">
              <button className="inline-flex items-center justify-center whitespace-nowrap uppercase text-[0.813rem] font-bold tracking-[0.0625em] ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300 bg-red-900 hover:bg-hit-pink text-white h-10 px-8 py-4">See Product</button>
            </a>
             </div>
            
          </div>
        </div>


   <Cat/>









<Audio imageSrc="/homepage/bd-m.jpg" imageSrc2="/homepage/bt-md.jpg"/>

      </div>
    </>
  )
};


