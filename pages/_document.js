import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html
      lang="en"
      className="bg-gradient-to-r from-content-grey_800 via-content-grey_900 to-content-grey_900 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
    >
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
