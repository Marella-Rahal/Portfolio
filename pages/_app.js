import Head from 'next/head'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Portfolio | Marella Rahal</title>
        {/* <meta charset="UTF-8"/> */}
        <meta name="description" content="Marella Rahal&apos;s Portfolio using Next.Js and Tailwind "/>
        <meta name="keywords" content="React.Js , Next.Js, Tailwind, Css, javascript ,portfolio, Marella, Rahal "/>
        <meta name="author" content="Marella Rahal"/>
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0"/> */}
      </Head>
      <Navbar/>
      <Component {...pageProps} />
    </>
  ) 
}

export default MyApp
