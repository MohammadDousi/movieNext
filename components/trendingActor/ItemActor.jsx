import React from "react";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import logo from "../../public/logo.png";

import { FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import Link from "next/link";

export default function ItemActor({ data }) {
  let uniqueData;
  if (data) {
    uniqueData = [...new Map(data.map((item) => [item.id, item])).values()];
  }
  return (
    <Swiper
      className="!w-full"
      spaceBetween={10}
      speed={1500}
      freeMode={true}
      lazy="true"
      slidesPerView={2.8}
      grabCursor={true}
      breakpoints={{
        430: {
          slidesPerView: 2.8,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 6,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 10,
          spaceBetween: 20,
        },
      }}
      modules={[FreeMode]}
    >
      {uniqueData &&
        uniqueData.map((items) => (
          <SwiperSlide key={items?.id}>
            <Link
              key={items.id}
              href={`/cast/${items.id}`}
              className="h-56 bg-primeryColorDarker/50 p-3 rounded-xl flex flex-col justify-start items-start gap-3 select-none overflow-hidden"
            >
              <Image
                width={100}
                height={100}
                quality={100}
                loading="lazy"
                unoptimized
                className={
                  items?.profile_path != null || ""
                    ? "w-full h-3/4 object-cover object-top rounded-full"
                    : "w-full h-3/4 p-5 object-contain object-center rounded-full saturate-0 opacity-50 ring-1 ring-textColor/10 cursor-pointer"
                }
                src={
                  items?.profile_path != null || ""
                    ? `https://image.tmdb.org/t/p/w185${items?.profile_path}`
                    : logo
                }
                alt={
                  items?.profile_path != null || ""
                    ? `https://image.tmdb.org/t/p/w185${items?.profile_path}`
                    : logo
                }
              />

              <h2 className="w-full font-medium text-sm text-center text-textColor/70 tracking-wide">
                {items?.name?.length >= 20
                  ? `${items?.name?.slice(0, 15)}...`
                  : items?.name}
              </h2>
            </Link>
          </SwiperSlide>
        ))}

      {!data && (
        <div className="w-1/4 lg:w-28 opacity-10 flex flex-col justify-start items-start gap-3">
          <div className="w-full lg:h-56 bg-primeryColorDarker/50 p-3 rounded-xl flex flex-col justify-start items-center gap-3 select-none overflow-hidden">
            <div className="skeleton w-full h-3/4 !rounded-full bg-textColor/30"></div>
            <div className="skeleton w-1/2 h-1.5 bg-textColor/30"></div>
          </div>
        </div>
      )}
    </Swiper>
  );
}
