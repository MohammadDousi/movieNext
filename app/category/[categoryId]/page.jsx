"use client";

import axios from "axios";
import { useState, useEffect, useCallback, Suspense } from "react";
import GenresGroup from "@/components/genres/GenresGroup";
import ItemCategory from "@/components/itemCategory/ItemCategory";
import Link from "next/link";
import ToTop from "@/components/toTop/ToTop";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Loading from "@/app/loading";
import { data } from "autoprefixer";
import Pagination from "@/components/pagination/Pagination";

export default function CategoryPage({ params }) {
  const [movie, setMovie] = useState();
  const [totalPage, setTotalPage] = useState();
  const [page, setPage] = useState(1);
  const [genersId, setGenersId] = useState();

  const router = useRouter();
  const pathname = usePathname();

  const searchParams = useSearchParams();
  const search = searchParams.get("page");
  const genres = searchParams.get("genres");

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const baseUrl = "https://api.themoviedb.org/3/";
  const [genrateUrl, setGenrateUrl] = useState("");

  let category = "";

  useEffect(() => {
    search && setPage(search);
    genres && setGenersId(genres);
  }, []);

  useEffect(() => {
    switch (decodeURIComponent(params.categoryId)) {
      case "popular movie":
        category = "movie/popular";
        setGenrateUrl(`${category}?language=en-US&page=${search || page}`);
        break;
      case "upcoming movie":
        category = "movie/upcoming";
        setGenrateUrl(`${category}?language=en-US&page=${search || page}`);
        break;
      case "top 250 movie":
        category = "movie/top_rated";
        setGenrateUrl(`${category}?language=en-US&page=${search || page}`);
        break;
      case "now playing movie":
        category = "movie/now_playing";
        setGenrateUrl(`${category}?language=en-US&page=${search || page}`);
        break;
      case "trending movie":
        category = "trending/movie/day";
        setGenrateUrl(`${category}?language=en-US&page=${search || page}`);
        break;

      case "Action movie":
      case "Adventure movie":
      case "Animation movie":
      case "Comedy movie":
      case "Crime movie":
      case "Documentary movie":
      case "Drama movie":
      case "Family movie":
      case "Fantasy movie":
      case "History movie":
      case "Horror movie":
      case "Music movie":
      case "Mystery movie":
      case "Romance movie":
      case "Science Fiction movie":
      case "TV Movie movie":
      case "Thriller movie":
      case "War movie":
      case "Western movie":
        setGenrateUrl(
          `discover/movie?language=en-US&page=${
            page || search
          }&sort_by=popularity.desc&with_genres=${genersId}`
        );
        break;

      // ////////////////////////////////////////////////////
      case "trending tv shows":
        category = "trending/tv/day";
        setGenrateUrl(`${category}?language=en-US&page=${search || page}`);
        break;

      case "top 250 tv shows":
        category = "tv/top_rated";
        setGenrateUrl(`${category}?language=en-US&page=${search || page}`);
        break;
      case "popular tv shows":
        category = "tv/popular";
        setGenrateUrl(`${category}?language=en-US&page=${search || page}`);
        break;
      case "on air tv shows":
        category = "tv/on_the_air";
        setGenrateUrl(`${category}?language=en-US&page=${search || page}`);
        break;

      case "Action & Adventure tv":
      case "Animation tv":
      case "Comedy tv":
      case "Crime tv":
      case "Documentary tv":
      case "Drama tv":
      case "Family tv":
      case "Kids tv":
      case "Mystery tv":
      case "News tv":
      case "Reality tv":
      case "Sci-Fi & Fantasy tv":
      case "Soap tv":
      case "Talk tv":
      case "War & Politics tv":
      case "Western tv":
        setGenrateUrl(
          `discover/tv?language=en-US&page=${
            page || search
          }&sort_by=popularity.desc&with_genres=${genersId}`
        );
        break;

      default:
        category = category = "popular";
        break;
    }

    if (page != (null || "")) {
      router.replace(pathname + "?" + createQueryString("page", page));
    }

    const options = {
      method: "GET",
      url: baseUrl + genrateUrl,
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
        setTotalPage(response.data.total_pages);

        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [page, search, genrateUrl]);

  const handleClick = (page) => {
    setPage(page);
  };

  return (
    <section className="w-full h-full min-h-screen  px-6 lg:px-16 pt-20 lg:pt-24 flex flex-col justify-start items-start gap-5 overflow-x-hidden">
      <div className="breadcrumbs w-full z-30 text-base text-textColor/50 *:capitalize">
        <ul>
          <li>
            <Link href={`/`}>Home</Link>
          </li>
          <li>category</li>
          <li>{decodeURIComponent(params.categoryId)}</li>
        </ul>
      </div>

      <section className="w-full flex flex-col-reverse lg:flex-row justify-start items-start gap-5 duration-300">
        <section className="w-full flex flex-col justify-start items-center gap-7">

          {data ? <ItemCategory data={movie} /> : <Loading />}

          {page != (null || "") && totalPage != (null || "") && (
            <Pagination
              page={page}
              totalPage={totalPage}
              handleClick={handleClick}
            />
          )}
        </section>

        <section className="w-full lg:w-[35rem] lg:flex flex-col justify-start items-start gap-5 duration-300">
          <GenresGroup />
        </section>
      </section>

      <ToTop />
    </section>
  );
}
