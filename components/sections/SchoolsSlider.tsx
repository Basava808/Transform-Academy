"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
const schools = [
  {
    title: "International School Curriculum",
    text: "Balance between sport and studies.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "French Programme",
    text: "French national curriculum.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "American Programme",
    text: "International English curriculum.",
    image: "https://images.unsplash.com/photo-1521537634581-0dced2fee2ef?q=80&w=1000&auto=format&fit=crop ",
  },
];

export default function SchoolsSlider() {
  return (
    <section className="py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">
          Turn passion into a life project
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
          {schools.map((school) => (
            <SwiperSlide key={school.title}>
              <div className="bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={school.image}
                  className="w-full h-60 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    {school.title}
                  </h3>
                  <p className="text-gray-600">{school.text}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}