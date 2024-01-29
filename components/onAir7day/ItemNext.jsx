import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  EffectCreative,
  FreeMode,
  Mousewheel,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/effect-creative";

export default function ItemNext({ data }) {
  return (
    <>
      <Swiper
        className="!w-full h-full overflow-x-hidden"
        spaceBetween={25}
        speed={1500}
        freeMode={true}
        mousewheel={true}
        slidesPerView={4.3}
        grabCursor={true}
        modules={[Mousewheel, FreeMode, EffectCreative]}
      >
        {data &&
          data.map((items) => (
            <SwiperSlide key={items?.id}>
              <div className="flex flex-col justify-start items-start gap-3">
                
                <div className="w-full relative rounded-xl overflow-hidden">
                  <img
                    className="w-full h-full object-cover duration-300 cursor-pointer"
                    src={
                      "https://image.tmdb.org/t/p/original/" +
                      items.backdrop_path
                    }
                    alt={
                      "https://image.tmdb.org/t/p/original/" +
                      items.backdrop_path
                    }
                  />

                  <div className="size-8 pt-1 absolute bottom-0 right-0 text-primeryColor text-sm font-bold bg-secondeColor/80 ring-8 ring-primeryColorDarker flex justify-center items-center rounded-tl-2xl">
                    {items.vote_average.toFixed(1)}
                  </div>
                </div>

                <div className="w-full px-1 flex flex-col gap-1">
                  <h2 className="w-full font-medium text-base text-left text-textColor/70 tracking-normal">
                    {items?.name?.length >= 30 ||
                    items?.original_name?.length >= 30
                      ? `${items?.name?.slice(0, 30)}...` ||
                        `${items?.original_name?.slice(0, 30)}...`
                      : items?.name || items?.original_name}
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
