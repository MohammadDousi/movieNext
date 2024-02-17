"use client";

import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { getTrending } from "@/hooks/querys";

export default function BoardSlider() {
  const { data, isError, error } = getTrending("all");

  return (
    <Swiper
      className="!w-full h-screen lg:h-[40rem]"
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
      // effect="creative"
      // creativeEffect={{
      //   prev: {
      //     shadow: true,
      //     translate: ["-100%", 0, -500],
      //   },
      //   next: {
      //     shadow: true,
      //     translate: ["100%", 0, -500],
      //   },
      // }}
      modules={[Autoplay, Pagination, EffectCreative]}
    >
      {data?.data?.results &&
        data?.data?.results.slice(0, 8).map((items) => (
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
                width={window.innerWidth > 430 ? 1200 : 400}
                height={window.innerWidth > 430 ? 1200 : 400}
                quality={100}
                loading="lazy"
                property="true"
                className="w-full h-full object-cover object-center lg:object-top duration-300"
                src={
                  window.innerWidth > 430
                    ? `https://image.tmdb.org/t/p/original${items?.backdrop_path}`
                    : `https://image.tmdb.org/t/p/original${items?.poster_path}`
                }
                alt={
                  window.innerWidth > 430
                    ? `https://image.tmdb.org/t/p/original${items?.backdrop_path}`
                    : `https://image.tmdb.org/t/p/original${items?.poster_path}`
                }
              />

              <div className="w-full px-6 lg:px-16 absolute bottom-28 lg:bottom-16 flex flex-col justify-start items-start gap-3.5">
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
