import React from "react";
import { ProductCard } from "../../Product";

export const FavoriteProducts = ({ products, className }) => {
  return (
    <div className={`flex flex-col font-bold gap-2 ${className}`}>
      <div className="text-center text-3xl font-bold text-blaze-orange-500">
        Best Seller
      </div>
      <div className="w-full gap-4 lg:flex-row">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products?.map((product) => (
            <ProductCard
              key={product.id}
              title={product.name}
              imgSrc={product.medias[0].url}
              href={`products/${product.id}`}
              className="p-1 lg:p-4"
              titlePlacement="top"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
