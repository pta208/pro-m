import { useRouter } from "next/router";
import React from "react";

import { ProductPageLayout } from "../../components/LandingPage/Layout/ProductPageLayout";
import { CategoryPage } from "../../components/LandingPage/template/CategoryPage";
import { useGetProduct } from "../../hooks/swr/useGetProduct";
const Category = () => {
  const router = useRouter();
  const {
    query: { brand },
  } = router;
  // const { brand } = query;
  const { products: baseProduct } = useGetProduct();
  const newProduct = baseProduct?.filter((product) => product.brand == brand);
  if (baseProduct) return <CategoryPage products={newProduct} brand={brand} />;
  else return <></>;
};
Category.Layout = ProductPageLayout;
export default Category;
