import React from "react";

import { ProductPageLayout } from "../../components/Layout/ProductPageLayout";
import { CategoryPage } from "../../components/template/CategoryPage";
import { useGetProduct } from "../../hooks/swr/useGetProduct";
const Category = () => {
  const { products } = useGetProduct();
  if (products) return <CategoryPage products={products} />;
  else return <></>;
};
Category.Layout = ProductPageLayout;
export default Category;
