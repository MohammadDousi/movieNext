"use client";

import ItemActor from "./ItemActor";
import { getActor } from "@/hooks/querys";

export default function TrendingActor() {
  const { data, isError, error } = getActor();

  return (
    <section className="w-full">
      {isError && (
        <h5 className="w-full h-52 text-textColor/70 text-base font-normal tracking-wide capitalize">
          something went wrong - {error.message}
        </h5>
      )}
      <ItemActor data={data?.data?.results} />
    </section>
  );
}
