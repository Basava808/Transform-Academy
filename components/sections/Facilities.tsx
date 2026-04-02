"use client";

import { MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

function ImageCarousel({ images, alt }: { images: string[]; alt: string }) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Auto-advance every 4 seconds
  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative h-80 overflow-hidden group/carousel">
      {images.map((src, idx) => (
        <img
          key={src}
          src={src}
          alt={`${alt} ${idx + 1}`}
          className={`absolute inset-0 w-full h-full object-fill transition-opacity duration-700 ${
            idx === current ? "opacity-100" : "opacity-0"
          }`}
          loading="lazy"
        />
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={(e) => { e.stopPropagation(); prev(); }}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-1.5 rounded-full opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 z-10"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); next(); }}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-1.5 rounded-full opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 z-10"
        aria-label="Next image"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => { e.stopPropagation(); setCurrent(idx); }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              idx === current
                ? "bg-white w-6"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to image ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Facilities() {
  const facilities = [
    {
      name: "Transform Tennis Academy, Bommanahalli",
      courts: "8 Clay courts",
      address: "16th Cross, 13th Main, Virat Nagar, Bommanahalli, Bengaluru – 560068",
      images: [
        "/images/transform-tennis/Facility Bommanahalli 1.jpeg",
        "/images/transform-tennis/Facility Bommanahalli 2.jpeg",
        "/images/transform-tennis/Facility Bommanahalli 3.jpeg",
      ],
    },
    {
      name: "Transform Tennis Academy, Hennur",
      courts: "6 Clay courts with flood lights",
      address: "Ashwath Katte Road Bileshivale Dodda Gubbi, Post, Bengaluru, Karnataka 560077",
      images: [
        "/images/transform-tennis/Facility Hennur 1.jpeg",
        "/images/transform-tennis/Facility Hennur 2.jpeg",
        "/images/transform-tennis/Facility Hennur 3.jpeg",
      ],
    },
  ];

  return (
    <section id="facilities" className="py-32 px-6 md:px-12 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter">
            OUR FACILITIES
          </h2>
          <p className="text-xl max-w-2xl mx-auto font-light leading-relaxed text-gray-400">
            Train at our top-tier clay court facilities designed for optimal performance and development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {facilities.map((facility, index) => (
            <div key={index} className="group overflow-hidden bg-surface transition-all duration-300 border border-white/5 hover:bg-white hover:text-black hover:border-white">
              <ImageCarousel images={facility.images} alt={facility.name} />
              <div className="p-8">
                <h3 className="text-2xl font-bold tracking-tight uppercase mb-4 text-white group-hover:text-black transition-colors">{facility.name}</h3>
                <div className="inline-block bg-white text-black px-4 py-1.5 text-xs font-bold mb-6 tracking-widest uppercase transition-colors group-hover:bg-black group-hover:text-white">
                  {facility.courts}
                </div>
                <div className="flex items-start font-light space-x-3 text-gray-400 group-hover:text-gray-800 transition-colors">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-current" />
                  <p>{facility.address}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
