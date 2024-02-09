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
    switch (params.categoryId) {
      case "popular-movie":
        category = "movie/popular";
        setGenrateUrl(`${category}?language=en-US&page=${search || page}`);
        break;
      case "upcoming-movie":
        category = "movie/upcoming";
        setGenrateUrl(`${category}?language=en-US&page=${search || page}`);
        break;
      case "top-250-movie":
        category = "movie/top_rated";
        setGenrateUrl(`${category}?language=en-US&page=${search || page}`);
        break;
      case "now-playing-movie":
        category = "movie/now_playing";
        setGenrateUrl(`${category}?language=en-US&page=${search || page}`);
        break;
      case "trending-movie":
        category = "trending/movie/day";
        setGenrateUrl(`${category}?language=en-US&page=${search || page}`);
        break;

      case "Action":
      case "Adventure":
      case "Animation":
      case "Comedy":
      case "Crime":
      case "Documentary":
      case "Drama":
      case "Family":
      case "Fantasy":
      case "History":
      case "Horror":
      case "Music":
      case "Mystery":
      case "Romance":
      case "Science-Fiction":
      case "TV-Movie":
      case "Thriller":
      case "War":
      case "Western":
        setGenrateUrl(
          `discover/movie?language=en-US&page=${
            page || search
          }&sort_by=popularity.desc&with_genres=${genersId}`
        );
        break;

      // ////////////////////////////////////////////////////
      case "trending-tv-shows":
        category = "trending/tv/day";
        setGenrateUrl(`${category}?language=en-US&page=${search || page}`);
        break;

      case "top-250-tv-shows":
        category = "tv/top_rated";
        setGenrateUrl(`${category}?language=en-US&page=${search || page}`);
        break;
      case "popular-tv-shows":
        category = "tv/popular";
        setGenrateUrl(`${category}?language=en-US&page=${search || page}`);
        break;
      case "on-air-tv-shows":
        category = "tv/on_the_air";
        setGenrateUrl(`${category}?language=en-US&page=${search || page}`);
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

        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [page, search, genrateUrl]);

  // useEffect(() => {
  //   const options = {
  //     method: "GET",
  //     url: baseUrl + genrateUrl,
  //     headers: {
  //       accept: "application/json",
  //       Authorization:
  //         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTRiM2QzNDRiMDAxOTNhMWYxMzEyOWZkNDIzNzdlZSIsInN1YiI6IjY1YjRkZGY2MmZhZjRkMDE3Y2RjMjgzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ldhZGWiYUrMsECw_f-hTacesZEoyzMJEz7njNTnsikg",
  //     },
  //   };

  //   axios
  //     .request(options)
  //     .then(function (response) {
  //       setMovie(response.data.results);
  //       setTotalPage(response.data.total_pages);

  //       window.scrollTo({
  //         top: 0,
  //         behavior: "smooth",
  //       });

  //       console.log(response.data);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // }, [search, genrateUrl]);

  return (
    <section className="w-full px-6 lg:px-16 pt-20 lg:pt-24 h-full min-h-screen flex flex-col justify-start items-start gap-5 overflow-x-hidden">
      <div className="breadcrumbs w-full z-30 text-base text-textColor/50 *:capitalize">
        <ul>
          <li>
            <Link href={`/`}>Home</Link>
          </li>
          <li>category</li>
          <li>{params.categoryId}</li>
        </ul>
      </div>

      <section className="w-full flex flex-row justify-start items-start gap-5 duration-300">
        <section className="w-full flex flex-col justify-start items-center gap-7">
          {/* pagination */}

          <Suspense fallback={<Loading />}>
            {data ? <ItemCategory data={movie} /> : <Loading />}
          </Suspense>

          {(page != null || "") && (totalPage != null || "") && (
            <div className="join flex gap-2">
              <button
                name={totalPage - totalPage + 1}
                onClick={(e) => {
                  setPage(e.target.name);
                }}
                className={
                  page == totalPage - totalPage + 1
                    ? "join-item btn btn-sm lg:btn-md btn-circle  btn-active btn-primary"
                    : "join-item btn btn-sm lg:btn-md btn-circle "
                }
              >
                {totalPage - totalPage + 1}
              </button>
              <button
                name={totalPage - totalPage + 2}
                onClick={(e) => {
                  setPage(e.target.name);
                }}
                className={
                  page == totalPage - totalPage + 2
                    ? "join-item btn btn-sm lg:btn-md btn-circle  btn-active btn-primary"
                    : "join-item btn btn-sm lg:btn-md btn-circle "
                }
              >
                {totalPage - totalPage + 2}
              </button>
              <button
                name={totalPage - totalPage + 3}
                onClick={(e) => {
                  setPage(e.target.name);
                }}
                className={
                  page == totalPage - totalPage + 3
                    ? "join-item btn btn-sm lg:btn-md btn-circle  btn-active btn-primary"
                    : "join-item btn btn-sm lg:btn-md btn-circle "
                }
              >
                {totalPage - totalPage + 3}
              </button>

              <button
                className={page >= 6 ? "join-item btn-disabled px-1" : "hidden"}
              >
                ...
              </button>

              <button
                name={Number(page) - Number(2)}
                onClick={(e) => {
                  setPage(e.target.name);
                }}
                className={
                  page >= 6
                    ? "join-item hidden lg:flex btn btn-sm lg:btn-md btn-circle "
                    : "hidden"
                }
              >
                {Number(page) - Number(2)}
              </button>

              <button
                name={Number(page) - Number(1)}
                onClick={(e) => {
                  setPage(e.target.name);
                }}
                className={
                  page >= 5
                    ? "join-item btn btn-sm lg:btn-md btn-circle "
                    : "hidden"
                }
              >
                {Number(page) - Number(1)}
              </button>

              <button
                name={Number(page)}
                onClick={(e) => {
                  setPage(e.target.name);
                }}
                className={
                  page >= 4
                    ? "join-item btn btn-sm lg:btn-md btn-circle  btn-active btn-primary"
                    : "hidden"
                }
              >
                {Number(page)}
              </button>

              <button
                name={Number(page) + Number(1)}
                onClick={(e) => {
                  setPage(e.target.name);
                }}
                className={
                  page >= 3 && page < totalPage
                    ? "join-item btn btn-sm lg:btn-md btn-circle "
                    : "hidden"
                }
              >
                {page >= 3 && page < totalPage && Number(page) + Number(1)}
              </button>

              <button
                name={Number(page) + Number(2)}
                onClick={(e) => {
                  setPage(e.target.name);
                }}
                className={
                  page >= 3 && page < totalPage - 1
                    ? "join-item hidden lg:flex btn btn-sm lg:btn-md btn-circle "
                    : "hidden"
                }
              >
                {page >= 3 && page < totalPage && Number(page) + Number(2)}
              </button>

              <button
                className={
                  page < 0 || Number(page) >= Number(totalPage) - Number(4)
                    ? "hidden"
                    : "join-item btn-disabled px-1"
                }
              >
                ...
              </button>

              <button
                name={Number(totalPage) - Number(1)}
                onClick={(e) => {
                  setPage(e.target.name);
                }}
                value={Number(totalPage) - Number(1)}
                className={
                  Number(page) >= Number(totalPage) - Number(4)
                    ? "hidden"
                    : "join-item btn btn-sm lg:btn-md btn-circle "
                }
              >
                {Number(totalPage) - Number(1)}
              </button>

              <button
                name={Number(totalPage)}
                onClick={(e) => {
                  setPage(e.target.name);
                }}
                className={
                  Number(page) >= Number(totalPage) - Number(4)
                    ? "hidden"
                    : "join-item btn btn-sm lg:btn-md btn-circle "
                }
              >
                {Number(totalPage)}
              </button>
            </div>
          )}
        </section>

        <section className="hidden lg:w-[35rem] relative lg:flex flex-col justify-start items-start gap-5 duration-300">
          <GenresGroup />
        </section>
      </section>

      <ToTop />
    </section>
  );
}
