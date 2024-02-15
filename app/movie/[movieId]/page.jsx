"use client";
import Image from "next/image";
import Link from "next/link";

import TitleContainer from "@/components/title/TitleContainer";
import ItemActor from "@/components/trendingActor/ItemActor";
import Trailer from "@/components/trailer/Trailer";
import ToTop from "@/components/toTop/ToTop";

import { IoTime, IoCalendar, IoStar } from "react-icons/io5";
import { getCastItem, getSingleItem, getTrialerItem } from "@/hooks/querys";

export default function MoviePage({ params }) {
  const {
    data: dataMovie,
    isError: isErrorMovie,
    error: errorMovie,
  } = getSingleItem("movie", params.movieId);
  const {
    data: dataCast,
    isError: isErrorCast,
    error: errorCast,
  } = getCastItem("movie", params.movieId);

  const {
    data: dataTrialer,
    isError: isErrorTrialer,
    error: errorTrialer,
  } = getTrialerItem("movie", params.movieId);

  return (
    <>
      <section className="w-full px-6 lg:px-16 relative h-full min-h-screen flex flex-col justify-start items-center gap-10 lg:gap-16 overflow-x-hidden">
        <span className="w-full h-4/6 absolute z-10 bg-gradient-to-t from-5% from-primeryColor to-transparent"></span>
        <Image
          className="w-full h-4/6 absolute z-0 object-cover object-center lg:object-top opacity-10"
          src={
            "https://image.tmdb.org/t/p/w1280/" + dataMovie?.data?.backdrop_path
          }
          alt={
            "https://image.tmdb.org/t/p/w1280/" + dataMovie?.data?.backdrop_path
          }
          width={1200}
          height={1200}
          quality={100}
          property="true"
          unoptimized
        />

        <div className="breadcrumbs w-full lg:absolute lg:top-0 lg:left-0 lg:ml-16 mt-20 lg:mt-24 z-30 text-base text-textColor/50 *:capitalize">
          <ul>
            <li>
              <Link href={`/`}>Home</Link>
            </li>
            <li>Movie</li>
            <li>{dataMovie?.data?.title || dataMovie?.data?.original_name}</li>
          </ul>
        </div>

        <section className="w-full h-full lg:h-full min-h-screen z-10 relative lg:pt-24 flex flex-col lg:flex-row justify-start lg:justify-center items-center gap-10">
          <div className="w-3/5 lg:w-1/4 relative rounded-xl overflow-hidden">
            <Image
              className="w-full h-80 lg:h-full object-cover"
              src={
                "https://image.tmdb.org/t/p/w500/" +
                dataMovie?.data?.poster_path
              }
              alt={
                "https://image.tmdb.org/t/p/w500/" +
                dataMovie?.data?.poster_path
              }
              width={200}
              height={200}
              quality={100}
              property="true"
              unoptimized
            />

            <div className="size-8 pt-1 absolute bottom-0 right-0 text-primeryColor text-sm font-bold bg-secondeColor ring-8 ring-primeryColor flex justify-center items-center rounded-tl-2xl">
              {dataMovie?.data?.vote_average?.toFixed(1)}
            </div>
          </div>

          <div className="w-full lg:w-3/4 mt-5 flex flex-col justify-start items-start gap-6">
            <div className="w-full lg:w-auto flex flex-row flex-wrap justify-center lg:justify-start items-center gap-2 lg:gap-6">
              <h3 className=" text-base text-textColor/70 tracking-wider drop-shadow-lg flex flex-row justify-center items-center gap-1.5">
                <IoTime />
                {` ${Math.floor(dataMovie?.data?.runtime / 60)}h-${Math.floor(
                  dataMovie?.data?.runtime % 60
                )}m`}
              </h3>

              <h3 className="text-base text-textColor/70 drop-shadow-lg flex flex-row justify-center items-center gap-1.5">
                <IoCalendar />
                {dataMovie?.data?.release_date} (
                {dataMovie?.data?.production_countries?.map((counters, index) =>
                  index + Number(1) ===
                  dataMovie?.data?.production_countries?.length
                    ? counters.iso_3166_1
                    : counters.iso_3166_1 + ","
                )}
                )
              </h3>

              <h3 className="text-base text-secondeColor drop-shadow-lg flex flex-row justify-center items-center gap-1.5">
                <IoStar />
                {dataMovie?.data?.vote_average?.toFixed(1)} (
                {dataMovie?.data?.vote_count})
              </h3>
            </div>

            <div className="w-full flex flex-col justify-start items-start gap-3.5">
              <h1 className="w-full text-left font-bold text-5xl lg:text-6xl text-textColor drop-shadow-lg">
                {dataMovie?.data?.title || dataMovie?.data?.original_name}
              </h1>

              <p className="w-full text-lg text-textColor/70 drop-shadow-lg">
                <span className="font-bold text-xl text-accentColor/50 italic capitalize ">
                  overview :{" "}
                </span>
                {dataMovie?.data?.overview}
              </p>
            </div>

            <section className="w-full flex flex-col gap-3.5">
              <div className="flex flex-col justify-start items-start gap-1.5">
                <h3 className="text-textColor/70">{}</h3>
              </div>

              <div className="w-full text-base text-textColor/70 flex flex-row flex-wrap justify-start items-center gap-1.5">
                {dataMovie?.data?.genres?.map((genr, index) => (
                  <h3
                    key={genr.name}
                    className=" hover:text-secondeColor cursor-pointer tracking-wide"
                  >
                    {index + Number(1) === dataMovie?.data?.genres?.length
                      ? genr.name
                      : genr.name + ","}
                  </h3>
                ))}
              </div>

              <div className="w-full text-textColor/70 capitalize drop-shadow-lg flex flex-row flex-wrap justify-start items-center gap-6">
                <div className="flex flex-row flex-wrap justify-start items-center gap-1.5">
                  Language :
                  <h3 className="text-base capitalize flex flex-row justify-center items-center gap-1.5">
                    {dataMovie?.data?.original_language}
                  </h3>
                </div>

                <div className="flex flex-row flex-wrap justify-start items-center gap-1.5">
                  spoken languages :
                  {dataMovie?.data?.spoken_languages?.map((lang, index) => (
                    <h3 key={lang.name} className="text-base">
                      {index + Number(1) ===
                      dataMovie?.data?.spoken_languages?.length
                        ? lang.name
                        : lang.name + ","}
                    </h3>
                  ))}
                </div>
              </div>

              <div className="w-full text-base font-light text-textColor/70 capitalize drop-shadow-lg flex flex-row flex-wrap justify-start items-center gap-1.5">
                production companies :
                {dataMovie?.data?.production_companies?.map(
                  (companie, index) => (
                    <h3 key={companie.name}>
                      {index + Number(1) ===
                      dataMovie?.data?.production_companies?.length
                        ? companie.name
                        : companie.name + ","}
                    </h3>
                  )
                )}
              </div>
            </section>
          </div>
        </section>

        <section className="w-full z-10 flex flex-col gap-5">
          <TitleContainer title="trailer" />

          {isErrorTrialer && (
            <h5 className="w-full h-52 text-textColor/70 text-base font-normal tracking-wide capitalize">
              something went wrong - {errorTrialer.message}
            </h5>
          )}
          <Trailer data={dataTrialer?.data?.results} />
        </section>

        <section className="w-full z-10 flex flex-col gap-5">
          <TitleContainer title="Top Billed Cast" />
          {isErrorCast && (
            <h5 className="w-full h-52 text-textColor/70 text-base font-normal tracking-wide capitalize">
              something went wrong - {errorCast.message}
            </h5>
          )}
          <ItemActor data={dataCast?.data?.cast} />
        </section>
      </section>
      <ToTop />
    </>
  );
}
