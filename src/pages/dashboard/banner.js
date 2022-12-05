import React from "react";
import { BannerManagerTemplate } from "../../components/Dashboard/template/BannerManger";
import { useGetBanner } from "../../hooks/swr";
import { DashboardLayout } from "../../components/Dashboard/Layout";
const BannerPage = () => {
  const { banners } = useGetBanner();
  return (
    <div>
      <BannerManagerTemplate banners={banners} />
    </div>
  );
};
export default BannerPage;
BannerPage.Layout = DashboardLayout;
