import "antd/dist/reset.css";
import "../styles/globals.css";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import { useEffect } from "react";
import "@fontsource/source-serif-pro";
import { LandingPageLayout } from "../components/LandingPage/Layout/LandingPageLayout";
import { GoogleAnalyticProvider } from "../lib/google-analytic";
import { Meta } from "../components/SEO";
import { useRouter } from "next/router";
const theme = extendTheme({
  fonts: {
    heading: `'Source Serif Pro', sans-serif`,
    body: `'Source Serif Pro', sans-serif`,
  },
});

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ? Component.Layout : LandingPageLayout;
  const title = Component.Title;
  const router = useRouter();
  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init("237423865477943");
        ReactPixel.pageView();

        router.events.on("routeChangeComplete", () => {
          ReactPixel.pageView();
        });
      });
  }, [router.events]);
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
