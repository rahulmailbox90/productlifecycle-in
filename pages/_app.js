import '../styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Use the site logo as favicon. Place the file at /public/images/productlifecycle-logo.png */}
        <link rel="icon" href="/images/productlifecycle-logo.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
