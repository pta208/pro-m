import React from "react";
import { DashboardLayout } from "../../components/Dashboard/Layout";
import DashboardProductListPage from "../../components/Dashboard/Product/ProductListPage";
import { useGetProduct } from "../../hooks/swr";
const AdminDashboardPage = () => {
  const { products } = useGetProduct();
  return (
    <div className="card bg-white p-4">
      <DashboardProductListPage products={products} />
    </div>
  );
};
AdminDashboardPage.Layout = DashboardLayout;
export default AdminDashboardPage;
