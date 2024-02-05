"use client";
import Image from "next/image";

import TitleContainer from "@/components/title/TitleContainer";
import ItemActor from "@/components/trendingActor/ItemActor";

import axios from "axios";
import { useState, useEffect } from "react";
import { IoTime, IoCalendar, IoStar } from "react-icons/io5";
import Link from "next/link";
import Trailer from "@/components/trailer/Trailer";

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
    <section className="w-full px-6 lg:px-16 relative h-full min-h-screen flex flex-col justify-start items-center gap-10 lg:gap-16 overflow-x-hidden">
      <span className="w-full h-full absolute z-10 bg-gradient-to-t from-10% from-primeryColor to-transparent/10"></span>
      <Image
        className="w-full h-full absolute z-0 object-cover object-center lg:object-top opacity-10"
        src={"https://image.tmdb.org/t/p/w1280/" + movie?.backdrop_path}
        alt={"https://image.tmdb.org/t/p/w1280/" + movie?.backdrop_path}
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
          <li>{movie?.title || movie?.original_name}</li>
        </ul>
      </div>

      <section className="w-full h-full lg:h-screen z-10 relative lg:pt-20 flex flex-col lg:flex-row justify-start lg:justify-center items-center gap-10">
        <div className="w-3/5 lg:w-1/4 relative rounded-xl overflow-hidden">
          <Image
            className="w-full h-80 lg:h-full object-cover"
            src={"https://image.tmdb.org/t/p/w500/" + movie?.poster_path}
            alt={"https://image.tmdb.org/t/p/w500/" + movie?.poster_path}
            width={200}
            height={200}
            quality={100}
            property="true"
            unoptimized
          />

          <div className="size-8 pt-1 absolute bottom-0 right-0 text-primeryColor text-sm font-bold bg-secondeColor ring-8 ring-primeryColor flex justify-center items-center rounded-tl-2xl">
            {movie?.vote_average?.toFixed(1)}
          </div>
        </div>

        <div className="w-full lg:w-3/4 mt-5 flex flex-col justify-start items-start gap-6">
          <div className="w-full lg:w-auto flex flex-row justify-center lg:justify-start items-center gap-2">
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
              {movie?.vote_average?.toFixed(1)} ({movie?.vote_count})
            </h3>
          </div>

          <div className="w-full flex flex-col justify-start items-start gap-3.5">
            <h1 className="w-full text-left font-bold text-6xl text-textColor drop-shadow-lg">
              {movie?.title || movie?.original_name}
            </h1>

            <p className="w-full text-lg text-textColor/70 drop-shadow-lg">
              <span className="font-bold text-xl text-accentColor/50 italic capitalize ">
                overview :{" "}
              </span>
              {movie?.overview}
            </p>
          </div>

          <section className="w-full flex flex-col gap-3.5">
            <div className="flex flex-col justify-start items-start gap-1.5">
              <h3 className="text-textColor/70">{}</h3>
            </div>

            <div className="w-full text-base text-textColor/70 flex flex-row justify-start items-center gap-1.5">
              {movie?.genres?.map((genr, index) => (
                <h3
                  key={genr.name}
                  className=" hover:text-secondeColor cursor-pointer tracking-wide"
                >
                  {index + Number(1) === movie?.genres?.length
                    ? genr.name
                    : genr.name + ","}
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

            <div className="w-full text-base font-light text-textColor/70 capitalize drop-shadow-lg flex flex-row flex-wrap justify-start items-center gap-1.5">
              production companies :
              {movie?.production_companies?.map((companie, index) => (
                <h3 key={companie.name}>
                  {index + Number(1) === movie?.production_companies?.length
                    ? companie.name
                    : companie.name + ","}
                </h3>
              ))}
            </div>
          </section>
        </div>
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
  );
}
