import { AddProductForm } from "../../components/Dashboard/Product/AddProduct/AddProductForm";
import DashboardLayout from "../../components/Dashboard/Layout";
export default function AddProduct() {
  return (
    <div className="w-[700px] bg-white p-4 mx-auto">
      <AddProductForm />
    </div>
  );
}
AddProduct.Layout = DashboardLayout;
