import Image from "next/image";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";

import { useEffect, useState } from "react";

const ImageShowcase = ({ images }) => {
  const [currentImage, setCurrentImage] = useState("");
  useEffect(() => {
    const setFirstImage = () => {
      setCurrentImage(images[0]);
    };
    setFirstImage();
  }, [images]);
  return (
    <>
      <div className="rounded-lg overflow-hidden object-contain">
        <InnerImageZoom src={currentImage.url} className="aspect-square" />
      </div>
      <div className="flex border-t border-t-bebecook  w-full max-w-xl overflow-x-auto scrollbar-thin scrollbar-thumb-forth scrollbar-track-gray-100">
        {images.map((image, index) => (
          <SmallImageItem
            onClick={() => setCurrentImage(image)}
            key={index}
            imgSrc={image.url}
          />
        ))}
      </div>
    </>
  );
};
const SmallImageItem = (props) => {
  const imgSrc = props.imgSrc;
  return (
    <div onClick={() => props.onClick()}>
      <Image
        src={imgSrc}
        width={100}
        height={100}
        layout="fixed"
        onClick={() => props.onClick()}
      />
    </div>
  );
};
export default ImageShowcase;
