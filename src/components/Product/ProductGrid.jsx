import React from "react";
import { ProductCard } from "./ProductCard";

export const ProductGrid = ({ products, colNum = 4, gap = 4 }) => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.name}
          imgSrc={product.images[0]}
          href={`products/${product.id}`}
          className="p-1 lg:p-4"
          titlePlacement="top"
        />
      ))}
    </div>
  );
};
