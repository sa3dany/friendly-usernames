import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.png" type="image/png" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          {/* <link
            href="https://fonts.googleapis.com/css2?family=...&display=swap"
            rel="stylesheet"
          /> */}
          <meta
            name="description"
            content="Generate random friendly usernames"
          />
        </Head>
        <body className="bg-gray-50 font-sans text-gray-800 dark:bg-gray-900 dark:text-gray-100">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
