import { useQuery } from "@tanstack/react-query";
import axios from "axios";

//
//
// get data for home page , query key is movie or tv
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

//
//
// get data item for movie and tv shows with id item and query key is movie or tv
const getSingleItem = (queryKey, id) => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/${queryKey}/${id}?language=en-US`,
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTRiM2QzNDRiMDAxOTNhMWYxMzEyOWZkNDIzNzdlZSIsInN1YiI6IjY1YjRkZGY2MmZhZjRkMDE3Y2RjMjgzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ldhZGWiYUrMsECw_f-hTacesZEoyzMJEz7njNTnsikg",
    },
  };

  const fetchData = () => axios.request(options);

  return useQuery({
    queryKey: ["single", queryKey, id],
    queryFn: fetchData,
    staleTime: 2 * (60 * 1000),
    cacheTime: 2.1 * (60 * 1000),
    refetchOnMount: false,
  });
};
const getCastItem = (queryKey, id) => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/${queryKey}/${id}/credits?language=en-US`,
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTRiM2QzNDRiMDAxOTNhMWYxMzEyOWZkNDIzNzdlZSIsInN1YiI6IjY1YjRkZGY2MmZhZjRkMDE3Y2RjMjgzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ldhZGWiYUrMsECw_f-hTacesZEoyzMJEz7njNTnsikg",
    },
  };

  const fetchData = () => axios.request(options);

  return useQuery({
    queryKey: ["cast", queryKey, id],
    queryFn: fetchData,
    staleTime: 2 * (60 * 1000),
    cacheTime: 2.1 * (60 * 1000),
    refetchOnMount: false,
  });
};
const getTrialerItem = (queryKey, id) => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/${queryKey}/${id}/videos?language=en-US`,
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTRiM2QzNDRiMDAxOTNhMWYxMzEyOWZkNDIzNzdlZSIsInN1YiI6IjY1YjRkZGY2MmZhZjRkMDE3Y2RjMjgzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ldhZGWiYUrMsECw_f-hTacesZEoyzMJEz7njNTnsikg",
    },
  };

  const fetchData = () => axios.request(options);

  return useQuery({
    queryKey: ["trialer", queryKey, id],
    queryFn: fetchData,
    staleTime: 2 * (60 * 1000),
    cacheTime: 2.1 * (60 * 1000),
    refetchOnMount: false,
  });
};

//
//
// get data search
const getDataSearch = (search, page) => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/search/multi?query=${search}&language=en-US&page=${page}`,
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTRiM2QzNDRiMDAxOTNhMWYxMzEyOWZkNDIzNzdlZSIsInN1YiI6IjY1YjRkZGY2MmZhZjRkMDE3Y2RjMjgzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ldhZGWiYUrMsECw_f-hTacesZEoyzMJEz7njNTnsikg",
    },
  };

  const fetchData = () => axios.request(options);

  return useQuery({
    queryKey: ["search", search, page],
    queryFn: fetchData,
    refetchOnMount: false,
  });
};

//
//
// get single item pepole , movie pepole , tv pepole
const getSingleCastItem = (id) => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/person/${id}?language=en-US`,
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTRiM2QzNDRiMDAxOTNhMWYxMzEyOWZkNDIzNzdlZSIsInN1YiI6IjY1YjRkZGY2MmZhZjRkMDE3Y2RjMjgzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ldhZGWiYUrMsECw_f-hTacesZEoyzMJEz7njNTnsikg",
    },
  };

  const fetchData = () => axios.request(options);

  return useQuery({
    queryKey: ["singleCast", id],
    queryFn: fetchData,
    staleTime: 2 * (60 * 1000),
    cacheTime: 2.1 * (60 * 1000),
    refetchOnMount: false,
  });
};
const getSingleMovieCastItem = (id) => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/person/${id}/movie_credits?language=en-US`,
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTRiM2QzNDRiMDAxOTNhMWYxMzEyOWZkNDIzNzdlZSIsInN1YiI6IjY1YjRkZGY2MmZhZjRkMDE3Y2RjMjgzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ldhZGWiYUrMsECw_f-hTacesZEoyzMJEz7njNTnsikg",
    },
  };

  const fetchData = () => axios.request(options);

  return useQuery({
    queryKey: ["singleMovieCast", id],
    queryFn: fetchData,
    staleTime: 2 * (60 * 1000),
    cacheTime: 2.1 * (60 * 1000),
    refetchOnMount: false,
  });
};
const getSingleTvCastItem = (id) => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/person/${id}/tv_credits?language=en-US`,
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTRiM2QzNDRiMDAxOTNhMWYxMzEyOWZkNDIzNzdlZSIsInN1YiI6IjY1YjRkZGY2MmZhZjRkMDE3Y2RjMjgzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ldhZGWiYUrMsECw_f-hTacesZEoyzMJEz7njNTnsikg",
    },
  };

  const fetchData = () => axios.request(options);

  return useQuery({
    queryKey: ["singleTvCast", id],
    queryFn: fetchData,
    staleTime: 2 * (60 * 1000),
    cacheTime: 2.1 * (60 * 1000),
    refetchOnMount: false,
  });
};

export {
  getTrending,
  getPopular,
  getActor,
  getSingleItem,
  getCastItem,
  getTrialerItem,
  getDataSearch,
  getSingleCastItem,
  getSingleMovieCastItem,
  getSingleTvCastItem,
};
