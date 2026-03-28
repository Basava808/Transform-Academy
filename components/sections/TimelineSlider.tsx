"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const history = [
  { year: "1996", text: "Academy founded in Paris." },
  { year: "2006", text: "Australian Open finalist coached." },
  { year: "2012", text: "Coaching Serena Williams." },
  { year: "2016", text: "Relocated to Côte d'Azur." },
];

export default function TimelineSlider() {
  return (
    <section id="history" className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">
          Over 25 Years of Heritage
        </h2>

        <Swiper
          modules={[Navigation]}
          navigation
          slidesPerView={1.2}
          spaceBetween={30}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {history.map((item) => (
            <SwiperSlide key={item.year}>
              <div className="bg-gray-900 p-8 rounded-lg h-full">
                <h3 className="text-3xl font-bold mb-4">
                  {item.year}
                </h3>
                <p className="text-gray-400">{item.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}