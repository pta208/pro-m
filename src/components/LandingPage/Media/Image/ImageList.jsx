import React from "react";
import { Image } from "./Image";
export const ImageList = ({ images }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {images?.map((image, index) => {
        // if (index < 4) return <Image src={image.src} key={index} />;
        if (index < 4) return <img src={image.src} key={index} />;
      })}
    </div>
  );
};
