"use client";

import ItemTrending from "./ItemTrending";
import { getTrending } from "@/hooks/querys";

export default function TrendingTv() {
  const { data, isError, error } = getTrending("tv");

  return (
    <section className="w-full">
      {isError && (
        <h5 className="w-full h-72 text-textColor/70 text-base font-normal tracking-wide capitalize">
          something went wrong - {error.message}
        </h5>
      )}
      <ItemTrending data={data?.data?.results?.slice(0, 15)} typeLink="tv" />
    </section>
  );
}
