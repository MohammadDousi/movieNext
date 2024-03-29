"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

export default function SeasonsTv({ data, typeLink }) {
  const [countItem, setCountItem] = useState(10);
  return (
    <div className="w-full">
      <Swiper
        className="w-full"
        spaceBetween={20}
        speed={1500}
        freeMode={true}
        slidesPerView={1.8}
        lazy="true"
        grabCursor={true}
        onActiveIndexChange={(s) => s.isEnd && setCountItem(countItem + 10)}
        breakpoints={{
          430: {
            slidesPerView: 1.8,
            spaceBetween: 20,
            speed: 600,
          },
          768: {
            slidesPerView: 3.6,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }}
        modules={[Mousewheel, FreeMode]}
      >
        {data &&
          data?.slice(0, countItem).map((items, index) => (
            <SwiperSlide key={items?.id + index}>
              <Link
                href={
                  typeLink === "movie"
                    ? `/movie/${items?.id}`
                    : `/tvShows/${items?.id}`
                }
                className="w-full flex flex-col justify-start items-start gap-3 select-none rounded-xl overflow-hidden"
              >
                <div className="w-full relative h-72 rounded-xl overflow-hidden">
                  <Image
                    width={200}
                    height={200}
                    quality={100}
                    loading="lazy"
                    property="true"
                    unoptimized
                    className="w-full h-full object-cover duration-300 cursor-pointer"
                    src={`https://image.tmdb.org/t/p/w342${items?.poster_path}`}
                    alt={`https://image.tmdb.org/t/p/w342${items?.poster_path}`}
                  />
                  <div className="size-8 pt-1 absolute bottom-0 right-0 text-primeryColor text-sm font-bold bg-secondeColor/85 ring-8 ring-primeryColor flex justify-center items-center rounded-tl-2xl">
                    {items?.vote_average.toFixed(1)}
                  </div>
                </div>

                <div className="w-full pb-5 flex flex-col gap-1">
                  <h2 className="w-full font-medium text-sm text-left text-textColor/70 tracking-normal capitalize">
                    {typeLink === "movie"
                      ? items?.title?.length >= 22
                        ? `${items?.title?.slice(0, 20)}...`
                        : items?.title
                      : items?.name?.length >= 22
                      ? `${items?.name?.slice(0, 20)}...`
                      : items?.name}
                  </h2>

                  <h2 className="w-full font-medium text-sm text-left text-textColor/30 tracking-normal capitalize">
                    {items?.season_number &&
                      `season : ${items?.season_number} episode : 
                      ${items?.episode_count}`}
                  </h2>
                </div>
              </Link>
            </SwiperSlide>
          ))}

        {}
      </Swiper>
    </div>
  );
}
