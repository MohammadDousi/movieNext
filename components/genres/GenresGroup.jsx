"use client";

import axios from "axios";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

export default function GenresGroup() {
  const [changeGenres, setChangeGenres] = useState({ genre: "movie" }); // true movie , false tv shows
  const [geners, setGeners] = useState([]);

  const collapseGenres = useRef("");
  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/genre/${changeGenres.genre}/list?language=en`,
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTRiM2QzNDRiMDAxOTNhMWYxMzEyOWZkNDIzNzdlZSIsInN1YiI6IjY1YjRkZGY2MmZhZjRkMDE3Y2RjMjgzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ldhZGWiYUrMsECw_f-hTacesZEoyzMJEz7njNTnsikg",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setGeners(response.data.genres);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [changeGenres.genre]);

  return (
    <section className="w-full flex flex-col justify-start items-start gap-3">
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
                movies
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

        {/* <section className="w-full grid grid-cols-2 gap-3 duration-300">
          {geners.map((items) => (
            <Link
              key={items.id}
              href={`${items.name.replace(" ", "-")}?genres=${items.id}`}
              className="w-full h-12 text-textColor/70 hover:text-secondeColor text-sm tracking-wide bg-primeryColor hover:bg-textColor/10 flex justify-start items-center rounded-full cursor-pointer"
            >
              <h2 className="w-full text-left px-5">{items.name}</h2>
            </Link>
          ))}
        </section> */}
      </section>

      <div className="collapse lg:collapse-open  bg-primeryColorDarker/50">
        <input type="checkbox" ref={collapseGenres} className="lg:hidden" />
        <div className="collapse-title lg:hidden text-textColor text-xl font-bold capitalize">
          geners
        </div>

        <div className="collapse-content w-full lg:pt-5 flex flex-col justify-start items-start gap-6 duration-300">
          <div className="w-full grid grid-cols-2 gap-3">
            {geners.map((items) => (
              <Link
                key={items.id}
                href={`${items.name.replace(" ", "-")}?genres=${items.id}`}
                className="w-full h-12 text-textColor/70 hover:text-secondeColor text-sm tracking-wide bg-primeryColor hover:bg-textColor/10 flex justify-start items-center rounded-full cursor-pointer"
              >
                <h2 className="w-full text-left px-5">{items.name}</h2>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
