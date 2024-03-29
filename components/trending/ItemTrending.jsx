import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import { FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/effect-creative";

export default function ItemTrending({ data, typeLink }) {
  return (
    <Swiper
      className="!w-full"
      spaceBetween={20}
      speed={1500}
      freeMode={true}
      slidesPerView={1.8}
      lazy="true"
      grabCursor={true}
      modules={[FreeMode]}
      breakpoints={{
        425: {
          slidesPerView: 1.8,
          spaceBetween: 20,
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
    >
      {data &&
        data?.map((items) => (
          <SwiperSlide key={items?.id}>
            <Link
              href={
                typeLink === "movie"
                  ? `/movie/${items?.id}`
                  : `/tvShows/${items?.id}`
              }
              key={items?.id}
              className="w-full flex flex-col justify-start items-start gap-3 select-none overflow-hidden"
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

                <div className="size-8 pt-1 absolute bottom-0 right-0 text-primeryColor text-sm font-bold bg-secondeColor/90 ring-8 ring-primeryColor flex justify-center items-center rounded-tl-2xl">
                  {items?.vote_average?.toFixed(1)}
                </div>
              </div>
              <div className="w-full flex flex-col gap-1">
                <h2 className="w-full font-medium text-lg text-left text-textColor/70 tracking-normal capitalize">
                  {typeLink === "movie"
                    ? items?.title?.length >= 22 ||
                      items?.original_title?.length >= 22
                      ? `${items?.title?.slice(0, 20)}...` ||
                        `${items?.original_title?.slice(0, 20)}...`
                      : items?.title || items?.original_title
                    : items?.name?.length >= 22 ||
                      items?.original_name?.length >= 22
                    ? `${items?.name?.slice(0, 20)}...` ||
                      `${items?.original_name?.slice(0, 20)}...`
                    : items?.name || items?.original_name}
                </h2>
              </div>
            </Link>
          </SwiperSlide>
        ))}

      {!data && (
        <div className="w-52 opacity-10 flex flex-col justify-start items-start gap-3">
          <div className="skeleton w-full bg-textColor/30 relative h-72 rounded-xl"></div>
          <div className="w-full px-1 flex flex-col gap-1.5">
            <div className="skeleton w-full h-3 bg-textColor/30"></div>
            <div className="skeleton w-1/2 h-3 bg-textColor/30"></div>
          </div>
        </div>
      )}
    </Swiper>
  );
}
