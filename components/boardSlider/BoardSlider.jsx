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
        setTrend(response.data.results.slice(0, 10));
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <Swiper
      className="!w-full h-[37rem] overflow-x-hidden"
      spaceBetween={0}
      speed={1500}
      slidesPerView={1}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      lazy={true}
      autoplay={{
        delay: 6000,
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
            <span className="w-full h-full absolute bg-gradient-to-t from-5% from-primeryColor to-transparent/10"></span>
            <img
              className="w-full h-full bg-bottom object-cover object-top duration-300"
              src={
                "https://image.tmdb.org/t/p/original/" + items?.backdrop_path
              }
              alt={
                "https://image.tmdb.org/t/p/original/" + items?.backdrop_path
              }
            />

            <div className="w-full px-20 absolute bottom-16 flex flex-col justify-start items-start gap-3.5">
              <h1 className="w-full text-left font-bold text-6xl text-textColor drop-shadow-lg">
                {items?.title?.length >= 30 ||
                items?.original_title?.length >= 30 ||
                items?.name?.length >= 30 ||
                items?.original_name?.length >= 30

                  ? `${items?.title?.slice(0, 30)}...` ||
                    `${items?.original_title?.slice(0, 30)}...` ||
                    `${items?.name?.slice(0, 30)}...` ||
                    `${items?.original_name?.slice(0, 30)}...`
                
                    : items?.title ||
                    items?.original_title ||
                    items?.name ||
                    items?.original_name}
              </h1>
              <h3 className="w-1/2 pl-1 text-left text-lg text-textColor/70 leading-tight drop-shadow-lg">
                {items?.overview.length >= 130
                  ? `${items?.overview.slice(0, 130)}...`
                  : items?.overview}
              </h3>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
