import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/Constants";
import { useSelector } from "react-redux";
import useMovieTrailer from "../utils/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  // const [trailerKey, setTrailerKey] = useState(null);
  const trailer = useSelector((store) => store.movies?.browseTrailer);
  // console.log(trailer?.key);

  useMovieTrailer(movieId);
  return (
    <div>
      <div className="w-full aspect-[16/6.7] overflow-hidden flex items-center">
        <iframe
          className="w-full aspect-video"
          src={`https://www.youtube.com/embed/${trailer?.key}?si=lNMb_Rpf8WpP2gQD&autoplay=1&mute=1&showinfo=0&controls=0&modestbranding=0&loop=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoBackground;
