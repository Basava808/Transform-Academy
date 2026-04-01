"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
const centers = [
  {
    title: "TTA Bommanahalli",
    image: "/images/transform-tennis/Facility Bommanahalli 1.jpeg",
  },
  {
    title: "TTA Bommanahalli",
    image: "/images/transform-tennis/Facility Bommanahalli 2.jpeg",
  },
  {
    title: "TTA Bommanahalli",
    image: "/images/transform-tennis/Facility Bommanahalli 3.jpeg",
  },
  {
    title: "TTA Hennur",
    image: "/images/transform-tennis/Facility Hennur 3.jpeg",
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