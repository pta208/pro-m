import React from "react";
import Menu from "../Common/Menu";
import { Footer } from "../Common/Footer";
import { Header } from "./Header";
import { BannerSlider } from "./Banner";
import { useGetBanner } from "../../../../hooks/swr";
export const LandingPageLayout = ({ children }) => {
  const { banners } = useGetBanner();
  return (
    <div className="flex flex-col min-h-screen bg-blaze-orange-50">
      <div className="w-full z-50 shadow-md  shadow-bebecook ">
        <Header />
      </div>
      <Menu className="shadow-md  shadow-bebecook" />

      <BannerSlider banners={banners} />

      <main className="min-h-screen  py-4 max-w-screen-xl w-screen  mx-auto">
        {children}
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
};
