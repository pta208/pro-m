import React from "react";
import Image from "next/image";
import NukaCarousel from "nuka-carousel";

export const BannerSlider = ({ banners }) => {
  return (
    <>
      <NukaCarousel
        autoplay={true}
        autoplayInterval={5000}
        wrapAround={true}
        pauseOnHover={true}
        withoutControls={true}
      >
        {banners?.map((banner, index) => (
          // <Image
          //   key={index}
          //   src={banner.url}
          //   width={21}
          //   height={9}
          //   layout="responsive"
          //   priority={true}
          //   quality={100}
          // />
          <img
            key={index}
            src={banner.url}
            loading="eager"
            // width={21}
            // height={9}
            // layout="responsive"
            // priority={true}
            // quality={100}
          />
        ))}
      </NukaCarousel>
    </>
  );
};
