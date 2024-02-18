"use client";
import Image from "next/image";

import logo from "../../../public/logo.png";
import { IoCalendar, IoStar } from "react-icons/io5";

import TitleContainer from "@/components/title/TitleContainer";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import SeasonsTv from "@/components/seasonsTv/SeasonsTv";
import ToTop from "@/components/toTop/ToTop";

import {
  getSingleCastItem,
  getSingleMovieCastItem,
  getSingleTvCastItem,
} from "@/hooks/querys";

export default function CastPage({ params }) {
  const {
    data: dataCast,
    isError: isErrorCast,
    error: errorCast,
  } = getSingleCastItem(params.castId);

  const {
    data: dataMovieCast,
    isError: isErrorMovieCast,
    error: errorMovieCast,
  } = getSingleMovieCastItem(params.castId);

  const {
    data: dataTvCast,
    isError: isErrorTvCast,
    error: errorTvCast,
  } = getSingleTvCastItem(params.castId);

  console.log(dataMovieCast?.data?.cast.length);

  return (
    <>
      <section className="w-full px-6 lg:px-16 relative h-full min-h-screen flex flex-col justify-start items-center gap-10 lg:gap-16 overflow-x-hidden">
        <div className="w-full lg:top-0 lg:left-0 mt-20 lg:mt-24 z-30">
          <Breadcrumbs
            data={[
              { address: "home", link: "/" },
              { address: "Cast and crew", link: "" },
              { address: dataCast?.data?.name, link: "" },
            ]}
          />
        </div>

        <section className="w-full h-full lg:h-full z-10 relative flex flex-col lg:flex-row justify-start lg:justify-start items-start gap-10">
          <div className="w-full lg:w-auto flex justify-center items-center">
            <Image
              width={100}
              height={100}
              quality={100}
              unoptimized
              className={
                dataCast?.data?.profile_path != null || ""
                  ? "w-48 lg:w-64 h-64 lg:h-80 object-cover object-top rounded-full p-2 ring-1 ring-textColor/10"
                  : "w-48 lg:w-64 h-64 lg:h-80 p-14 object-contain object-center rounded-full saturate-0 opacity-50 ring-1 ring-textColor/10"
              }
              src={
                dataCast?.data?.profile_path != null || ""
                  ? `https://image.tmdb.org/t/p/original${dataCast?.data?.profile_path}`
                  : logo
              }
              alt={
                dataCast?.data?.profile_path != null || ""
                  ? `https://image.tmdb.org/t/p/original${dataCast?.data?.profile_path}`
                  : logo
              }
            />
          </div>
          <div className="w-full flex flex-col justify-start items-start gap-6">
            <div className="w-full lg:w-auto flex flex-row flex-wrap justify-center lg:justify-start items-center gap-2 lg:gap-6">
              <h3 className="text-base text-textColor/70 drop-shadow-lg flex flex-row justify-center items-center gap-1.5 capitalize">
                <IoCalendar />
                {dataCast?.data?.birthday} ( {dataCast?.data?.place_of_birth} )
              </h3>
              {dataCast?.data?.deathday && (
                <h3 className="text-base text-textColor/70 drop-shadow-lg flex flex-row justify-center items-center gap-1.5 capitalize">
                  <IoCalendar />
                  {dataCast?.data?.deathday}
                </h3>
              )}
              <h3 className="text-base text-textColor/70 drop-shadow-lg flex flex-row justify-center items-center gap-1.5 capitalize">
                <IoCalendar />
                {dataCast?.data?.gender == 2 && `men`}
              </h3>
              <h3 className="text-base text-secondeColor drop-shadow-lg flex flex-row justify-center items-center gap-1.5 capitalize">
                <IoStar />
                {dataCast?.data?.known_for_department}
              </h3>
            </div>

            <div className="w-full flex flex-col justify-start items-start gap-3.5">
              <h1 className="w-full text-left font-bold text-5xl lg:text-6xl text-textColor drop-shadow-lg">
                {dataCast?.data?.name}
              </h1>

              <p className="w-full text-lg text-textColor/50 drop-shadow-lg">
                <span className="font-bold text-xl text-accentColor/50 italic capitalize">
                  biography :{" "}
                </span>
                {dataCast?.data?.biography}
              </p>
            </div>
          </div>
        </section>

        {dataMovieCast?.data?.cast != "" && (
          <section className="w-full z-10 flex flex-col gap-5">
            <TitleContainer title={`Movie actor - ${dataCast?.data?.name}`} />
            <SeasonsTv data={dataMovieCast?.data?.cast} typeLink="movie" />
          </section>
        )}
        {dataMovieCast?.data?.crew != "" && (
          <section className="w-full z-10 flex flex-col gap-5">
            <TitleContainer
              title={`Behind the scenes of the movie - ${dataCast?.data?.name}`}
            />
            <SeasonsTv data={dataMovieCast?.data?.crew} typeLink="movie" />
          </section>
        )}
        {dataTvCast?.data?.cast != "" && (
          <section className="w-full z-10 flex flex-col gap-5">
            <TitleContainer title={`tv actor - ${dataCast?.data?.name}`} />
            <SeasonsTv data={dataTvCast?.data?.cast} typeLink="tv" />
          </section>
        )}
        {dataTvCast?.data?.crew != "" && (
          <section className="w-full z-10 flex flex-col gap-5">
            <TitleContainer
              title={`Behind the scenes of the tv - ${dataCast?.data?.name}`}
            />
            <SeasonsTv data={dataTvCast?.data?.crew} typeLink="tv" />
          </section>
        )}
      </section>
      <ToTop />
    </>
  );
}
