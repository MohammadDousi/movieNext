"use client";

import ItemTrending from "./ItemTrending";
import { getTrending } from "@/hooks/querys";

export default function TrendingMovie() {
 
  const { data, isError, error } = getTrending("movie");

  return (
    <section className="w-full flex flex-row justify-start items-start gap-6 overflow-hidden">
      {isError && (
        <h5 className="w-full h-72 text-textColor/70 text-base font-normal tracking-wide capitalize">
          something went wrong - {error.message}
        </h5>
      )}
      <ItemTrending data={data?.data?.results?.slice(0, 15)} typeLink="movie" />
    </section>
  );
}
