"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
const centers = [
  {
    title: "San Francisco, California",
    image: "https://images.unsplash.com/photo-1595433707802-6b2626ef1c07?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Florida, USA",
    image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Kuala Lumpur, Malaysia",
    image: "https://images.unsplash.com/photo-1521537634581-0dced2fee2ef?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Atlanta, Georgia",
    image: "https://images.unsplash.com/photo-1502901930015-0eae532ad0c2?q=80&w=1000&auto=format&fit=crop",
  },
];

export default function CentersSlider() {
  return (
    <section className="py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">
          Our other academies
        </h2>

        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={30}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {centers.map((center) => (
            <SwiperSlide key={center.title}>
              <div className="rounded-lg overflow-hidden">
                <img
                  src={center.image}
                  className="w-full h-72 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold">
                    {center.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}