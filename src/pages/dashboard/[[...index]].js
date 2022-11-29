import React from "react";
import DashboardLayout from "../../components/Dashboard/Layout/index";
import DashboardProductListPage from "../../components/Dashboard/Product/ProductListPage";
const AdminDashboardPage = () => {
  return (
    <div className="card bg-white p-4">
      <DashboardProductListPage />
    </div>
  );
};
AdminDashboardPage.Layout = DashboardLayout;
export default AdminDashboardPage;
