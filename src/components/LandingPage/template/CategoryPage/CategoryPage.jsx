import React from "react";
import { ProductGrid } from "../../Product";
import { Select } from "./Select";
var _ = require("lodash");
export const CategoryPage = ({ products, brand }) => {
  return (
    <div className="flex flex-col gap-4 p-4 ">
      {/* <div>Trang chủ / Tên danh mục</div>
      <div className="flex gap-4">
        <div className="flex flex-col gap-4 w-full md:w-96 lg:w-96">
          <Filter title="Khoảng giá" content={PRICE_FILTER} />
          <Filter title="Categories" content={CATEGORY_FILTER} />
        </div> */}
      <div className="flex-auto">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <div className="text-pink-salmon-900 font-semibold text-2xl">
              {_.capitalize(brand)}
            </div>
            <div>
              <Select />
            </div>
          </div>

          <ProductGrid products={products} />
        </div>
      </div>
    </div>
    // </div>
  );
};
