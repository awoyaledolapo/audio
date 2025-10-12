import { NextResponse } from "next/server";
import { ProductType } from "./types/product";
 


const products:ProductType [] = [
  { id: "1", name: "XX99 MARK II HEADPHONES",image:"/product/pro1.avif", category: "headphones",info:"The new XX99 Mark II headphones is the pinnacle of pristine audio.it redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound"},
  { id: "2", name: "Studio Headphones",image:"/product/pro2.jpg",  category: "headphones" ,info:"The new XX99 Mark II headphones is the pinnacle of pristine audio.it redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound"},
  { id: "3", name: "Gaming Headphones",image:"/product/pro3.jpg",  category: "headphones",info:"The new XX99 Mark II headphones is the pinnacle of pristine audio.it redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound"},
  
  { id: "4", name: "Noise Cancelling Earphones",image:"/product/earphone1.webp",  category: "earphones",info: "The new YX1 Wireless Earphones combine sleek design with cutting-edge performance. Enjoy crystal-clear sound, enhanced noise isolation, and the freedom of true wireless connectivity in a compact form made for everyday use."
},
  { id: "5", name: "Sport Earphones",image:"",  category: "earphones" ,info: "The new YX1 Wireless Earphones combine sleek design with cutting-edge performance. Enjoy crystal-clear sound, enhanced noise isolation, and the freedom of true wireless connectivity in a compact form made for everyday use."
},
  { id: "6", name: "Wireless Earphones",image:"",  category: "earphones", info: "The new YX1 Wireless Earphones combine sleek design with cutting-edge performance. Enjoy crystal-clear sound, enhanced noise isolation, and the freedom of true wireless connectivity in a compact form made for everyday use."
}   ,
  
  { id: "7", name: "Portable Speaker",image:"/product/speaker1.webp",  category: "speakers",  info: "The ZX9 Speaker delivers room-filling sound with deep bass and crystal-clear highs. Designed with modern aesthetics and powerful drivers, it transforms any space into an immersive audio experience." },
  { id: "8", name: "Smart Speaker",image:"/product/speaker2.webp",  category: "speakers",  info: "The ZX9 Speaker delivers room-filling sound with deep bass and crystal-clear highs. Designed with modern aesthetics and powerful drivers, it transforms any space into an immersive audio experience."},
  { id: "9", name: "Mini Speaker",image:"",  category: "speakers", info: "The ZX9 Speaker delivers room-filling sound with deep bass and crystal-clear highs. Designed with modern aesthetics and powerful drivers, it transforms any space into an immersive audio experience."}
];

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");

  if (category) {
    const filtered = products.filter((p) => p.category === category);
    return NextResponse.json(filtered);
  }

  return NextResponse.json(products);
}