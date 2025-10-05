import { NextResponse } from "next/server";

import { ProductDetailsType} from "../types/ProductDetails";

const productDetails: ProductDetailsType[] = [
  {
    id: "1",
    name: "XX99 MARK II HEADPHONES",
    category: "headphones",
    price: 2199,
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    images: "/product/pro1.avif",
    specs: {
      batteryLife: "20 hours",
      connectivity: "Bluetooth 5.0",
      weight: "250g",
    },
features: `The XX99 Mark II offers an uncompromising listening experience with precision-engineered drivers that deliver deep bass, clear mids, and sparkling highs. The lightweight carbon fiber frame ensures durability without sacrificing comfort for long listening sessions.  
Whether you are in the studio, on stage, or at home, the XX99 Mark II adapts to your lifestyle with premium memory foam cushions and a noise-isolating design. With a detachable cable system, portability and flexibility are guaranteed for any situation.`,
    inBox: [
      "Headphone unit",
      "Replacement earcups",
      "User manual",
      "3.5mm audio cable",
      "Travel bag",
    ],
  },
  {
    id: "2",
    name: "Studio Headphones",
    category: "headphones",
    price: 1149,
    description:
      "Designed for professionals and enthusiasts, these studio headphones deliver crystal-clear sound and balanced tones, perfect for mixing and monitoring.",
    images: "/product/pro2.jpg",
    specs: {
      batteryLife: "30 hours",
      connectivity: "Bluetooth 5.2 / Wired",
      weight: "270g",
    },
   features: `The XX99 Mark I is engineered for listeners who value warmth and clarity in every note. Its custom-tuned 50mm drivers reproduce a wide frequency range with accurate sound reproduction, making it ideal for both casual listening and professional use.  
Built with a robust aluminum frame, the Mark I is designed to last while maintaining a comfortable over-ear fit. The balanced sound profile makes it suitable for all genres, from classical to electronic, ensuring a versatile listening experience.`,
    inBox: ["Headphone unit", "Detachable cable", "User manual", "Carrying case"],
  },
  {
    id: "3",
    name: " XX59 Gaming Headphones",
    category: "headphones",
    price: 1129,
    description:
      "Engineered for immersive gameplay, these gaming headphones provide spatial surround sound, low-latency audio, and a noise-canceling microphone.",
    images: "/product/pro3.jpg",
    specs: {
      batteryLife: "25 hours",
      connectivity: "2.4GHz Wireless / Bluetooth",
      weight: "310g",
    },
    features: `The XX59 is the perfect entry point for audiophiles on a budget. With carefully tuned 40mm drivers, it delivers a clean, balanced sound that makes your favorite tracks shine.  
The lightweight design combined with breathable ear cushions ensures long-lasting comfort, whether you’re studying, commuting, or relaxing at home. Compact and reliable, the XX59 offers a great balance between portability and performance.`,
    inBox: ["Headphone unit", "USB wireless dongle", "Charging cable", "Mic attachment"],
  },
  {
    id: "4",
    name: "Noise Cancelling Earphones",
    category: "earphones",
    price: 299,
    description:
      "The YX1 Wireless Earphones combine sleek design with cutting-edge performance. Enjoy crystal-clear sound, enhanced noise isolation, and wireless freedom.",
    images: "/product/earphone1.webp",
    specs: {
      batteryLife: "15 hours (with case)",
      connectivity: "Bluetooth 5.1",
      weight: "50g (with case)",
    },
        features: `The YX1 earphones are designed for maximum convenience without compromising on sound quality. With Bluetooth 5.0 connectivity, they deliver seamless wireless performance and low-latency playback.  
Featuring a sleek in-ear design with silicone tips, the YX1 ensures a secure and comfortable fit for extended wear. The charging case provides up to 24 hours of total playback, making it perfect for daily commutes, workouts, or travel.`,
    inBox: ["Earphones", "Charging case", "Ear tips (3 sizes)", "USB-C cable", "User manual"],
  },
  {
    id: "5",
    name: "AX5 Sport Earphones",
    category: "earphones",
    price: 389,
    description:
      "Built for fitness enthusiasts, Sport Earphones deliver punchy bass, sweat resistance, and a secure fit for active lifestyles.",
    images: "",
    specs: {
      batteryLife: "12 hours",
      connectivity: "Bluetooth 5.0",
      weight: "45g",
    },
    features: `The AX5 Sport Earphones are designed with fitness enthusiasts in mind. With IPX7 water and sweat resistance, they can handle intense workouts, outdoor runs, and even rainy conditions without skipping a beat.  
Equipped with ergonomic ear hooks and soft silicone tips, the AX5 ensures a secure and comfortable fit during movement. Bluetooth 5.0 provides stable wireless connectivity, while the 10-hour battery life with quick charge support keeps your music going through every session.`,
    inBox: ["Earphones", "Charging cable", "Ear tips", "Carrying pouch"],
  },
  {
    id: "6",
    name: " PX1 Wireless Earphones",
    category: "earphones",
    price: 179,
    description:
      "Affordable and stylish wireless earphones offering reliable sound quality and long-lasting comfort for daily use.",
    images: "",
    specs: {
      batteryLife: "18 hours (with case)",
      connectivity: "Bluetooth 5.2",
      weight: "48g",
    },
    features: `The PX1 uses advanced hybrid noise-cancellation technology to eliminate ambient sounds, allowing you to focus entirely on your music. With high-resolution drivers, it delivers studio-quality audio across all frequencies.  
Its plush ear cups and adjustable headband make long listening sessions comfortable. With up to 30 hours of battery life and fast-charging capability, the PX1 is the perfect companion for both travel and work.`,
    inBox: ["Earphones", "Charging case", "USB-C cable", "User manual"],
  },
  {
    id: "7",
    name: "ZX9 Portable Speaker",
    category: "speakers",
    price: 2529,
    description:
      "The ZX9 Portable Speaker delivers room-filling sound with deep bass and crisp highs, built for both indoor and outdoor experiences.",
    images: "/product/speaker1.webp",
    specs: {
      batteryLife: "24 hours",
      connectivity: "Bluetooth 5.1, AUX, USB",
      weight: "1.2kg",
    },
    features: `The ZX9 speaker system is crafted for those who demand a true high-fidelity experience. With dual subwoofers and advanced acoustic engineering, it delivers breathtaking low-end impact while maintaining clarity across the mid and high ranges.  
Encased in a sleek cylindrical cabinet, the ZX9 blends seamlessly into any modern living space. Wireless connectivity, multi-room pairing, and touch-sensitive controls elevate it beyond a standard speaker, offering convenience and style in equal measure.`,
    inBox: ["Speaker unit", "Charging cable", "AUX cable", "User manual"],
  },
  {
    id: "8",
    name:  " ZX7 Smart Speaker",
    category: "speakers",
    price: 3399,
    description:
      "A smart home hub with immersive audio quality and built-in voice assistant support, perfect for managing your daily tasks.",
    images: "/product/speaker2.webp",
    specs: {
      batteryLife: "12 hours",
      connectivity: "WiFi, Bluetooth 5.0",
      weight: "1kg",
    },
   features: `The ZX7 speaker combines powerful audio output with understated elegance. Featuring a precision-tuned woofer and tweeter system, it provides a rich sound signature suitable for both music and movies.  
Wrapped in a refined matte finish, the ZX7 adds sophistication to your room while delivering an immersive audio experience. Its versatile inputs and Bluetooth connectivity allow you to easily integrate it with any setup.`,
    inBox: ["Smart speaker", "Power adapter", "Quick start guide"],
  },
  {
    id: "9",
    name: "Mini Speaker",
    category: "speakers",
    price: 2159,
    description:
      "Compact yet powerful, this mini speaker is perfect for personal listening, travel, or small gatherings.",
    images: "",
    specs: {
      batteryLife: "10 hours",
      connectivity: "Bluetooth 5.0, AUX",
      weight: "300g",
    },
    features:
       `The QX2 is a rugged, portable Bluetooth speaker designed for adventure. With waterproof and dustproof certification, it’s perfect for the beach, hiking, or outdoor parties.  
Despite its small size, it delivers surprisingly powerful sound with enhanced bass and clear vocals. The built-in battery provides up to 12 hours of playback, and the integrated microphone allows hands-free calls with ease.`,

    inBox: ["Mini speaker", "Charging cable", "User manual"],
  },
];
export async function GET(req: Request, { params }: { params: { id: string } }) {
  const product = productDetails.find((p) => p.id === params.id); 

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(product);
}

