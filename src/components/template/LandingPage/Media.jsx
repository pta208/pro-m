import React from "react";
import { Album } from "../../Media/Album";
import { TikTokEmbedList } from "../../Media/TikTok";
import { ImageList } from "../../Media/Image";

export const Media = ({ title = "Baby's Moments", images, videos }) => {
  return (
    <Album title={title}>
      <TikTokEmbedList videos={videos} />
      <ImageList images={images} />
    </Album>
  );
};
