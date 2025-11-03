

import Link from "next/link";
import Cat from "./Cat";
import Ear from "./Ear";
import Audio from "./Audio";
import Image from "next/image";


export default function Categories() {


    return (
        <section className=" py-20 max-w-[70rem] mx-auto ">

            <Cat />
            <div className="px-6">
            <div className="relative overflow-hidden bg-[#D87D4A] lg:max-w-[60rem] xl:max-w-[67rem] md:max-w-[59rem] sm:max-w-[48rem] px-10  lg:gap-[10rem] md:gap-[5rem] mx-auto rounded-lg md:px-[10rem]   py-10 lg:flex-row md:flex-col flex items-center justify-center mt-[8rem]">
              {/* <div className="absolute w-[400px] h-[400px] border border-white/40 rounded-full -z-10"></div> */}
              <div className="lg:max-w-[410.23358154296875px] md:max-w-[210.23358154296875px] relative lg:top-[5rem] md:top-[3rem]">
                <Image width={400} height={100}  src="/homepage/svg-speak.png" alt="speaker-img"/>
              </div>
              
              
                <div className="max-w-[349px] lg:text-left  text-center">
                  
                    <div>
                    <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-[#FFFFFF] mb-6 leading-tight">
                        ZX9 <br /> SPEAKER
                    </h2>
                    <p className="text-[#FFFFFF] text-[15px] mb-8 max-w-[30rem]">
                        Upgrade to premium speakers that are phenomenally built to deliver
                        truly remarkable sound.
                    </p>
                    <Link href="/speakers">
                        <button className="bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-900 transition">
                            SEE PRODUCT
                        </button>
                        </Link>
                        </div>
                </div>
                
            </div>
</div>
            <div className="px-6">
            <div
  style={{
    backgroundImage: "url('/homepage/side.png')",
  }}
  className=" items-start lg:max-w-[60rem] xl:max-w-[68rem] md:max-w-[59rem] sm:max-w-[48rem] mx-auto rounded-lg px-10 py-20 flex  bg-cover bg-no-repeat bg-[position:100%_90%] mt-[4rem]"
>
 
  <div className=" ">
    <h1 className="text-center text-[#000000] font-semibold text-2xl mb-8">
      ZX7 SPEAKER
    </h1>
    <Link href="/speakers">
      <button className="bg-transparent border text-black px-6 py-3 hover:bg-[black]  rounded-md font-semibold hover:text-white transition">
        SEE PRODUCT
      </button>
    </Link>
  </div>
</div>

            </div>
            <Ear
                image="/homepage/style.png"
                title="YX1 EARPHONES"
                buttonText="SEE PRODUCT"
            />
            <Audio imageSrc="/homepage/bd-m.jpg" imageSrc2="/homepage/bt-md.jpg"/>

        </section>

    );
}
