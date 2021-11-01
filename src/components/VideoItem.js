import React, { useContext } from "react";
import ThemeContext from "contexts/ThemeContext";

const VideoItem = ({ video }) => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div className="w-80 h-44 xl:w-96 xl:h-56">
      <img
        className="w-full h-full"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.description}
      />
      <div>
        <p
          className={`overflow-ellipsis overflow-hidden whitespace-nowrap font-medium ${
            isDarkMode ? "text-white" : "text-gray-700"
          }`}
        >
          {video.snippet.title}
        </p>
        <p
          className={`font-medium ${
            isDarkMode ? "text-gray-400" : "text-gray-500"
          }`}
        >
          {video.snippet.channelTitle}
        </p>
      </div>
    </div>
  );
};

export default VideoItem;
