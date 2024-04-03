import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/logosibarita.svg" type="image/x-icon" />
        {/* <script
          src="https://kit.fontawesome.com/73d94b16ae.js"
          crossOrigin="anonymous"
        ></script> */}
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
