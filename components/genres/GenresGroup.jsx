"use client";

import axios from "axios";
import React, { useState, useEffect } from "react";

export default function GenresGroup() {

  const [changeGenres, setChangeGenres] = useState({ genre: "movie" }); // true movie , false tv shows

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

  const genresTv = [
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

  // useEffect(() => {
  //   const options = {
  //     method: "GET",
  //     url: `https://api.themoviedb.org/3/genre/tv/list?language=en`,
  //     headers: {
  //       accept: "application/json",
  //       Authorization:
  //         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTRiM2QzNDRiMDAxOTNhMWYxMzEyOWZkNDIzNzdlZSIsInN1YiI6IjY1YjRkZGY2MmZhZjRkMDE3Y2RjMjgzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ldhZGWiYUrMsECw_f-hTacesZEoyzMJEz7njNTnsikg",
  //     },
  //   };

  //   axios
  //     .request(options)
  //     .then(function (response) {
  //       setGenresTv(response.data.genres);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // }, []);

  return (
    <section className="w-full p-5 bg-primeryColorDarker/50 flex flex-col justify-start items-start gap-6 rounded-2xl duration-300">
      <div className="w-full flex flex-row justify-between items-center">
        <h2 className="text-textColor text-xl font-bold capitalize flex items-center">
          genres
        </h2>

        <div className="w-full flex flex-row justify-end items-end gap-1.5">
          <div className="flex justify-center items-center">
            <input
              type="radio"
              name="genresRaido"
              id="movie"
              onChange={(e) => {
                setChangeGenres({ genre: e.target.id });
              }}
              checked={changeGenres.genre === "movie" && true}
              className="peer hidden"
            />
            <label
              htmlFor="movie"
              className="py-1 px-5 text-textColor/70 capitalize text-xs peer-checked:font-bold peer-checked:text-primeryColorDarker bg-textColor/10 peer-checked:bg-secondeColor backdrop-blur-xl hover:backdrop-blur-0 border-0 hover:border hover:border-textColor/70 peer-checked:border peer-checked:border-secondeColor rounded-full cursor-pointer duration-300"
            >
              movie
            </label>
          </div>

          <div className="flex justify-center items-center">
            <input
              type="radio"
              name="genresRaido"
              id="tv"
              onChange={(e) => {
                setChangeGenres({ genre: e.target.id });
              }}
              checked={changeGenres.genre === "tv" && true}
              className="peer hidden"
            />
            <label
              htmlFor="tv"
              className="py-1 px-5 text-textColor/70 capitalize text-xs peer-checked:font-bold peer-checked:text-primeryColorDarker bg-textColor/10 peer-checked:bg-secondeColor backdrop-blur-xl hover:backdrop-blur-0 border-0 hover:border hover:border-textColor/70 peer-checked:border peer-checked:border-secondeColor rounded-full cursor-pointer duration-300"
            >
              tv shows
            </label>
          </div>
        </div>
      </div>

      {changeGenres.genre === "movie" && (
        <section className="w-full grid grid-cols-2 gap-3 duration-300">
          {genresMovie.map((items) => (
            <div
              key={items.id}
              className="w-full h-12 text-textColor/70 hover:text-secondeColor text-sm tracking-wide bg-primeryColor hover:bg-textColor/10 flex justify-start items-center rounded-full cursor-pointer"
            >
              <h2 className="w-full text-left px-5">{items.name}</h2>
            </div>
          ))}
        </section>
      )}
      {changeGenres.genre === "tv" && (
        <section className="w-full grid grid-cols-2 gap-3 duration-300">
          {genresTv.map((items) => (
            <div
              key={items.id}
              className="w-full h-12 text-textColor/70 hover:text-secondeColor text-sm tracking-wide bg-primeryColor hover:bg-textColor/10 flex justify-start items-center rounded-full cursor-pointer"
            >
              <h2 className="w-full text-left px-5">{items.name}</h2>
            </div>
          ))}
        </section>
      )}
    </section>
  );
}
