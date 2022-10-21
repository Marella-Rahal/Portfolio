import Head from 'next/head'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import {motion,AnimatePresence} from 'framer-motion';
import { useRouter } from 'next/router';

const pageVariants={

  hidden:{
    opacity:0,
    x:"100%"
  },
  visible:{
    x:"0",
    opacity:1
  },
  exit:{
    x:"-100%",
    opacity:0
  }

}


function MyApp({ Component, pageProps}) {

  const router=useRouter();

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

      <AnimatePresence exitBeforeEnter>

        <motion.div key={router.asPath} variants={pageVariants} initial="hidden" animate="visible" exit="exit">

          <Component {...pageProps} />

        </motion.div>
        
      </AnimatePresence>

      
    </>
  ) 
}

export default MyApp
