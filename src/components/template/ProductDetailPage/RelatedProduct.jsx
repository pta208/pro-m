import React from "react";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import NukaCarousel from "nuka-carousel";
import { ProductCard } from "../../Product";
const RelatedProduct = ({ products, className }) => {
  return (
    <div
      className={`flex flex-col gap-4 py-4 w-full max-w-screen-xl overflow-x-hidden ${className}`}
    >
      <h2 className="text-xl font-semibold text-center">
        Các sản phẩm liên quan
      </h2>
      <div>
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
          slidesToShow={5}
          cellSpacing={30}
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.name}
              imgSrc={product.images[1]}
              href={`/products/${product.id}`}
              className="p-1 lg:p-4 min-h-[320px] max-h-[320px]"
              titlePlacement="bottom"
            />
          ))}
        </NukaCarousel>
      </div>
    </div>
  );
};

export default RelatedProduct;
