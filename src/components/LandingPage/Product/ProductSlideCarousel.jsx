import React from "react";
import NukaCarousel from "nuka-carousel";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { ProductSlide } from "./ProductSlide";
import { arraySplitting } from "../../../utils/array-slice";

export const ProductSlideCarousel = ({ products, className }) => {
  const resProducts = products ? arraySplitting(products, 6) : [];

  return (
    <NukaCarousel
      autoplay={true}
      autoplayInterval={5000}
      wrapAround={true}
      pauseOnHover={true}
      renderBottomCenterControls={() => {
        null;
      }}
      renderCenterLeftControls={({ previousDisabled, previousSlide }) => (
        <button
          className="absolute left-[0] top-[50%] translate-y-[-50%] z-50 text-4xl text-pink-salmon-300 hover:text-pink-salmon-500 cursor-pointer bg-pink-salmon-50 rounded-full p-2"
          onClick={previousSlide}
          disabled={previousDisabled}
        >
          <FaArrowLeft />
        </button>
      )}
      renderCenterRightControls={({ nextDisabled, nextSlide }) => (
        <button
          className="absolute right-[0] top-[50%] translate-y-[-50%] z-50 text-4xl text-pink-salmon-300 hover:text-pink-salmon-500 cursor-pointer bg-pink-salmon-50 rounded-full p-2"
          onClick={nextSlide}
          disabled={nextDisabled}
        >
          <FaArrowRight />
        </button>
      )}
    >
      {resProducts.map((products) => (
        <ProductSlide products={products} />
      ))}
    </NukaCarousel>
  );
};
