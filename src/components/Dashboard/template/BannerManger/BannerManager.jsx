import React from "react";
import { BannerForm } from "../../Banner";

export const BannerManagerTemplate = ({ banners }) => {
  return (
    <>
      <BannerForm banners={banners} />
    </>
  );
};
