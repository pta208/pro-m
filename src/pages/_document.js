import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="vi">
      <Head>
        <meta property="og:title" content="BVN Distribution" key="title" />
        <meta property="og:url" content="https://phanphoibvn.vn/" />
        <meta property="og:type" content="website" />
        <link href="https://fonts.googleapis.com" />
        <link href="https://fonts.gstatic.com" />
        <link
          href={`https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Roboto:wght@400;500;700;900&display=swap`}
          rel="stylesheet"
        />

        <title>BVN Distribution</title>
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script
          strategy="beforeInteractive"
          // crossOrigin={"anonymous"}
          src={`https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v14.0&appId=1326553517365456&autoLogAppEvents=1`}
          nonce="B7oynq4a"
        ></Script>
        <Script async src="https://www.tiktok.com/embed.js\"></Script>

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-JPSZD5MK56"
        ></Script>
        <Script>
          window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-JPSZD5MK56');
        </Script>
      </body>
    </Html>
  );
}
