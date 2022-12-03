import { Button, Input } from "@chakra-ui/react";
import React from "react";
import ProductTable from "./ProductTable";

const DashboardProductListPage = ({ products }) => {
  return (
    <div className="card bg-white p-4">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <div className="flex gap-4">
            <Input placeholder="Input product's name" size="md" />
            <Button>Search</Button>
          </div>
          <Button colorScheme="blue">Add</Button>
        </div>
        <ProductTable products={products} />
      </div>
    </div>
  );
};

export default DashboardProductListPage;
