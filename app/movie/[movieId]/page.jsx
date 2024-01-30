"use client";

import TitleContainer from "@/components/title/TitleContainer";
import ItemActor from "@/components/trendingActor/ItemActor";
import axios from "axios";
import { useState, useEffect } from "react";
import { IoTime, IoCalendar, IoStar, IoLanguage } from "react-icons/io5";

import { MediaPlayer, MediaProvider } from "@vidstack/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, FreeMode, Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/effect-creative";

export default function MoviePage({ params }) {
  const [movie, setMovie] = useState();
  const [cast, setCast] = useState();
  const [trailer, setTrailer] = useState();

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${params.movieId}?language=en-US`,
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTRiM2QzNDRiMDAxOTNhMWYxMzEyOWZkNDIzNzdlZSIsInN1YiI6IjY1YjRkZGY2MmZhZjRkMDE3Y2RjMjgzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ldhZGWiYUrMsECw_f-hTacesZEoyzMJEz7njNTnsikg",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setMovie(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${params.movieId}/credits?language=en-US`,
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTRiM2QzNDRiMDAxOTNhMWYxMzEyOWZkNDIzNzdlZSIsInN1YiI6IjY1YjRkZGY2MmZhZjRkMDE3Y2RjMjgzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ldhZGWiYUrMsECw_f-hTacesZEoyzMJEz7njNTnsikg",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setCast(response.data.cast);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${params.movieId}/videos?language=en-US`,
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTRiM2QzNDRiMDAxOTNhMWYxMzEyOWZkNDIzNzdlZSIsInN1YiI6IjY1YjRkZGY2MmZhZjRkMDE3Y2RjMjgzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ldhZGWiYUrMsECw_f-hTacesZEoyzMJEz7njNTnsikg",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setTrailer(response.data.results);
        console.log(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const generateTime = (time) => {
    let hour = Math.floor(time / 60);
    let min = Math.floor(time % 60);

    return `${hour}h ${min}m`;
  };

  return (
    <section className="w-full px-20 relative h-full flex flex-col justify-start items-center gap-14 overflow-x-hidden">
      <span className="w-full h-full absolute -z-10 bg-gradient-to-t from-5% from-primeryColor to-transparent/10"></span>
      <img
        className="w-full h-full absolute -z-50 object-cover object-top opacity-10"
        src={"https://image.tmdb.org/t/p/original/" + movie?.backdrop_path}
        alt={"https://image.tmdb.org/t/p/original/" + movie?.backdrop_path}
      />

      <section className="w-full h-screen relative pt-20 flex flex-row justify-center items-center gap-10">
        <div className="w-1/4 relative rounded-xl overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={"https://image.tmdb.org/t/p/original/" + movie?.poster_path}
            alt={"https://image.tmdb.org/t/p/original/" + movie?.poster_path}
          />

          <div className="size-8 pt-1 absolute bottom-0 right-0 text-primeryColor text-sm font-bold bg-secondeColor ring-8 ring-primeryColor flex justify-center items-center rounded-tl-2xl">
            {movie?.vote_average.toFixed(1)}
          </div>
        </div>

        <div className="w-3/4 mt-5 flex flex-col justify-start items-start gap-6">
          <div className="flex flex-row justify-start items-center gap-6">
            <h3 className=" text-base text-textColor/70 tracking-wider drop-shadow-lg flex flex-row justify-center items-center gap-1.5">
              <IoTime />
              {generateTime(movie?.runtime)}
            </h3>

            <h3 className="text-base text-textColor/70 drop-shadow-lg flex flex-row justify-center items-center gap-1.5">
              <IoCalendar />
              {movie?.release_date} (
              {movie?.production_countries?.map((counters, index) =>
                index + Number(1) === movie?.production_countries?.length
                  ? counters.iso_3166_1
                  : counters.iso_3166_1 + ","
              )}
              )
            </h3>

            <h3 className="text-base text-secondeColor drop-shadow-lg flex flex-row justify-center items-center gap-1.5">
              <IoStar />
              {movie?.vote_average.toFixed(1)} ({movie?.vote_count})
            </h3>
          </div>

          <div className="w-full flex flex-col justify-start items-start gap-3.5">
            <h1 className="w-full text-left font-bold text-6xl text-textColor drop-shadow-lg">
              {movie?.title || movie?.original_name}
            </h1>

            <h3 className="w-full text-lg text-textColor/70 drop-shadow-lg">
              <span className="font-bold text-xl text-accentColor/50 italic capitalize ">
                overview :{" "}
              </span>
              {movie?.overview}
            </h3>
          </div>

          <section className="w-full flex flex-col gap-1.5">
            <div className="w-full text-base text-textColor/70 flex flex-row justify-start items-center gap-1.5">
              {movie?.genres?.map((genr) => (
                <h3
                  key={genr.name}
                  className=" hover:text-secondeColor cursor-pointer tracking-wide"
                >
                  {genr.name},
                </h3>
              ))}
            </div>

            <div className="w-full text-textColor/70 capitalize drop-shadow-lg flex flex-row justify-start items-center gap-6">
              <div className="flex flex-row justify-start items-center gap-1.5">
                Language :
                <h3 className="text-base capitalize flex flex-row justify-center items-center gap-1.5">
                  {movie?.original_language}
                </h3>
              </div>
              <div className="flex flex-row justify-start items-center gap-1.5">
                spoken languages :
                {movie?.spoken_languages?.map((lang) => (
                  <h3
                    key={lang.name}
                    className="text-base flex flex-row justify-center items-center gap-1.5"
                  >
                    {lang.name}
                  </h3>
                ))}
              </div>
            </div>

            <div className="w-full text-base font-light text-textColor/70 capitalize drop-shadow-lg flex flex-row justify-start items-center gap-1.5">
              production companies :
              {movie?.production_companies?.map((companie) => (
                <h3 key={companie.name}>{companie.name},</h3>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section className="w-full flex flex-col gap-5">
        <TitleContainer title="Top Billed Cast" />
        <div className="w-full">
          <Swiper
            className="w-full h-full overflow-x-hidden"
            spaceBetween={15}
            speed={1500}
            freeMode={true}
            mousewheel={true}
            slidesPerView={3.3}
            grabCursor={true}
            modules={[Mousewheel, FreeMode, EffectCreative]}
          >
            {trailer &&
              trailer.map((items) => (
                <SwiperSlide key={items?.id}>
                  <div
                    key={items.id}
                    className="w-full h-auto bg-primeryColorDarker/50 p-3 rounded-xl flex flex-col justify-start items-start gap-3 overflow-hidden"
                  >
                    <MediaPlayer
                      src={`youtube/${items.key}`}
                      aspectRatio="16/9"
                      viewType="video"
                      load="visible"
                      posterLoad="visible"
                      controls="true"
                      className="w-full rounded-lg"
                    >
                      <MediaProvider />
                    </MediaPlayer>
                    <h4 className="w-full font-normal text-base text-left text-textColor/70">
                      {items?.name?.length >= 40
                        ? `${items?.name?.slice(0, 40)}...`
                        : items?.name}
                    </h4>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </section>

      <section className="w-full flex flex-col gap-5">
        <TitleContainer title="Top Billed Cast" />
        <ItemActor data={cast} />
      </section>
    </section>

    // <Swiper
    //   className=""
    //   spaceBetween={0}
    //   speed={1500}
    //   slidesPerView={1}
    //   grabCursor={true}
    //   centeredSlides={true}
    //   loop={true}
    //   autoplay={{
    //     delay: 6000,
    //     disableOnInteraction: false,
    //   }}
    //   pagination={{
    //     clickable: true,
    //     dynamicBullets: true,
    //   }}
    //   effect={"creative"}
    //   creativeEffect={{
    //     prev: {
    //       shadow: true,
    //       translate: ["-120%", 0, -500],
    //     },
    //     next: {
    //       shadow: true,
    //       translate: ["120%", 0, -500],
    //     },
    //   }}
    //   modules={[Autoplay, Pagination, EffectCreative]}
    // >

    // <SwiperSlide key={movie?.id}>
    //

    //   <div className="w-full px-20 absolute bottom-16 flex flex-col justify-start items-start gap-3.5">
    //     <h1 className="w-full text-left font-bold text-6xl text-textColor drop-shadow-lg">
    //       {movie?.title?.length >= 30 ||
    //       movie?.original_title?.length >= 30 ||
    //       movie?.name?.length >= 30 ||
    //       movie?.original_name?.length >= 30
    //         ? `${movie?.title?.slice(0, 30)}...` ||
    //           `${movie?.original_title?.slice(0, 30)}...` ||
    //           `${movie?.name?.slice(0, 30)}...` ||
    //           `${movie?.original_name?.slice(0, 30)}...`
    //         : movie?.title ||
    //           movie?.original_title ||
    //           movie?.name ||
    //           movie?.original_name}
    //     </h1>
    //     <h3 className="w-1/2 text-left text-lg text-textColor/70 drop-shadow-lg">
    //       {movie?.overview.length >= 130
    //         ? `${movie?.overview.slice(0, 130)}...`
    //         : movie?.overview}
    //     </h3>
    //   </div>
    // </SwiperSlide>
    // ))}
    // </Swiper>
  );
}
