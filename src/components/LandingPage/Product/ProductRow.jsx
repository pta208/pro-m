import React from "react";
import { ProductCard } from "./ProductCard";

export const ProductRow = ({ products }) => {
  return (
    <div className="grid grid-cols-2 grid-flow-col md:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.name}
          imgSrc={product.medias[0].url}
          href={`/products/${product.id}`}
          className="flex-1"
          // className="p-1 lg:p-4 min-h-[320px] max-h-[320px] min-w-[320px] max-w-[320px]"
          // titlePlacement="bottom"
        />
      ))}
    </div>
  );
};
