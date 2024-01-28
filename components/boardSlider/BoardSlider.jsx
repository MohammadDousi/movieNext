"use client";

import Link from "next/link";

import axios from "axios";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Autoplay,
  Pagination,
  EffectCreative,
  Navigation,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

export default function BoardSlider() {
  const [trend, setTrend] = useState();

  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/trending/all/day?language=en-US",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTRiM2QzNDRiMDAxOTNhMWYxMzEyOWZkNDIzNzdlZSIsInN1YiI6IjY1YjRkZGY2MmZhZjRkMDE3Y2RjMjgzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ldhZGWiYUrMsECw_f-hTacesZEoyzMJEz7njNTnsikg",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setTrend(response.data.results.slice(0, 6));
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <Swiper
      className="!w-full h-[35rem]"
      spaceBetween={0}
      speed={1500}
      slidesPerView={1}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      lazy={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      effect={"creative"}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: ["-120%", 0, -500],
        },
        next: {
          shadow: true,
          translate: ["120%", 0, -500],
        },
      }}
      modules={[Autoplay, Pagination, EffectCreative]}
    >
      {trend &&
        trend.map((items) => (
          <SwiperSlide key={items?.id}>
            <span className="w-full h-full absolute bg-gradient-to-b from-transparent to-primeryColor"></span>
            <img
              className="w-full h-full object-cover duration-300"
              src={"https://image.tmdb.org/t/p/original/" + items.backdrop_path}
              alt={"https://image.tmdb.org/t/p/original/" + items.backdrop_path}
            />
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
