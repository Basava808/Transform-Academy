"use client";

import { useState, useEffect, useCallback } from "react";

// All hero images for mobile single-image carousel
const ALL_IMAGES = [
  "/images/transform-tennis/Gallery alt 3.jpeg",
  "/images/transform-tennis/Gallery alt 6.jpeg",
  "/images/transform-tennis/Camp 1.jpeg",
  "/images/transform-tennis/Camp 3.jpeg",
  "/images/transform-tennis/Hero 1.jpeg",
  "/images/transform-tennis/Hero 2.jpeg",
  "/images/transform-tennis/Hero 3.jpeg",
  "/images/transform-tennis/Hero 4.jpeg",
  "/images/transform-tennis/Hero 6.jpeg",
  "/images/transform-tennis/Hero 7.jpeg",
  "/images/transform-tennis/Hero 8.jpeg",
  "/images/transform-tennis/Hero 9.jpeg",
  "/images/transform-tennis/Hero 10.jpeg",
  "/images/transform-tennis/Hero 12.jpeg",
  "/images/transform-tennis/Hero 13.jpeg",
  "/images/transform-tennis/Hero 15.jpeg",
];

// Desktop collage frames: portrait (3 in a row), landscape (2x2 grid)
interface HeroFrame {
  type: "portrait" | "landscape";
  images: string[];
}

const HERO_FRAMES: HeroFrame[] = [
  {
    type: "landscape",
    images: [
      "/images/transform-tennis/Gallery alt 3.jpeg",
      "/images/transform-tennis/Gallery alt 6.jpeg",
      "/images/transform-tennis/Camp 1.jpeg",
      "/images/transform-tennis/Camp 3.jpeg",
    ],
  },
  {
    type: "portrait",
    images: [
      "/images/transform-tennis/Hero 3.jpeg",
      "/images/transform-tennis/Hero 6.jpeg",
      "/images/transform-tennis/Hero 9.jpeg",
    ],
  },
  {
    type: "landscape",
    images: [
      "/images/transform-tennis/Hero 1.jpeg",
      "/images/transform-tennis/Hero 2.jpeg",
      "/images/transform-tennis/Hero 4.jpeg",
      "/images/transform-tennis/Hero 7.jpeg",
    ],
  },
  {
    type: "portrait",
    images: [
      "/images/transform-tennis/Hero 8.jpeg",
      "/images/transform-tennis/Hero 10.jpeg",
      "/images/transform-tennis/Hero 12.jpeg",
    ],
  },
  {
    type: "landscape",
    images: [
      "/images/transform-tennis/Hero 13.jpeg",
      "/images/transform-tennis/Hero 15.jpeg",
      "/images/transform-tennis/Gallery alt 3.jpeg",
      "/images/transform-tennis/Gallery alt 6.jpeg",
    ],
  },
];

export default function Hero() {
  const [activeFrame, setActiveFrame] = useState(0);
  const [activeMobile, setActiveMobile] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const totalSlides = isMobile ? ALL_IMAGES.length : HERO_FRAMES.length;

  const next = useCallback(() => {
    if (isMobile) {
      setActiveMobile((prev) => (prev + 1) % ALL_IMAGES.length);
    } else {
      setActiveFrame((prev) => (prev + 1) % HERO_FRAMES.length);
    }
  }, [isMobile]);

  const prev = useCallback(() => {
    if (isMobile) {
      setActiveMobile((prev) => (prev - 1 + ALL_IMAGES.length) % ALL_IMAGES.length);
    } else {
      setActiveFrame((prev) => (prev - 1 + HERO_FRAMES.length) % HERO_FRAMES.length);
    }
  }, [isMobile]);

  const activeIndex = isMobile ? activeMobile : activeFrame;

  // Auto-advance
  useEffect(() => {
    const interval = setInterval(() => {
      if (isMobile) {
        setActiveMobile((prev) => (prev + 1) % ALL_IMAGES.length);
      } else {
        setActiveFrame((prev) => (prev + 1) % HERO_FRAMES.length);
      }
    }, isMobile ? 3000 : 5000);
    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <section className="h-[calc(100vh-80px)] mt-[80px] relative flex items-center justify-center text-center w-full overflow-hidden">

      {/* MOBILE: Blurred bg + contained image */}
      <div className="md:hidden absolute inset-0">
        {ALL_IMAGES.map((src, idx) => (
          <div
            key={src + idx}
            className="absolute inset-0"
            style={{
              opacity: idx === activeMobile ? 1 : 0,
              transition: "opacity 1s ease-in-out",
            }}
          >
            {/* Blurred background */}
            <img
              src={src}
              alt=""
              className="absolute inset-0 w-full h-full object-cover scale-110 blur-xl"
              aria-hidden="true"
            />
            {/* Foreground contained image */}
            <img
              src={src}
              alt={`Tennis academy ${idx + 1}`}
              className="absolute inset-0 w-full h-full object-contain z-[1]"
              loading={idx === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      {/* DESKTOP: Collage frames */}
      <div className="hidden md:block absolute inset-0">
        {HERO_FRAMES.map((frame, frameIdx) => (
          <div
            key={frameIdx}
            className={`absolute inset-0 ${frame.type === "portrait"
              ? "flex flex-row gap-[2px]"
              : "grid grid-cols-2 grid-rows-2 gap-[2px]"
              }`}
            style={{
              opacity: frameIdx === activeFrame ? 1 : 0,
              transition: "opacity 1.2s ease-in-out",
              pointerEvents: frameIdx === activeFrame ? "auto" : "none",
            }}
          >
            {frame.images.map((src, imgIdx) => (
              <div
                key={imgIdx}
                className={`relative overflow-hidden ${frame.type === "portrait" ? "flex-1" : ""
                  }`}
              >
                <img
                  src={src}
                  alt={`Tennis academy ${frameIdx}-${imgIdx + 1}`}
                  className="w-full h-full object-fill"
                  loading={frameIdx === 0 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 z-20 text-white/70 hover:text-white text-4xl md:text-5xl transition-colors p-2"
        aria-label="Previous"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-4 z-20 text-white/70 hover:text-white text-4xl md:text-5xl transition-colors p-2"
        aria-label="Next"
      >
        ›
      </button>

      {/* Text content — pushed down 20% on mobile */}
      <div className="relative z-20 flex flex-col items-center w-full max-w-5xl mx-auto px-4 mt-[20vh] md:mt-0">
        <h1 className="text-2xl md:text-6xl lg:text-[70px] font-black tracking-tighter leading-[1.1] mb-6 uppercase text-white drop-shadow-2xl">
          TRANSFORM TENNIS ACADEMY,<br /> THE ULTIMATE<br /> TENNIS EXPERIENCE
        </h1>
        <div className="mt-4 bg-white text-black px-6 py-2 text-xs md:text-sm font-bold uppercase tracking-widest shadow-xl">
          Bengaluru, India
        </div>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => isMobile ? setActiveMobile(idx) : setActiveFrame(idx)}
            className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 ${idx === activeIndex
              ? "bg-white scale-125"
              : "bg-white/40 hover:bg-white/70"
              }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}