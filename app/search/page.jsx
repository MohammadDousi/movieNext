"use client";

import { useState } from "react";

import TitleContainer from "@/components/title/TitleContainer";
import ItemCategory from "@/components/itemCategory/ItemCategory";
import Pagination from "@/components/pagination/Pagination";
import ToTop from "@/components/toTop/ToTop";

import { getDataSearch } from "@/hooks/querys";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";

export default function Search() {
  const [textSearch, setTextSearch] = useState("");
  const [page, setPage] = useState(1);

  const searchHandler = (e) => {
    setTextSearch(e.target.value);
    if (e.target.value == "" || null) {
      setPage(1);
    }
  };

  const { data, isError, error } = getDataSearch(textSearch, page);
  const handleClick = (page) => {
    setPage(page);
  };

  return (
    <>
      <section className="w-full h-full min-h-screen px-6 lg:px-16 pt-20 lg:pt-24 flex flex-col justify-start items-start gap-6 overflow-x-hidden">
        <div className="w-full">
          <Breadcrumbs
            data={[
              { address: "home", link: "/" },
              { address: "search", link: "" },
            ]}
          />
        </div>

        <div className="w-full flex flex-row justify-center items-center gap-3">
          <input
            type="text"
            placeholder="search by name , ex : Batman , Aquaman and the lost kingdom , ..."
            autoFocus
            className="input"
            onChange={(e) => searchHandler(e)}
          />
        </div>

        <section className="w-full flex flex-col justify-start items-start gap-5">
          <TitleContainer title={textSearch && `Result for ${textSearch}`} />
          {<ItemCategory data={data?.data?.results} />}
          <div className="w-full flex flex-col lg:flex-row lg:flex-wrap justify-center items-start gap-7">
            {isError && (
              <h5 className="w-full h-72 text-textColor/70 text-base font-normal tracking-wide capitalize">
                something went wrong - {error.message}
              </h5>
            )}
            {data?.data?.results != (null || "") && (
              <Pagination
                page={data?.data?.page}
                totalPage={data?.data?.total_pages}
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
