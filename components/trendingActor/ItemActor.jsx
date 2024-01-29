import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCreative, FreeMode, Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/effect-creative";

export default function ItemActor({ data }) {
  return (
    <Swiper
      className="!w-full h-full overflow-x-hidden"
      spaceBetween={15}
      speed={1500}
      freeMode={true}
      mousewheel={true}
      slidesPerView={10.3}
      grabCursor={true}
      modules={[Mousewheel, FreeMode, EffectCreative]}
    >
      {data &&
        data.map((items) => ( 
          <SwiperSlide key={items?.id}>
            <div
              key={items.id}
              className="h-56 bg-primeryColorDarker/50 p-3 rounded-xl flex flex-col justify-start items-start gap-3 overflow-hidden"
            >
              <img
                className="w-full h-32 object-cover object-top rounded-full cursor-pointer"
                src={
                  "https://image.tmdb.org/t/p/original/" + items?.profile_path
                }
                alt={
                  "https://image.tmdb.org/t/p/original/" + items?.profile_path
                }
              />
              <div className="w-full px-1 flex flex-col">
                <h2 className="w-full font-medium text-sm text-center text-textColor/70 tracking-wide">
                  {items?.name}
                </h2>
                <h3 className="w-full font-normal text-sm text-center text-textColor/40">
                  {items.known_for_department}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
