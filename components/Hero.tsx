"use client";

import { useState, useEffect } from "react";

// Excluded: Hero 5, 11, 14. Last 4 images shown first.
const HERO_IMAGES = [
  // Frame 1 (first grid)
  "/images/transform-tennis/Gallery alt 3.jpeg",
  "/images/transform-tennis/Gallery alt 6.jpeg",
  "/images/transform-tennis/Camp 1.jpeg",
  "/images/transform-tennis/Camp 3.jpeg",
  // Frame 2
  "/images/transform-tennis/Hero 1.jpeg",
  "/images/transform-tennis/Hero 2.jpeg",
  "/images/transform-tennis/Hero 3.jpeg",
  "/images/transform-tennis/Hero 4.jpeg",
  // Frame 3
  "/images/transform-tennis/Hero 6.jpeg",
  "/images/transform-tennis/Hero 7.jpeg",
  "/images/transform-tennis/Hero 8.jpeg",
  "/images/transform-tennis/Hero 9.jpeg",
  // Frame 4
  "/images/transform-tennis/Hero 10.jpeg",
  "/images/transform-tennis/Hero 12.jpeg",
  "/images/transform-tennis/Hero 13.jpeg",
  "/images/transform-tennis/Hero 15.jpeg",
];

// Split into groups of 4 for collage frames
function chunkArray(arr: string[], size: number): string[][] {
  const chunks: string[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

const COLLAGE_FRAMES = chunkArray(HERO_IMAGES, 4);

export default function Hero() {
  const [activeFrame, setActiveFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFrame((prev) => (prev + 1) % COLLAGE_FRAMES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-[calc(100vh-80px)] mt-[80px] relative flex items-center justify-center text-center px-4 w-full overflow-hidden">
      {/* Collage frames stacked on top of each other */}
      {COLLAGE_FRAMES.map((images, frameIdx) => (
        <div
          key={frameIdx}
          className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-[2px]"
          style={{
            opacity: frameIdx === activeFrame ? 1 : 0,
            transition: "opacity 1.2s ease-in-out",
          }}
        >
          {images.map((src, imgIdx) => (
            <div key={imgIdx} className="relative overflow-hidden">
              <img
                src={src}
                alt={`Tennis academy ${frameIdx * 4 + imgIdx + 1}`}
                className="w-full h-full object-fill"
                loading={frameIdx === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Text content */}
      <div className="relative z-20 flex flex-col items-center w-full max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-[70px] font-black tracking-tighter leading-[1.1] mb-6 uppercase text-white drop-shadow-2xl">
          THE TRANSFORM ACADEMY,<br /> THE ULTIMATE<br /> TENNIS EXPERIENCE
        </h1>
        <div className="mt-4 bg-white text-black px-6 py-2 text-sm font-bold uppercase tracking-widest shadow-xl">
          Bengaluru, India
        </div>
      </div>
    </section>
  );
}