import Head from "next/head";
import React from "react";

export const Meta = ({ title }) => {
  return (
    <Head>
      <meta property="og:title" content="BVN Distribution" key="title" />
      <meta property="og:url" content="https://phanphoibvn.vn/" />
      <meta property="og:type" content="website" />
      <title>{`${title ? title + " - BVN Distribution" : "BVN Distribution"}`}</title>
    </Head>
  );
};
