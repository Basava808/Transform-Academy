"use client";

import React, { useState, useRef, useEffect } from "react";

const IMAGES = [
  "/images/transform-tennis/Gallery 1.jpeg",
  "/images/transform-tennis/Gallery 2.jpeg",
  "/images/transform-tennis/Gallery 3.jpeg",
  "/images/transform-tennis/Gallery 4.jpeg",
  "/images/transform-tennis/Gallery 5.jpeg",
  "/images/transform-tennis/Gallery 6.jpeg",
  "/images/transform-tennis/Gallery 7.jpeg",
  "/images/transform-tennis/Gallery 8.jpeg",
  "/images/transform-tennis/Gallery alt 1.jpeg",
  "/images/transform-tennis/Gallery alt 2.jpeg",
  "/images/transform-tennis/Gallery alt 5.jpeg",
];

function ScrollRow({
  images,
  indexOffset,
  direction,
  onImageClick,
}: {
  images: string[];
  indexOffset: number;
  direction: "left" | "right";
  onImageClick: (idx: number) => void;
}) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;
    let animFrame: number;
    const speed = direction === "left" ? 0.5 : -0.5;

    const scroll = () => {
      if (!isPaused && el) {
        el.scrollLeft += speed;
        // Loop: if scrolled to end, reset to start (and vice versa)
        if (direction === "left" && el.scrollLeft >= el.scrollWidth - el.clientWidth) {
          el.scrollLeft = 0;
        }
        if (direction === "right" && el.scrollLeft <= 0) {
          el.scrollLeft = el.scrollWidth - el.clientWidth;
        }
      }
      animFrame = requestAnimationFrame(scroll);
    };

    animFrame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animFrame);
  }, [isPaused, direction]);

  return (
    <div
      ref={rowRef}
      className="flex gap-2 overflow-x-auto scrollbar-hide"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Duplicate images for seamless loop */}
      {[...images, ...images].map((src, idx) => (
        <button
          key={`${src}-${idx}`}
          onClick={() => onImageClick(indexOffset + (idx % images.length))}
          className="flex-shrink-0 h-[250px] md:h-[320px] overflow-hidden block focus:outline-none"
          style={{ width: "clamp(200px, 30vw, 400px)" }}
          aria-label={`Open image ${indexOffset + (idx % images.length) + 1}`}
        >
          <img
            src={src}
            alt={`Gallery ${indexOffset + (idx % images.length) + 1}`}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </button>
      ))}
    </div>
  );
}

export default function ImageGallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const row1 = IMAGES.slice(0, 6);
  const row2 = IMAGES.slice(6);

  return (
    <section className="py-8 bg-white" aria-labelledby="gallery-title">
      {/* Row 1 - scrolls left */}
      <div className="mb-2">
        <ScrollRow
          images={row1}
          indexOffset={0}
          direction="left"
          onImageClick={setOpenIndex}
        />
      </div>

      {/* Row 2 - scrolls right */}
      <div>
        <ScrollRow
          images={row2}
          indexOffset={6}
          direction="right"
          onImageClick={setOpenIndex}
        />
      </div>

      {/* View Full Screen Button */}
      <div className="mt-8 text-center">
        <button
          onClick={() => setOpenIndex(0)}
          className="inline-block px-8 py-3 bg-black text-white text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors"
        >
          View Full Screen
        </button>
      </div>

      {/* Lightbox modal */}
      {openIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          {/* Close */}
          <button
            onClick={() => setOpenIndex(null)}
            className="absolute top-6 right-6 text-white text-3xl p-2 hover:opacity-70 transition z-10"
            aria-label="Close"
          >
            ✕
          </button>

          {/* Image counter */}
          <div className="absolute top-6 left-6 text-white/60 text-sm font-light tracking-wider">
            {openIndex + 1} / {IMAGES.length}
          </div>

          {/* Previous */}
          <button
            onClick={() =>
              setOpenIndex((i) =>
                i === 0 ? IMAGES.length - 1 : (i ?? 0) - 1
              )
            }
            className="absolute left-4 md:left-8 text-white text-5xl p-2 hover:opacity-70 transition"
            aria-label="Previous"
          >
            ‹
          </button>

          {/* Image */}
          <div className="max-w-6xl w-full max-h-[90vh] flex items-center justify-center">
            <img
              src={IMAGES[openIndex]}
              alt={`Large gallery ${openIndex + 1}`}
              className="max-w-full max-h-[85vh] object-contain"
            />
          </div>

          {/* Next */}
          <button
            onClick={() =>
              setOpenIndex((i) =>
                i === IMAGES.length - 1 ? 0 : (i ?? 0) + 1
              )
            }
            className="absolute right-4 md:right-8 text-white text-5xl p-2 hover:opacity-70 transition"
            aria-label="Next"
          >
            ›
          </button>

          {/* Thumbnail strip */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 max-w-[90vw] overflow-x-auto px-4"
            style={{ scrollbarWidth: "none" }}
          >
            {IMAGES.map((src, idx) => (
              <button
                key={src}
                onClick={() => setOpenIndex(idx)}
                className={`flex-shrink-0 w-16 h-12 overflow-hidden border-2 transition ${
                  idx === openIndex ? "border-white" : "border-transparent opacity-50 hover:opacity-80"
                }`}
              >
                <img src={src} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}