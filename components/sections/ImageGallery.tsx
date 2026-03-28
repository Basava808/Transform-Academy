"use client";

import React, { useState } from "react";

/**
 * Simple responsive gallery + modal lightbox.
 * Put images in /public/images/gallery1.jpg ... gallery8.jpg
 */

const IMAGES = [
 "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?q=80&w=800&auto=format&fit=crop",
 "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?q=80&w=800&auto=format&fit=crop",
 "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=800&auto=format&fit=crop",
 "https://images.unsplash.com/photo-1595433562696-3d38a2d3a3e7?q=80&w=800&auto=format&fit=crop",
 "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=800&auto=format&fit=crop",
 "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=800&auto=format&fit=crop",
 "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop",
 "https://images.unsplash.com/photo-1502901930015-0eae532ad0c2?q=80&w=800&auto=format&fit=crop"
];

export default function ImageGallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="gallery section py-12 bg-white" aria-labelledby="gallery-title">
      <div className="container max-w-6xl mx-auto px-6">
        <h2 id="gallery-title" className="text-2xl md:text-3xl font-bold mb-8">
          Gallery
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {IMAGES.map((src, idx) => (
            <button
              key={src}
              onClick={() => setOpenIndex(idx)}
              className="block w-full h-40 md:h-48 overflow-hidden rounded-md focus:outline-none"
              aria-label={`Open image ${idx + 1}`}
            >
              <img
                src={src}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-full object-cover transform hover:scale-105 transition"
                loading="lazy"
                width={400}
                height={300}
              />
            </button>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => setOpenIndex(0)}
            className="inline-block px-6 py-3 bg-black text-white rounded-md"
          >
            View full screen
          </button>
        </div>
      </div>

      {/* Lightbox modal */}
      {openIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button
            onClick={() => setOpenIndex(null)}
            className="absolute top-6 right-6 text-white text-2xl p-2"
            aria-label="Close"
          >
            ✕
          </button>

          <button
            onClick={() => setOpenIndex((i) => (i === 0 ? IMAGES.length - 1 : (i ?? 0) - 1))}
            className="absolute left-6 text-white text-3xl p-2"
            aria-label="Previous"
          >
            ‹
          </button>

          <div className="max-w-5xl w-full max-h-[90vh]">
            <img
              src={IMAGES[openIndex]}
              alt={`Large gallery ${openIndex + 1}`}
              className="w-full h-auto object-contain rounded"
            />
          </div>

          <button
            onClick={() =>
              setOpenIndex((i) => (i === IMAGES.length - 1 ? 0 : ((i ?? 0) + 1)))
            }
            className="absolute right-6 text-white text-3xl p-2"
            aria-label="Next"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}