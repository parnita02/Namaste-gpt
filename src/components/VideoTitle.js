import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-8">
      <h1 className="font-bold text-2xl">{title}</h1>
      <p className=" text-justify pt-4 text-xs w-1/2">{overview}</p>
      <div className="flex gap-1 p-1.5">
        <button className="shadow-lg text-xs font-semibold border border-gray-200 px-7 py-2 rounded-sm">
          ▶ Play
        </button>
        <button className="border-gray-400 shadow-lg bg-gray-500 opacity-45 font-semibold text-white rounded-sm border px-4 text-xs">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
