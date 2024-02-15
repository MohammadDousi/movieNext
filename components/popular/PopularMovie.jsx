"use client";

import { getPopular } from "@/hooks/querys";
import ItemPopular from "./ItemPopular";

export default function PopularMovie() {
  
  const { data, isError, error } = getPopular("movie");

  return (
    <section className="w-full p-5 bg-primeryColorDarker/50 rounded-xl">
      {isError && (
        <h5 className="w-full h-52 text-textColor/70 text-base font-normal tracking-wide capitalize">
          something went wrong - {error.message}
        </h5>
      )}
      <ItemPopular data={data?.data?.results?.slice(0, 10)} typeLink="movie" />
    </section>
  );
}
