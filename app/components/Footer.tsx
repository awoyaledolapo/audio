import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white  ">
      <div className="max-w-[70rem] mx-auto px-6 py-12 space-y-8">
       
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 border-b border-gray-700 pb-8">
          <div className="font-bold text-xl">audiophile</div>
          <ul className="flex flex-col md:flex-row gap-6 uppercase tracking-widest text-sm">
            <li><Link href="/" className="hover:text-red-900">Home</Link></li>
            <li><Link href="/headphones" className="hover:text-red-900">Headphones</Link></li>
            <li><Link href="/speakers" className="hover:text-red-900">Speakers</Link></li>
            <li><Link href="/earphones" className="hover:text-red-900">Earphones</Link></li>
          </ul>
        </div>

        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <p className="text-gray-400 md:max-w-lg text-sm leading-relaxed">
            Audiophile is an all in one stop to fulfill your audio needs.
            We&apos;re a small team of music lovers and sound specialists
            who are devoted to helping you get the most out of personal audio.
            Come and visit our demo facility - we&apos;re open 7 days a week.
          </p>

          <div className="flex space-x-6 text-2xl">
            <a href="#" className="hover:text-red-900"><FaFacebookF /></a>
            <a href="#" className="hover:text-red-900"><FaTwitter /></a>
            <a href="#" className="hover:text-red-900"><FaInstagram /></a>
          </div>
        </div>

        
        <div className="text-gray-500 text-xs">
         Scavomighty Copyright 2025. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
