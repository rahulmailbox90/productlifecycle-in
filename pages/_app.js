import '../styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Use the site logo as favicon. Place the file at /public/images/productlifecycle-logo.png */}
        <link rel="icon" href="/images/productlifecycle-logo.png" />
        {/* Google Fonts for headings and body per design guide */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Poppins:wght@600;700&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
