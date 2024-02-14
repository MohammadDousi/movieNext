import React, { useEffect } from "react";

import Link from "next/link";
import Image from "next/image";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

export default function ItemBoarderSlider({ data }) {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      mode: "free-snap",
      slides: {
        origin: "center",
        perView: 1,
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          //   if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 6000);
        }
        slider.on("created", () => {
          //   slider.container.addEventListener("mouseover", () => {
          //     mouseOver = true;
          //     clearNextTimeout();
          //   });
          //   slider.container.addEventListener("mouseout", () => {
          //     mouseOver = false;
          //     nextTimeout();
          //   });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div ref={sliderRef} className="keen-slider">
      {data?.length !== 0 &&
        data?.map((items) => (
          <div
            key={items.id}
            className="keen-slider__slide lazy__slide h-screen"
          >
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
                width={1200}
                height={1200}
                quality={100}
                loading="lazy"
                property="true"
                className="w-full h-full object-cover object-center lg:object-top duration-300"
                src={
                  window.innerWidth > 430
                    ? `https://image.tmdb.org/t/p/original${items?.backdrop_path}`
                    : `https://image.tmdb.org/t/p/w780${items?.poster_path}`
                }
                alt={
                  window.innerWidth > 430
                    ? `https://image.tmdb.org/t/p/original${items?.backdrop_path}`
                    : `https://image.tmdb.org/t/p/w780${items?.poster_path}`
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
          </div>
        ))}
    </div>
  );
}
