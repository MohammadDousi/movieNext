import { useQuery } from "@tanstack/react-query";
import axios from "axios";




const getTrending = (queryKey) => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/trending/${queryKey}/day?language=en-US`,
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTRiM2QzNDRiMDAxOTNhMWYxMzEyOWZkNDIzNzdlZSIsInN1YiI6IjY1YjRkZGY2MmZhZjRkMDE3Y2RjMjgzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ldhZGWiYUrMsECw_f-hTacesZEoyzMJEz7njNTnsikg",
    },
  };

  const fetchData = () => axios.request(options);

  return useQuery({
    queryKey: ["trending", queryKey],
    queryFn: fetchData,
    staleTime: 2 * (60 * 1000),
    cacheTime: 2.1 * (60 * 1000),
    refetchOnMount: false,
  });
};

const getPopular = (queryKey) => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/${queryKey}/popular?language=en-US&page=1`,
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTRiM2QzNDRiMDAxOTNhMWYxMzEyOWZkNDIzNzdlZSIsInN1YiI6IjY1YjRkZGY2MmZhZjRkMDE3Y2RjMjgzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ldhZGWiYUrMsECw_f-hTacesZEoyzMJEz7njNTnsikg",
    },
  };

  const fetchData = () => axios.request(options);

  return useQuery({
    queryKey: ["popular", queryKey],
    queryFn: fetchData,
    staleTime: 2 * (60 * 1000),
    cacheTime: 2.1 * (60 * 1000),
    refetchOnMount: false,
  });
};

const getActor = () => {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/trending/person/day?language=en-US",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTRiM2QzNDRiMDAxOTNhMWYxMzEyOWZkNDIzNzdlZSIsInN1YiI6IjY1YjRkZGY2MmZhZjRkMDE3Y2RjMjgzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ldhZGWiYUrMsECw_f-hTacesZEoyzMJEz7njNTnsikg",
    },
  };

  const fetchData = () => axios.request(options);

  return useQuery({
    queryKey: ["actor"],
    queryFn: fetchData,
    staleTime: 2 * (60 * 1000),
    cacheTime: 2.1 * (60 * 1000),
    refetchOnMount: false,
  });
};

export { getTrending, getPopular, getActor };
