import "antd/dist/reset.css";
import "../styles/globals.css";
import { extendTheme } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";

import "@fontsource/source-serif-pro";
import { LandingPageLayout } from "../components/LandingPage/Layout/LandingPageLayout";
import { GoogleAnalyticProvider } from "../lib/google-analytic";
import { Meta } from "../components/SEO";
const theme = extendTheme({
  fonts: {
    heading: `'Source Serif Pro', sans-serif`,
    body: `'Source Serif Pro', sans-serif`,
  },
});

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ? Component.Layout : LandingPageLayout;
  const title = Component.Title;
  return (
    <ChakraProvider theme={theme}>
      <Meta title={title && title} />
      <GoogleAnalyticProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GoogleAnalyticProvider>
    </ChakraProvider>
  );
}

export default MyApp;
