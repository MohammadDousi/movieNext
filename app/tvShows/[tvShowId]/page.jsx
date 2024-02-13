"use client";
import Image from "next/image";

import TitleContainer from "@/components/title/TitleContainer";
import ItemActor from "@/components/trendingActor/ItemActor";

import axios from "axios";
import { useState, useEffect } from "react";
import { IoTime, IoCalendar, IoStar } from "react-icons/io5";
import { HiOutlineStatusOnline } from "react-icons/hi";
import Link from "next/link";
import Trailer from "@/components/trailer/Trailer";
import SeasonsTv from "@/components/seasonsTv/SeasonsTv";
import ToTop from "@/components/toTop/ToTop";

export default function TvShowsPage({ params }) {
  const [tv, setTv] = useState();
  const [cast, setCast] = useState();
  const [trailer, setTrailer] = useState();

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/tv/${params.tvShowId}?language=en-US`,
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTRiM2QzNDRiMDAxOTNhMWYxMzEyOWZkNDIzNzdlZSIsInN1YiI6IjY1YjRkZGY2MmZhZjRkMDE3Y2RjMjgzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ldhZGWiYUrMsECw_f-hTacesZEoyzMJEz7njNTnsikg",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setTv(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/tv/${params.tvShowId}/credits?language=en-US`,
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
      url: `https://api.themoviedb.org/3/tv/${params.tvShowId}/videos?language=en-US`,
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
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const generateTime = (time) => {
    let hour = Math.floor(time / 60);
    let min = Math.floor(time % 60);

    return `${hour}h-${min}m`;
  };

  return (
    <>
      <section className="w-full px-3 lg:px-16 relative h-full min-h-screen flex flex-col justify-start items-center gap-10 lg:gap-16 overflow-x-hidden">
        <span className="w-full h-5/6 absolute z-10 bg-gradient-to-t from-5% from-primeryColor to-transparent"></span>
        <Image
          className="w-full h-5/6 absolute z-0 object-cover object-center lg:object-top opacity-10"
          src={"https://image.tmdb.org/t/p/w1280/" + tv?.backdrop_path}
          alt={"https://image.tmdb.org/t/p/w1280/" + tv?.backdrop_path}
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
            <li>Tv Shows</li>
            <li>{tv?.title || tv?.original_name}</li>
          </ul>
        </div>

        <section className="w-full h-full lg:h-screen z-10 relative lg:pt-24 flex flex-col lg:flex-row justify-start lg:justify-center items-center gap-10">
          <div className="w-3/5 lg:w-1/4 relative rounded-xl overflow-hidden">
            <Image
              className="w-full h-80 lg:h-full object-cover"
              src={"https://image.tmdb.org/t/p/w500/" + tv?.poster_path}
              alt={"https://image.tmdb.org/t/p/w500/" + tv?.poster_path}
              width={200}
              height={200}
              quality={100}
              property="true"
              unoptimized
            />

            <div className="size-8 lg:size-10 pt-1 absolute bottom-0 right-0 text-primeryColor text-sm lg:text-base font-bold bg-secondeColor ring-8 ring-primeryColor flex justify-center items-center rounded-tl-2xl">
              {tv?.vote_average?.toFixed(1)}
            </div>
          </div>

          <div className="w-full lg:w-3/4 mt-5 flex flex-col justify-start items-start gap-6">
            <div className="w-full lg:w-auto flex flex-row flex-wrap justify-center lg:justify-start items-center gap-2 lg:gap-6">
              <h3 className="text-base text-textColor/70 tracking-wider drop-shadow-lg flex flex-row justify-center items-center gap-1.5">
                <IoTime />
                {generateTime(tv?.runtime)}
              </h3>

              <h3 className="text-base text-secondeColor tracking-wider drop-shadow-lg flex flex-row justify-center items-center gap-1.5">
                <HiOutlineStatusOnline />
                {tv?.status}
              </h3>

              <h3 className="text-base text-textColor/70 drop-shadow-lg flex flex-row justify-center items-center gap-1.5">
                <IoCalendar />
                {tv?.first_air_date} (
                {tv?.production_countries?.map((counters, index) =>
                  index + Number(1) === tv?.production_countries?.length
                    ? counters.iso_3166_1
                    : counters.iso_3166_1 + ","
                )}
                )
              </h3>

              <h3 className="text-base text-secondeColor drop-shadow-lg flex flex-row justify-center items-center gap-1.5">
                <IoStar />
                {tv?.vote_average?.toFixed(1)} ({tv?.vote_count})
              </h3>
            </div>

            <div className="w-full flex flex-col justify-start items-start gap-3.5">
              <h1 className="w-full text-left font-bold text-5xl lg;text-6xl text-textColor drop-shadow-lg">
                {tv?.title || tv?.original_name}
              </h1>

              <p className="w-full text-lg text-textColor/70 drop-shadow-lg">
                <span className="font-bold text-xl text-accentColor/50 italic capitalize ">
                  overview :{" "}
                </span>
                {tv?.overview}
              </p>
            </div>

            <section className="w-full flex flex-col gap-3.5">
              <div className="w-full text-textColor/70 capitalize drop-shadow-lg flex flex-row justify-start items-center gap-6">
                <div className="flex flex-row justify-start items-center gap-1.5">
                  seasons :
                  <h3 className="text-base capitalize flex flex-row justify-center items-center gap-1.5">
                    {tv?.number_of_seasons}
                  </h3>
                </div>

                <div className="flex flex-row justify-start items-center gap-1.5">
                  episodes :
                  <h3 className="text-base flex flex-row justify-center items-center gap-1.5">
                    {tv?.number_of_episodes}
                  </h3>
                </div>
              </div>

              <div className="w-full text-base text-textColor/70 flex flex-row flex-wrap justify-start items-center gap-1.5">
                {tv?.genres?.map((genr, index) => (
                  <h3
                    key={genr.name}
                    className=" hover:text-secondeColor cursor-pointer tracking-wide"
                  >
                    {index + Number(1) === tv?.genres?.length
                      ? genr.name
                      : genr.name + ","}
                  </h3>
                ))}
              </div>

              <div className="w-full text-textColor/70 capitalize drop-shadow-lg flex flex-row flex-wrap justify-start items-center gap-6">
                <div className="flex flex-row flex-wrap justify-start items-center gap-1.5">
                  Language :
                  <h3 className="text-base capitalize flex flex-row justify-center items-center gap-1.5">
                    {tv?.original_language}
                  </h3>
                </div>

                <div className="flex flex-row flex-wrap justify-start items-center gap-1.5">
                  spoken languages :
                  {tv?.spoken_languages?.map((lang , index) => (
                    <h3
                      key={lang.name}
                      className="text-base"
                    >
                      {index + Number(1) === tv?.spoken_languages?.length
                        ? lang.name
                        : lang.name + ","}
                    </h3>
                  ))}
                </div>
              </div>

              <div className="w-full text-base font-light text-textColor/70 capitalize drop-shadow-lg flex flex-row flex-wrap justify-start items-center gap-1.5">
                production companies :
                {tv?.production_companies?.map((companie, index) => (
                  <h3 key={companie.name}>
                    {index + Number(1) === tv?.production_companies?.length
                      ? companie.name
                      : companie.name + ","}
                  </h3>
                ))}
              </div>
            </section>
          </div>
        </section>

        <section className="w-full z-10 flex flex-col gap-5">
          <TitleContainer title="seasons" />
          <SeasonsTv data={tv?.seasons} />
        </section>

        <section className="w-full z-10 flex flex-col gap-5">
          <TitleContainer title="trailer" />
          <Trailer data={trailer} />
        </section>

        <section className="w-full z-10 flex flex-col gap-5">
          <TitleContainer title="Top Billed Cast" />
          <ItemActor data={cast} />
        </section>
      </section>
      <ToTop />
    </>
  );
}
