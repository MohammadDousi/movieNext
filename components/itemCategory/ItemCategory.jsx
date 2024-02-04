import React from "react";

import Image from "next/image";

import { IoTime, IoCalendar, IoStar } from "react-icons/io5";
import Link from "next/link";

export default function ItemCategory({ data }) {

  let genrName = "";
  const genresMovie = [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 35,
      name: "Comedy",
    },
    {
      id: 80,
      name: "Crime",
    },
    {
      id: 99,
      name: "Documentary",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 10751,
      name: "Family",
    },
    {
      id: 14,
      name: "Fantasy",
    },
    {
      id: 36,
      name: "History",
    },
    {
      id: 27,
      name: "Horror",
    },
    {
      id: 10402,
      name: "Music",
    },
    {
      id: 9648,
      name: "Mystery",
    },
    {
      id: 10749,
      name: "Romance",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
    {
      id: 10770,
      name: "TV Movie",
    },
    {
      id: 53,
      name: "Thriller",
    },
    {
      id: 10752,
      name: "War",
    },
    {
      id: 37,
      name: "Western",
    },
  ];

  const genresSerial = [
    {
      id: 10759,
      name: "Action & Adventure",
    },
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 35,
      name: "Comedy",
    },
    {
      id: 80,
      name: "Crime",
    },
    {
      id: 99,
      name: "Documentary",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 10751,
      name: "Family",
    },
    {
      id: 10762,
      name: "Kids",
    },
    {
      id: 9648,
      name: "Mystery",
    },
    {
      id: 10763,
      name: "News",
    },
    {
      id: 10764,
      name: "Reality",
    },
    {
      id: 10765,
      name: "Sci-Fi & Fantasy",
    },
    {
      id: 10766,
      name: "Soap",
    },
    {
      id: 10767,
      name: "Talk",
    },
    {
      id: 10768,
      name: "War & Politics",
    },
    {
      id: 37,
      name: "Western",
    },
  ];

  const generateTime = (time) => {
    let hour = Math.floor(time / 60);
    let min = Math.floor(time % 60);

    return `${hour}h-${min}m`;
  };

  return (
    <>
      {data &&
        data.map((items, index) => (
          items.vote_average.toFixed(1) != 0 && (
          <Link
            href={`/movie/${items?.id}`}
            key={items.id + index}
            className="w-full p-5 z-10 relative bg-primeryColorDarker/50 flex flex-row justify-start items-start gap-6 rounded-2xl overflow-hidden"
          >
            <span className="w-full h-full absolute top-0 left-0 -z-10 bg-gradient-to-t from-primeryColorDarker to-transparent/10"></span>

            <Image
              className="w-full h-full absolute top-0 left-0 opacity-15 blur-xl object-center -z-20 object-cover"
              src={"https://image.tmdb.org/t/p/w1280/" + items?.backdrop_path}
              alt={"https://image.tmdb.org/t/p/w1280/" + items?.backdrop_path}
              width={200}
              height={200}
              quality={100}
              property="true"
              unoptimized
            />

            <div className="h-96 relative rounded-xl overflow-hidden">
              <Image
                className="w-full h-full object-cover"
                src={"https://image.tmdb.org/t/p/w500/" + items?.poster_path}
                alt={"https://image.tmdb.org/t/p/w500/" + items?.poster_path}
                width={200}
                height={200}
                quality={100}
                property="true"
                unoptimized
              />

              <div className="size-10 pt-1 absolute bottom-0 right-0 text-primeryColor text-base font-bold bg-secondeColor ring-8 ring-primeryColor flex justify-center items-center rounded-tl-2xl">
                {items?.vote_average?.toFixed(1)}
              </div>
            </div>

            <div className="w-4/6 mt-2 flex flex-col justify-start items-start gap-6">
              <div className="flex flex-row justify-start items-center gap-6">
                <h3 className=" text-base text-textColor/70 tracking-wider drop-shadow-lg flex flex-row justify-center items-center gap-1.5">
                  <IoTime />
                  {generateTime(items?.runtime)}
                </h3>

                <h3 className="text-base text-textColor/70 drop-shadow-lg flex flex-row justify-center items-center gap-1.5">
                  <IoCalendar />
                  {items?.first_air_date || items?.release_date}{(items?.origin_country)}
                </h3>

                <h3 className="text-base text-secondeColor drop-shadow-lg flex flex-row justify-center items-center gap-1.5">
                  <IoStar />
                  {items?.vote_average?.toFixed(1)} ({items?.vote_count})
                </h3>
              </div>

              <div className="w-full flex flex-col justify-start items-start gap-3.5">
                <h1 className="w-full text-left font-bold text-5xl text-textColor/90 drop-shadow-lg">
                  {items?.title || items?.original_name}
                </h1>

                <p className="w-full text-lg text-textColor/70 drop-shadow-lg">
                  <span className="font-bold text-lg text-accentColor/50 italic capitalize ">
                    overview :{" "}
                  </span>
                  {items?.overview?.length >= 250
                    ? `${items?.overview?.slice(0, 250)}...`
                    : items?.overview}
                </p>
              </div>

              <div className="w-full flex flex-col gap-3.5">
                <div className="flex flex-col justify-start items-start gap-1.5">
                  <h3 className="text-textColor/70">{}</h3>
                </div>

                <div className="w-full text-base text-textColor/70 flex flex-row justify-start items-center gap-1.5">
                  {items?.genre_ids?.map((genr, index) => (
                    <h3
                      key={genr}
                      className=" hover:text-secondeColor cursor-pointer tracking-wide"
                    >
                      {index + Number(1) === items?.genre_ids?.length
                        ? genr
                        : genr + ","}
                    </h3>
                  ))}
                </div>

                <div className="text-textColor/70 capitalize drop-shadow-lg flex flex-row justify-start items-center gap-1.5">
                  Language :
                  <h3 className="text-base capitalize flex flex-row justify-center items-center gap-1.5">
                    {items?.original_language}
                  </h3>
                </div>
              </div>

            </div>
          </Link>
          )
        ))}
    </>
  );
}
