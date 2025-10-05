import React from 'react'

import { HiArrowNarrowRight } from "react-icons/hi";

    const categories = [
        {
            name: "Headphones",
            image: "/homepage/og3.webp",
            link: "/headphones",
        },
        {
            name: "Speakers",
            image: "/homepage/og1.webp",
            link: "/speakers",
        },
        {
            name: "Earphones",
            image: "/homepage/og2.webp",
            link: "/earphones",
        },
    ];
export default function Cat() {
  return (
    <div className="max-w-[70rem] mx-auto grid gap-8 md:grid-cols-3 px-6 mb-10">
                {categories.map((cat) => (
                    <div
                        key={cat.name}
                        className="bg-white rounded-lg flex flex-col items-center justify-end relative pt-24 pb-6 shadow-2xl"
                    >

                        <div className="absolute -top-12 flex flex-col items-center">
                            <img
                                src={cat.image}
                                alt={cat.name}
                                className="w-40 object-contain relative z-10"
                            />

                            <div className="w-28 h-3 bg-black/20 rounded-full blur-md -mt-2"></div>
                        </div>


                        <h3 className="mt-12 font-bold text-lg uppercase">{cat.name}</h3>


                        <a
                            href={cat.link}
                            className="flex items-center gap-2 mt-2 text-gray-500 uppercase text-sm tracking-widest hover:text-red-900"
                        >
                            Shop <HiArrowNarrowRight />
                        </a>
                    </div>

                ))}
            </div>
  )
}
