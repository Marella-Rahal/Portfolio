import Head from 'next/head'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Portfolio | Marella Rahal</title>
      </Head>
      <Navbar/>
      <Component {...pageProps} />
    </>
  ) 
}

export default MyApp
