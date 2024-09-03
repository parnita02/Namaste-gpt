import React, { useEffect } from "react";
import { API_OPTIONS } from "./Constants";
import { useDispatch } from "react-redux";
import { addTrailer } from "./moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const background = async () => {
    // console.log(movieId);

    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailer(trailer));
  };
  useEffect(() => {
    background();
  }, []);
};

export default useMovieTrailer;
