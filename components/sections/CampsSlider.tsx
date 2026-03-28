"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const camps = [
  {
    title: "Youth Tennis Camp | Week (Mornings)",
    tags: ["From age 6", "Week", "Morning"],
    image: "/images/camp1.jpg",
  },
  {
    title: "Youth Intensive Camp | Full Days",
    tags: ["From age 10", "Week", "Full Days"],
    image: "/images/camp2.jpg",
  },
  {
    title: "Adults Tennis Camp | Mornings",
    tags: ["Adults", "Week"],
    image: "/images/camp3.jpg",
  },
];

export default function CampsSlider() {
  return (
    <section id="camps" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">
          Enjoy the experience with our camps
        </h2>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {camps.map((camp) => (
            <SwiperSlide key={camp.title}>
              <div className="bg-gray-900 rounded-lg overflow-hidden">
                <img
                  src={camp.image}
                  className="w-full h-72 object-cover"
                />

                <div className="p-6">
                  <div className="flex gap-2 mb-4 text-xs uppercase text-gray-400">
                    {camp.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold">
                    {camp.title}
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