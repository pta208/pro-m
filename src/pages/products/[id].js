import React, { useState } from "react";
import { ProductPageLayout } from "../../components/LandingPage/Layout/ProductPageLayout";
import { useRouter } from "next/router";

import { useGetProduct } from "../../hooks/swr";
import { ProductDetail } from "../../components/LandingPage/template/ProductDetailPage";
const ProductIndex = ({}) => {
  const router = useRouter();
  const { products } = useGetProduct();
  const { id } = router.query;
  const product = products?.find((product) => product.id == id);
  if (product)
    return (
      <ProductDetail
        product={product}
        relatedProducts={products.slice(
          Math.random() * products.length - 4,
          products.length
        )}
      />
    );
  else return <></>;
};
ProductIndex.Layout = ProductPageLayout;

export default ProductIndex;
