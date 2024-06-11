import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        {/* @TODO handle multiple sizes icons for tablet/mobile/shortcuts etc.. */}
        <link rel="icon" href="/favicon.ico" />
        {/* @TODO quick meta tags from ChatGPT, will have to analyse and remove some, ensure assets & links are good  */}
        <meta
          name="description"
          content="Fanvue is the ultimate platform for fans to connect, share, and celebrate their passions. Join our vibrant community of enthusiasts to discover new content, engage with like-minded fans, and express your fandom in exciting ways."
        />
        <meta property="og:title" content="Fanvue - Connect with Fellow Fans" />
        <meta
          property="og:description"
          content="Fanvue is the ultimate platform for fans to connect, share, and celebrate their passions. Join our vibrant community of enthusiasts to discover new content, engage with like-minded fans, and express your fandom in exciting ways."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.fanvue.com" />
        <meta
          property="og:image"
          content="https://www.fanvue.com/assets/logo.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:title"
          content="Fanvue - Connect with Fellow Fans"
        />
        <meta
          property="twitter:description"
          content="Fanvue is the ultimate platform for fans to connect, share, and celebrate their passions. Join our vibrant community of enthusiasts to discover new content, engage with like-minded fans, and express your fandom in exciting ways."
        />
        <meta
          property="twitter:image"
          content="https://www.fanvue.com/assets/logo.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
