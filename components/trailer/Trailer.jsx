import React from "react";

import { MediaPlayer, MediaProvider } from "@vidstack/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

export default function Trailer({ data }) {
  return (
    <div className="w-full p-5 bg-primeryColorDarker/50 rounded-xl">
      <Swiper
        className="w-full h-full overflow-x-hidden"
        spaceBetween={20}
        speed={1500}
        freeMode={true}
        mousewheel={true}
        slidesPerView={1.2}
        grabCursor={true}
        breakpoints={{
          430: {
            slidesPerView: 1.2,
            spaceBetween: 20,
            speed: 600,
          },
          768: {
            slidesPerView: 2.2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3.6,
            spaceBetween: 20,
          },
        }}
        modules={[Mousewheel, FreeMode]}
      >
        {data &&
          data.map((items) => (
            <SwiperSlide key={items?.id}>
              <div
                key={items.id}
                className="w-full rounded-xl flex flex-col justify-start items-start gap-3 select-none overflow-hidden"
              >
                <MediaPlayer
                  src={`youtube/${items.key}`}
                  aspectRatio="16/9"
                  viewType="video"
                  load="visible"
                  posterLoad="visible"
                  controls="true"
                  className="w-full  rounded-lg"
                >
                  <MediaProvider />
                </MediaPlayer>
                <h4 className="w-full font-normal text-base text-left text-textColor/70">
                  {items?.name?.length >= 30
                    ? `${items?.name?.slice(0, 30)}...`
                    : items?.name}
                </h4>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
