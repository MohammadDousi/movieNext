"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

import TitleContainer from "../title/TitleContainer";
import ItemActor from "./ItemActor";

export default function TrendingActor() {
  const [actor, setActor] = useState();

  const options = {
    method: "GET",
    url : 'https://api.themoviedb.org/3/trending/person/day?language=en-US',
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
        setActor(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <section className="w-full flex flex-col justify-start items-start gap-5">
      <TitleContainer title="trending people" href="#" />
      <section className="w-full">
        <ItemActor data={actor} />
      </section>
    </section>
  );
}
