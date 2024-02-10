"use client";

import TitleContainer from "@/components/title/TitleContainer";
import { useEffect, useState } from "react";
import axios from "axios";
import ToTop from "@/components/toTop/ToTop";
import ItemCategory from "@/components/itemCategory/ItemCategory";
import Pagination from "@/components/pagination/pagination";

export default function Search() {
  const [data, setData] = useState();
  const [textSearch, setTextSearch] = useState("");
  const baseUrl = "https://api.themoviedb.org/3/";

  const [totalPage, setTotalPage] = useState("");
  const [page, setPage] = useState(1);

  const searchHandler = (e) => {
    setData("");
    setTextSearch(e.target.value);

    if (e.target.value) {
      const options = {
        method: "GET",
        url: `${baseUrl}/search/multi?query=${e.target.value}&language=en-US&page=1`,

        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTRiM2QzNDRiMDAxOTNhMWYxMzEyOWZkNDIzNzdlZSIsInN1YiI6IjY1YjRkZGY2MmZhZjRkMDE3Y2RjMjgzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ldhZGWiYUrMsECw_f-hTacesZEoyzMJEz7njNTnsikg",
        },
      };

      axios
        .request(options)
        .then(function (response) {
          setData(response.data.results);
          setTotalPage(response.data.total_pages);

          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  };

  useEffect(() => {
    const options = {
      method: "GET",
      url: `${baseUrl}/search/multi?query=${textSearch}&language=en-US&page=${page}`,

      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTRiM2QzNDRiMDAxOTNhMWYxMzEyOWZkNDIzNzdlZSIsInN1YiI6IjY1YjRkZGY2MmZhZjRkMDE3Y2RjMjgzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ldhZGWiYUrMsECw_f-hTacesZEoyzMJEz7njNTnsikg",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setData(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [page]);

  const handleClick = (page) => {
    setPage(page);
  };

  return (
    <>
      <section className="w-full h-full min-h-screen px-6 lg:px-16 pt-2 lg:pt-28 flex flex-col justify-start items-start gap-10 lg:gap-16 overflow-x-hidden">
        <div className="w-full flex flex-row justify-center items-center gap-3">
          <input
            type="text"
            placeholder="Search ..."
            autoFocus
            className="input input-md w-full max-w-lg bg-textColor/25 text-textColor/90 font-bold text-base tracking-wider border-textColor/50 focus:border-textColor/10"
            onChange={(e) => searchHandler(e)}
          />
        </div>

        <section className="w-full flex flex-col justify-start items-start gap-5">
          <TitleContainer title={textSearch && `Result for ${textSearch}`} />
          <div className="w-full flex flex-col lg:flex-row lg:flex-wrap justify-center items-start gap-7">
            {data && <ItemCategory data={data} />}
            {page != (null || "") && totalPage != (null || "") && (
              <Pagination
                page={page}
                totalPage={totalPage}
                handleClick={handleClick}
              />
            )}
          </div>
        </section>
      </section>
      <ToTop />
    </>
  );
}
