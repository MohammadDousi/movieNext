"use client";

import React, { useEffect, useState } from "react";

import axios from "axios";
import ItemTrending from "./ItemTrending";
import TitleContainer from "../title/TitleContainer";

export default function Trending() {
  const [recently, setRecently] = useState();
  const [trend, setTrend] = useState();

  useEffect(() => {
    const options = {
      method: "GET",
      // url: "https://api.themoviedb.org/3/trending/all/day?language=en-US",
      url: "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",

      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTRiM2QzNDRiMDAxOTNhMWYxMzEyOWZkNDIzNzdlZSIsInN1YiI6IjY1YjRkZGY2MmZhZjRkMDE3Y2RjMjgzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ldhZGWiYUrMsECw_f-hTacesZEoyzMJEz7njNTnsikg",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        setTrend(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const options = {
      method: "GET",
      // url: "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      url: "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",

      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTRiM2QzNDRiMDAxOTNhMWYxMzEyOWZkNDIzNzdlZSIsInN1YiI6IjY1YjRkZGY2MmZhZjRkMDE3Y2RjMjgzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ldhZGWiYUrMsECw_f-hTacesZEoyzMJEz7njNTnsikg",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        setRecently(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <>
      <section className="w-full flex flex-col justify-start items-start gap-5">
        <TitleContainer title="recently" />
        <section className="w-full flex flex-row justify-start items-start gap-6 overflow-hidden">
          <ItemTrending data={recently} />
        </section>
      </section>

      <section className="w-full flex flex-col justify-start items-start gap-5">
        <TitleContainer title="trending" />
        <section className="w-full flex flex-row justify-start items-start gap-6 overflow-hidden">
          <ItemTrending data={trend} />
        </section>
      </section>
    </>
  );
}
