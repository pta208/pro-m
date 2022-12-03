import React from "react";
import NextImage from "next/image";
export const Image = ({ src }) => {
  return (
    <div
      className={`border rounded-xl hover:border-pink-salmon-600 overflow-hidden`}
    >
      <NextImage
        width={1}
        height={1}
        layout="responsive"
        src={src}
        className="object-cover"
      />
    </div>
  );
};
