"use client";

import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, EffectCreative } from "swiper/modules";

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
      className="!w-full h-lvh lg:h-[41rem] overflow-x-hidden"
      spaceBetween={0}
      speed={600}
      slidesPerView={1}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      lazy="true"
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
      breakpoints={{
        425: {
          speed: 600,
        },
        768: {
          speed: 900,
        },
        1024: {
          speed: 1500,
        },
      }}
      modules={[Autoplay, Pagination, EffectCreative]}
    >
      {trend &&
        trend.map((items) => (
          <SwiperSlide key={items?.id}>
            <Link
              href={
                items.media_type === "movie"
                  ? `/movie/${items.id}`
                  : `/tvShows/${items.id}`
              }
              key={items.id}
            >
              <span className="w-full h-full absolute bg-gradient-to-t from-5% from-primeryColor to-transparent"></span>

              <Image
                unoptimized
                width={1200}
                height={1200}
                quality={100}
                loading="lazy"
                property="true"
                className="w-full h-full object-cover object-center lg:object-top duration-300"
                src={`https://image.tmdb.org/t/p/original${items?.backdrop_path}`}
                alt={`https://image.tmdb.org/t/p/original${items?.backdrop_path}`}
              />

              <div className="w-full px-6 lg:px-20 absolute bottom-28 lg:bottom-16 flex flex-col justify-start items-start gap-3.5">
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
                <h3 className="w-full lg:w-1/2 pl-1 text-left text-base lg:text-lg text-textColor/70 leading-tight drop-shadow-lg">
                  {items?.overview.length >= 130
                    ? `${items?.overview.slice(0, 130)}...`
                    : items?.overview}
                </h3>
              </div>
            </Link>
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
