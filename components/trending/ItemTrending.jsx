"use client";

import React from "react";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import { FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/effect-creative";

export default function ItemTrending({ data }) {
  const skele = [1, 2, 3, 4, 5, 6];

  return (
    <Swiper
      className="!w-full h-full overflow-x-hidden"
      spaceBetween={20}
      speed={1500}
      freeMode={true}
      slidesPerView={6}
      lazy="true"
      grabCursor={true}
      modules={[FreeMode]}
      breakpoints={{
        430: {
          slidesPerView: 1.8,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 20,
        },
      }}
    >
      {data &&
        data.map((items) => (
          <SwiperSlide key={items?.id}>
            <Link
              href={`/movie/${items?.id}`}
              key={items?.id}
              className="w-full flex flex-col justify-start items-start gap-3 overflow-hidden"
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

                <div className="size-8 pt-1 absolute bottom-0 right-0 text-primeryColor text-sm font-bold bg-secondeColor/80 ring-8 ring-primeryColor flex justify-center items-center rounded-tl-2xl">
                  {items?.vote_average.toFixed(1)}
                </div>
              </div>
              <div className="w-full px-1 flex flex-col gap-1">
                <h2 className="w-full font-medium text-base text-left text-textColor/70 tracking-normal">
                  {items?.title?.length >= 22 ||
                  items?.original_title?.length >= 22 ||
                  items?.name?.length >= 22 ||
                  items?.original_name?.length >= 22
                    ? `${items?.title?.slice(0, 20)}...` ||
                      `${items?.original_title?.slice(0, 20)}...` ||
                      `${items?.name?.slice(0, 20)}...` ||
                      `${items?.original_name?.slice(0, 20)}...`
                    : items?.title ||
                      items?.original_title ||
                      items?.name ||
                      items?.original_name}
                </h2>
                <h3 className="w-full font-normal text-sm text-left text-textColor/40">
                  {items.release_date || items.first_air_date}
                </h3>
              </div>
            </Link>
          </SwiperSlide>
        ))}

      {!data && (
        <div className="w-full flex flex-row justify-start items-start gap-5 overflow-hidden">
          {skele.map((item) => (
            <div
              key={item}
              className="w-1/6 opacity-10 flex flex-col justify-start items-start gap-3"
            >
              <div className="skeleton w-full bg-textColor/30 relative h-72 rounded-xl"></div>
              <div className="w-full px-1 flex flex-col gap-1.5">
                <div className="skeleton w-full h-3 bg-textColor/30"></div>
                <div className="skeleton w-1/2 h-3 bg-textColor/30"></div>
              </div>
            </div>
          ))}
        </div>
      )}
    </Swiper>
  );
}
