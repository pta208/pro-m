import { Button, Input } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import ProductTable from "./ProductTable";

const DashboardProductListPage = ({ products }) => {
  const router = useRouter();
  const handleAddProduct = () => router.push("/dashboard/product/add-product");
  return (
    <div className="card bg-white p-4">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <div className="flex gap-4">
            <Input placeholder="Input product's name" size="md" />
            <Button>Search</Button>
          </div>
          <Button colorScheme="blue" onClick={handleAddProduct}>
            Add
          </Button>
        </div>
        <ProductTable products={products} />
      </div>
    </div>
  );
};

export default DashboardProductListPage;
