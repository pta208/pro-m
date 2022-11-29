import React from "react";
import { TikTokEmbed as TikTok } from "react-social-media-embed";

export const TikTokEmbed = ({ url }) => {
  return (
    <div
      className={`border rounded-xl hover:border-pink-salmon-600 overflow-hidden`}
    >
      <TikTok url={url} className="tiktok-container" />
    </div>
  );
};
