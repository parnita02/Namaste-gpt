import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-[16/6.7] absolute pt-[20%] px-[5%] bg-gradient-to-r from-[#1e1d1d]">
      <h1 className="w-[40%] drop-shadow-lg font-bold lg:text-3xl sm:text-2xl text-xl text-white">
        {title}
      </h1>
      <p className="drop-shadow-lg py-4 lg:text-xs text-[0.68rem] w-4/12 text-white lg:block hidden">
        {overview}
      </p>
      <div className="flex gap-1 px-1.5 pt-4">
        <button className="bg-white hover:bg-opacity-75 text-black shadow-lg text-xs font-semibold  px-7 py-2 rounded-sm ">
          ▶ Play
        </button>
        <button className="bg-white bg-opacity-35 hover:bg-opacity-45 font-semibold text-white rounded-sm  px-4 text-xs">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
