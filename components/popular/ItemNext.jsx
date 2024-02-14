import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import { EffectCreative, FreeMode, Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/effect-creative";
import Link from "next/link";

export default function ItemNext({ data, typeLink }) {
  return (
    <>
      <Swiper
        className="!w-full h-full overflow-x-hidden"
        // spaceBetween={20}
        // speed={1500}
        // freeMode={true}
        // lazy="true"
        // mousewheel={true}
        slidesPerView={1.2}
        // grabCursor={true}
        // breakpoints={{
        //   430: {
        //     slidesPerView: 1.2,
        //     spaceBetween: 20,
        //     speed: 600,
        //   },
        //   768: {
        //     slidesPerView: 2.2,
        //     spaceBetween: 20,
        //   },
        //   1024: {
        //     slidesPerView: 3.6,
        //     spaceBetween: 20,
        //   },
        // }}
        // modules={[Mousewheel, FreeMode]}
      >
        {data &&
          data.map(
            (items) =>
              items.vote_average.toFixed(1) != 0 && (
                <SwiperSlide key={items?.id}>
                  <Link
                    href={
                      typeLink === "movie"
                        ? `/movie/${items?.id}`
                        : `/tvShows/${items?.id}`
                    }
                    className="flex flex-col justify-start items-start gap-3 select-none"
                  >
                    <div className="w-full relative rounded-xl overflow-hidden">
                      <Image
                        width={200}
                        height={200}
                        quality={100}
                        loading="lazy"
                        unoptimized
                        className="w-full h-52 object-cover duration-300"
                        src={`https://image.tmdb.org/t/p/w780${
                          items?.backdrop_path || items?.poster_path
                        }`}
                        alt={`https://image.tmdb.org/t/p/w780${
                          items?.backdrop_path || items?.poster_path
                        }`}
                      />

                      <div className="size-8 pt-1 absolute bottom-0 right-0 text-primeryColor text-sm font-bold bg-secondeColor/80 ring-8 ring-primeryColorDarker flex justify-center items-center rounded-tl-2xl">
                        {items.vote_average.toFixed(1)}
                      </div>
                    </div>

                    <div className="w-full px-1 flex flex-col gap-1">
                      <h2 className="w-full font-medium text-lg text-left text-textColor/70 tracking-normal capitalize">
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
                      </h2>
                    </div>
                  </Link>
                </SwiperSlide>
              )
          )}

        <section className="w-full flex flex-row justify-start items-start gap-4">
          {!data && (
            <div className="w-80 opacity-10 flex flex-col justify-start items-start gap-3">
              <div className="skeleton w-full h-40 !rounded-xl bg-textColor/30"></div>
              <div className="skeleton w-1/2 h-3 bg-textColor/30"></div>
            </div>
          )}
        </section>
      </Swiper>
    </>
  );
}
