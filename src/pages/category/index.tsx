import { useRouter } from "next/router";
import React from "react";

import { ProductPageLayout } from "../../components/Layout/ProductPageLayout";
import { CategoryPage } from "../../components/template/CategoryPage";
import { useGetProduct } from "../../hooks/swr/useGetProduct";
const Category = () => {
  const router = useRouter();
  const { query } = router;
  console.log(query);
  const { products: baseProduct } = useGetProduct();
  const newProduct = baseProduct?.filter(
    (product) => product.brand == query.brand
  );
  if (baseProduct) return <CategoryPage products={newProduct} />;
  else return <></>;
};
Category.Layout = ProductPageLayout;
export default Category;
