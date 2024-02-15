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

    ///// tv shows
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
        data.map(
          (items, index) =>
            items.vote_average?.toFixed(1) != 0 && (
              <Link
                href={
                  items?.release_date
                    ? `/movie/${items?.id}`
                    : `/tvShows/${items?.id}`
                }
                key={index}
                className="w-full p-5 z-10 relative bg-primeryColorDarker/50 flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-start gap-6 rounded-2xl overflow-hidden"
              >
                <span className="w-full h-full absolute top-0 left-0 -z-10 bg-gradient-to-t from-primeryColorDarker to-transparent/10"></span>
                <Image
                  className="w-full h-full absolute top-0 left-0 opacity-15 blur-xl object-center -z-20 object-cover"
                  src={
                    "https://image.tmdb.org/t/p/w1280/" + items?.backdrop_path
                  }
                  alt={
                    "https://image.tmdb.org/t/p/w1280/" + items?.backdrop_path
                  }
                  width={200}
                  height={200}
                  quality={100}
                  property="true"
                  unoptimized
                />

                <button className="px-5 lg:px-8 h-8 lg:h-10 bg-accentColor/10 hover:bg-accentColor/70 absolute right-5 bottom-5 rounded-full font-normal text-sm tracking-wide text-textColor/90 capitalize duration-300">
                  see more
                </button>

                <div className="w-3/5 lg:w-64 h-80 lg:h-96 relative rounded-xl overflow-hidden">
                  <Image
                    className="w-full h-full object-cover"
                    src={
                      "https://image.tmdb.org/t/p/w500/" + items?.poster_path
                    }
                    alt={
                      "https://image.tmdb.org/t/p/w500/" + items?.poster_path
                    }
                    width={200}
                    height={200}
                    quality={100}
                    property="true"
                    unoptimized
                  />

                  <div className="size-8 pt-1 absolute bottom-0 right-0 text-primeryColor text-sm font-bold bg-secondeColor ring-8 ring-primeryColor flex justify-center items-center rounded-tl-2xl">
                    {items?.vote_average?.toFixed(1)}
                  </div>
                </div>

                <section className="w-full lg:w-4/6 mt-2 flex flex-col justify-start items-start gap-8">
                  <div className="w-full flex flex-row justify-center lg:justify-start items-center gap-3">
                    {/* <h3 className="text-base text-textColor/70 tracking-wider drop-shadow-lg flex flex-row justify-center items-center gap-1.5">
                      <IoTime />
                      {generateTime(items?.runtime)}
                    </h3> */}

                    <h3 className="text-base text-textColor/70 drop-shadow-lg flex flex-row justify-center items-center gap-1.5">
                      <IoCalendar />
                      {items?.first_air_date || items?.release_date} (
                      {items?.origin_country})
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

                  <div className="w-full flex flex-col gap-1.5">
                    <div className="w-full text-base text-textColor/70 capitalize flex flex-row flex-wrap justify-start items-center gap-1.5">
                      Geners :
                      {items?.genre_ids?.map((genr, index) => (
                        <h3
                          key={genr}
                          className=" hover:text-secondeColor cursor-pointer tracking-wide"
                        >
                          {index + Number(1) === items?.genre_ids?.length
                            ? genresMovie.filter((item) => item.id == genr)[0]
                                .name
                            : genresMovie.filter((item) => item.id == genr)[0]
                                .name + ","}
                        </h3>
                      ))}
                    </div>

                    <div className="w-full text-base text-textColor/70 capitalize flex flex-row justify-start items-center gap-1.5">
                      language :
                      <h3 className="text-base text-textColor/70 drop-shadow-lg flex flex-row justify-center items-center gap-1.5">
                        {items?.original_language}
                      </h3>
                    </div>
                  </div>
                </section>
              </Link>
            )
        )}

      {!data && (
        <div className="w-full p-5 z-10 relative bg-primeryColorDarker/50 flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-start gap-6 rounded-2xl overflow-hidden">
          <div className="skeleton w-3/5 lg:w-60 h-80 lg:h-96 bg-textColor/30 opacity-10 rounded-xl"></div>

          <div className="w-full lg:w-4/6 mt-2 flex flex-col justify-start items-start gap-10">
            <div className="w-full flex flex-row justify-center lg:justify-start items-center gap-3">
              <div className="skeleton w-1/3 lg:w-32 h-2 bg-textColor/30 opacity-10"></div>
              <div className="skeleton w-1/3 lg:w-32 h-2 bg-textColor/30 opacity-10"></div>
              <div className="skeleton w-1/3 lg:w-32 h-2 bg-textColor/30 opacity-10"></div>
            </div>

            <div className="w-full flex flex-col justify-start items-start gap-7">
              <div className="skeleton w-full lg:w-2/3 h-5 bg-textColor/30 opacity-10"></div>

              <div className="w-full flex flex-col gap-3">
                <div className="skeleton w-1/2 lg:w-full h-3 bg-textColor/30 opacity-10"></div>
                <div className="skeleton w-1/2 lg:w-full h-3 bg-textColor/30 opacity-10"></div>
                <div className="skeleton w-1/2 lg:w-full h-3 bg-textColor/30 opacity-10"></div>
                <div className="skeleton w-1/2 lg:w-1/2 h-3 bg-textColor/30 opacity-10"></div>
              </div>
            </div>

            <div className="w-full flex flex-col gap-3.5">
              <div className="skeleton w-1/5 lg:w-1/5 h-2 bg-textColor/30 opacity-10"></div>
              <div className="skeleton w-1/4 lg:w-1/4 h-2 bg-textColor/30 opacity-10"></div>
              <div className="skeleton w-1/3 lg:w-1/3 h-2 bg-textColor/30 opacity-10"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
