'use client'
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import RotatingText from "./RotatingText";

const sliderArray = [
  { bg: "/hero/frame0.jpg" },
  { bg: "/hero/frame1.png" },
  { bg: "/hero/frame2.png" },
];

export default function Hero() {
  return (
    <section id="Home" className="relative h-screen">
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="h-full"
      >
        {sliderArray.map((item, index) => (
          <SwiperSlide key={index} className="relative">
            <Image
              src={item.bg}
              alt={`Slide ${index + 1}`}
              layout="fill"
              objectFit="cover"
              quality={100}
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50" />
          </SwiperSlide>
        ))}
      </Swiper>
      
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-2 sm:mb-4 leading-tight">
          <span className="text-normalOrange">Promoviendo</span>{" "}
          <br className="sm:hidden" />
          el ecoturismo
        </h1>
        <RotatingText />
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-medium tracking-wide mb-6 max-w-2xl">
          Un viaje por la naturaleza y cultura.
        </p>
        <a
          href="/quilcas/tourism"
          className="bg-normalOrange text-white text-base sm:text-lg font-semibold py-3 px-8 rounded-full hover:bg-orange-600 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
        >
          Explora Ahora
        </a>
      </div>
    </section>
  );
}