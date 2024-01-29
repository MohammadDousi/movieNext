"use client";

import TitleContainer from "../title/TitleContainer";
import ItemNext from "./ItemNext";

import axios from "axios";
import { useState, useEffect } from "react";

export default function Next7DayOnAir() {
  const [onAir, setOnAir] = useState();

  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1",
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
        setOnAir(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <section className="w-full flex flex-col justify-start items-start gap-5">
      <TitleContainer title="next 7 days on air" />
      <section className="w-full p-5 bg-primeryColorDarker/50 rounded-xl">
        {(onAir !== null || "") && <ItemNext data={onAir} />}
      </section>
    </section>
  );
}
