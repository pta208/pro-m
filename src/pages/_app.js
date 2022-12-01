import "antd/dist/reset.css";
import "../styles/globals.css";
import { extendTheme } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.core.css";
import "react-quill/dist/quill.bubble.css";
import "@fontsource/source-serif-pro";
import { LandingPageLayout } from "../components/Layout/LandingPageLayout";
import { GoogleAnalyticProvider } from "../lib/google-analytic";
const theme = extendTheme({
  fonts: {
    heading: `'Source Serif Pro', sans-serif`,
    body: `'Source Serif Pro', sans-serif`,
  },
});

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ? Component.Layout : LandingPageLayout;
  return (
    <ChakraProvider theme={theme}>
      <GoogleAnalyticProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GoogleAnalyticProvider>
    </ChakraProvider>
  );
}

export default MyApp;
