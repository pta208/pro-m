import { Text } from "@chakra-ui/react";
import React from "react";
import { AddProductForm } from "../../Product/AddProduct/AddProductForm";

export const AddProductTemplate = () => {
  return (
    <div className="flex flex-col gap-2">
      <Text fontSize={"3xl"}>Thêm sản phẩm</Text>
      <AddProductForm />
    </div>
  );
};
