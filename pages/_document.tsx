import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx:null) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
        <script src='https://kit.fontawesome.com/990cf3919d.js' crossorigin='anonymous'></script>
        </Head>
        <body >
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;