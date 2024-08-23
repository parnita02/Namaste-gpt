import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/Constants";

const VideoBackground = ({ movieId }) => {
  const [trailerKey, setTrailerKey] = useState(null);
  const background = async () => {
    // console.log(movieId);

    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    setTrailerKey(trailer.key);
    console.log(trailer);
  };
  useEffect(() => {
    background();
  }, []);
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${trailerKey}?si=lNMb_Rpf8WpP2gQD`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
