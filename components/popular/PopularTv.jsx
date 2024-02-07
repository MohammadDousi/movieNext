"use client";

import TitleContainer from "../title/TitleContainer";
import ItemNext from "./ItemNext";

import axios from "axios";
import { useState, useEffect } from "react";

export default function PopularTv() {
  const [onAir, setOnAir] = useState();

  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
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
        setOnAir(response.data.results.slice(0, 8));
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <section className="w-full p-5 bg-primeryColorDarker/50 rounded-xl">
      {(onAir !== null || "") && <ItemNext data={onAir} typeLink="tv" />}
    </section>
  );
}
