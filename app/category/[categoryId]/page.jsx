"use client";

import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import GenresGroup from "@/components/genres/GenresGroup";
import ItemCategory from "@/components/itemCategory/ItemCategory";
import Link from "next/link";
import ToTop from "@/components/toTop/ToTop";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function CategoryPage({ params }) {
  const [movie, setMovie] = useState();
  const [totalPage, setTotalPage] = useState();
  const [page, setPage] = useState(1);

  const router = useRouter();
  const pathname = usePathname();

  const searchParams = useSearchParams();
  const search = searchParams.get("page");

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

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

    case "trending-movie":
      category = "trending/movie/day";
      break;
    case "trending-tv":
      category = "trending/tv/day";
      break;
    case "":
      category = "movie/popular";

    case "top-250-serial":
    case "trending-tv":
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
    search && setPage(search);
  }, []);

  useEffect(() => {
    if (page != (null || "")) {
      router.replace(pathname + "?" + createQueryString("page", page));
    }
  }, [page]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/${category}?language=en-US&page=${
        search || page
      }`,
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
  }, [search]);

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
          <ItemCategory data={movie} />

          {(page != null || "") && (totalPage != null || "") && (
            <div className="join flex gap-2">
              <button
                name={totalPage - totalPage + 1}
                onClick={(e) => {
                  setPage(e.target.name);
                }}
                className="join-item btn btn-circle"
              >
                {totalPage - totalPage + 1}
              </button>
              <button
                name={totalPage - totalPage + 2}
                onClick={(e) => {
                  setPage(e.target.name);
                }}
                className="join-item btn btn-circle"
              >
                {totalPage - totalPage + 2}
              </button>
              <button
                name={totalPage - totalPage + 3}
                onClick={(e) => {
                  setPage(e.target.name);
                }}
                className="join-item btn btn-circle"
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
                  page >= 6 && Number(page) + Number(2)
                    ? "join-item btn btn-circle"
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
                  page >= 5 && Number(page) + Number(1)
                    ? "join-item btn btn-circle"
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
                  page >= 4 && Number(page) + Number(1)
                    ? "join-item btn btn-circle btn-active btn-primary"
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
                    ? "join-item btn btn-circle"
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
                    ? "join-item btn btn-circle"
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
                    : "join-item btn btn-circle"
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
                    : "join-item btn btn-circle"
                }
              >
                {Number(totalPage)}
              </button>
            </div>
          )}
        </section>

        <section className="hidden lg:w-[30rem] relative lg:flex flex-col justify-start items-start gap-5 duration-300">
          <GenresGroup />
        </section>
      </section>

      <ToTop />
    </section>
  );
}
