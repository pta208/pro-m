import React from "react";
import { Footer } from "../Common/Footer";
import Menu from "../Common/Menu";
import { Header } from "./Header";

export const ProductPageLayout = ({ children }) => {
  return (
    <div className="bg-blaze-orange-50">
      <Header />
      <Menu />
      <main className="min-h-screen  py-4 max-w-screen-xl w-screen  mx-auto">
        {children}
      </main>
      <Footer />
    </div>
  );
};
