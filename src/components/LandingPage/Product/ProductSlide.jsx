import React from "react";
import { ProductCard } from "./ProductCard";

export const ProductSlide = ({ products }) => {
  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-3 md:grid-rows-2 gap-10 ">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.name}
          imgSrc={product.medias[0].url}
          href={`products/${product.id}`}
          className="p-1 lg:p-2 "
          titlePlacement="top"
        />
      ))}
    </div>
  );
};
