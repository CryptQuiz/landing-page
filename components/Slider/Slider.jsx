"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
const boxesData = [
  { color: "red-1", label: "SCALABLE" },
  { color: "blue-1", label: "EASY ADAPTATION FOR WEB2 USERS" },
  { color: "purple-1", label: "EASY ADAPTATION FOR WEB2 PLATFORMS" },
  { color: "pink-1", label: "EASY ADAPTATION FOR WEB2 PLATFORMS" },
  { color: "red-1", label: "SCALABLE" },
  { color: "blue-1", label: "EASY ADAPTATION FOR WEB2 USERS" },
  { color: "purple-1", label: "EASY ADAPTATION FOR WEB2 PLATFORMS" },
  { color: "pink-1", label: "EASY ADAPTATION FOR WEB2 PLATFORMS" },
];
const Slider = () => {
  return (
    <Swiper
      slidesPerView={3.4}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      pagination={{
        clickable: true,
      }}
    >
      {boxesData.map((box, index) => (
        <SwiperSlide key={index} className="flex justify-center items-center">
          <div
            className={`bg-${box.color} flex justify-center items-center h-[50vh] w-[20vw]
          drop-shadow-[6px_6px_rgba(0,0,0,1)]
          border-2 border-black  transition-all duration-200 ease-in-out
          rounded-[20px] hover:drop-shadow-none`}
          >
            <p className="text-center text-white drop-shadow-[4px_4px_rgba(0,0,0,1)] font-lexend font-bold text-2xl">
              {box.label}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
