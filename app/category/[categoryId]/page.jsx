"use client";
import Image from "next/image";

import axios from "axios";
import { useState, useEffect } from "react";
import GenresGroup from "@/components/genres/GenresGroup";
import ItemCategory from "@/components/itemCategory/ItemCategory";
import Link from "next/link";

export default function CategoryPage({ params }) {
  console.log(params.categoryId);

  const [movie, setMovie] = useState();

  let category = "";
  switch (params.categoryId) {
    case "popular-movie":
      category = "movie/popular";
      break;
    case "upcoming-movie":
      category = "movie/upcoming";
      break;
    case "top-250-movie":
      category = "movie/top_rated";
      break;
    case "now-playing-movie":
      category = "movie/now_playing";
      break;
    case "top-250-serial":
      category = "tv/top_rated";
      break;
    case "popular-serial":
      category = "tv/popular";
      break;
    case "on-air-serial":
      category = "tv/on_the_air";
      break;
    default:
      category = category = "popular";
      break;
  }

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/${category}?language=en-US`,
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTRiM2QzNDRiMDAxOTNhMWYxMzEyOWZkNDIzNzdlZSIsInN1YiI6IjY1YjRkZGY2MmZhZjRkMDE3Y2RjMjgzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ldhZGWiYUrMsECw_f-hTacesZEoyzMJEz7njNTnsikg",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setMovie(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <section className="w-full px-16 h-full flex flex-col justify-start items-start gap-5">
      <section className="w-full mt-24">
        <div className="breadcrumbs text-base text-textColor/50 *:capitalize">
          <ul>
            <li>
              <Link href={`/`}>Home</Link>
            </li>
            <li>category</li>
          </ul>
        </div>
      </section>

      <section className="w-full flex flex-row justify-start items-start gap-5 duration-300">
        <section className="w-full h-auto flex flex-col justify-start items-start gap-7">
          <ItemCategory data={movie} />
        </section>

        <section className="w-[30rem] relative flex flex-col justify-start items-start gap-5 duration-300">
          <GenresGroup />
        </section>
      </section>
    </section>
  );
}
