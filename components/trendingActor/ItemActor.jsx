import React from "react";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import logo from "../../public/logo.png";

import { EffectCreative, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/effect-creative";

export default function ItemActor({ data }) {
  const skele = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const uniqueData = [...new Map(data.map((item) => [item.id, item])).values()];

  return (
    <>
      <Swiper
        className="!w-full h-full overflow-x-hidden"
        spaceBetween={15}
        speed={1500}
        freeMode={true}
        slidesPerView={10}
        grabCursor={true}
        modules={[FreeMode, EffectCreative]}
      >
        {uniqueData &&
          uniqueData.map((items) => (
            <SwiperSlide key={items?.id}>
              <div
                key={items.id}
                className="h-56 bg-primeryColorDarker/50 p-3 rounded-xl flex flex-col justify-start items-start gap-3 overflow-hidden"
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
              </div>
            </SwiperSlide>
          ))}
      </Swiper>

      <section className="w-full h-full flex flex-row justify-between gap-4 overflow-x-hidden">
        {!uniqueData &&
          skele.map((items) => (
            <div
              key={items}
              className="w-40 h-56 opacity-10 bg-primeryColorDarker/50 p-3 rounded-xl flex flex-col justify-start items-center gap-3 overflow-hidden"
            >
              <div className="skeleton w-full h-3/4 !rounded-full bg-textColor/30"></div>
              <div className="skeleton w-1/2 h-1.5 bg-textColor/30"></div>
            </div>
          ))}
      </section>
    </>
  );
}
