import { Button } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { Table } from "antd";
import Link from "next/link";
const ProductTable = ({ products }) => {
  const columns = [
    {
      title: "Image",
      dataIndex: "images",
      key: "images",
      render: (images) => {
        return <Image src={images[1]} height="100px" width="100px" />;
      },
      width: "120px",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (name) => {
        return (
          <div className="text-xl flex items-center hover:text-jacarta-600 cursor-pointer">
            {name}
          </div>
        );
      },
    },
    {
      title: "SKU",
      dataIndex: "sku",
      key: "sku",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Actions",
      dataIndex: "id",
      key: "actions",
      width: "120px",
      render: (id) => {
        return (
          <Link href={`/dashboard/product/${id}`}>
            <Button>Edit</Button>
          </Link>
        );
      },
    },
  ];
  return (
    <Table
      dataSource={products}
      columns={columns}
      size="small"
      scroll={{ y: 540 }}
    />
  );
};

export default ProductTable;
