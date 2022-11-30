import React from "react";
import { ProductSlideCarousel } from "../../Product";
import { Media } from "./Media";
import { FavoriteProducts } from "./FavoriteProduct";
import { Partner } from "./Partner";

export const LandingPage = ({ products, images, videos }) => {
  return (
    <main
      className="flex flex-col gap-4 lg:gap-12 "
      style={{ minHeight: "100vh" }}
    >
      <FavoriteProducts
        products={products?.slice(0, 4)}
        className="mt-8 mb-8 lg:mb-12"
      />
      <ProductSlideCarousel products={products} />
      <Media title="Baby's moment" images={images} videos={videos} /> 
      <Partner /> 
    </main>
  );
};
