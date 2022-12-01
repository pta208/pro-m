import { GoogleAnalytics } from "nextjs-google-analytics";
export const GoogleAnalyticProvider = ({ children }) => {
  return (
    <>
      <GoogleAnalytics trackPageViews strategy="lazyOnload" />
      {children}
    </>
  );
};
