

import Link from "next/link";
import Cat from "./Cat";
import Ear from "./Ear";
import Audio from "./Audio";
import Image from "next/image";


export default function Categories() {


    return (
        <section className=" py-20 max-w-[70rem] mx-auto">

            <Cat />
            <div className="max-w-[60rem] mx-auto rounded-lg px-6 py-16 lg:flex-row flex-col-reverse flex items-center justify-start bg-no-repeat bg-right md:bg-contain lg:mb-0 ">
                <div className="max-w-[70rem] lg:text-left  text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-red-900 mb-6 leading-tight">
                        ZX9 <br /> SPEAKER
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-[30rem]">
                        Upgrade to premium speakers that are phenomenally built to deliver
                        truly remarkable sound.
                    </p>
                    <Link href="/speakers">
                        <button className="bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-900 transition">
                            SEE PRODUCT
                        </button></Link>
                </div>
                <div>

                    <Image src="/homepage/og1.webp" alt="speaker" width={400} height={0}/>
                </div>
            </div>

            <div className="px-6">
            <div style={{
                backgroundImage: "url('/homepage/line2.jpg')",
            }} className="lg:max-w-[60rem] xl:max-w-[68rem] md:max-w-[59rem] sm:max-w-[48rem]  mx-auto rounded-lg  px-10 py-20 flex items-center justify-start bg-no-repeat bg-cover bg-center">
                <div>
                    <h1 className="text-center  text-amber-50 font-semibold text-2xl mb-3">

                        ZX7 SPEAKER
                    </h1>
                    <Link href="/speakers">
                        <button className="bg-gray-50 text-black px-6  py-3 hover:bg-red-900  rounded-md font-semibold  hover:text-white  transition">
                            SEE PRODUCT
                        </button>
                    </Link>
                </div>
            </div>
            </div>
            <Ear
                image="/homepage/ear.jpg"
                title="YX1 EARPHONES"
                buttonText="SEE PRODUCT"
            />
            <Audio imageSrc="/homepage/bd-m.jpg" imageSrc2="/homepage/bt-md.jpg"/>

        </section>

    );
}
