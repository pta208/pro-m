import React from "react";
import { getTikTokUrl } from "../../../utils/get-tiktok-url.js";
import { TikTokEmbed } from "./TikTokEmbed";

export const TikTokEmbedList = ({ videos }) => {
  const VIDEO_COUNT = 3;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {videos?.map((video, index) => {
        const url = getTikTokUrl(video);
        if (index <= VIDEO_COUNT) return <TikTokEmbed url={url} key={index} />;
      })}
    </div>
  );
};
