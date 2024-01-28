"use client";

import React, { useEffect, useState } from "react";

import axios from "axios";
import ItemTrending from "./ItemTrending";
import TitleContainer from "../title/TitleContainer";

export default function Trending() {
  const [trend, setTrend] = useState();

  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/trending/all/day?language=en-US",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTRiM2QzNDRiMDAxOTNhMWYxMzEyOWZkNDIzNzdlZSIsInN1YiI6IjY1YjRkZGY2MmZhZjRkMDE3Y2RjMjgzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ldhZGWiYUrMsECw_f-hTacesZEoyzMJEz7njNTnsikg",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setTrend(response.data.results.slice(0, 6));
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <>
      <TitleContainer title="trending" />
      <section className="w-full flex flex-row justify-start items-start gap-6 overflow-hidden">
        <ItemTrending data={trend} />
      </section>
    </>
  );
}
