import Head from 'next/head'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import {motion,AnimatePresence} from 'framer-motion';

const pageVariants={

  hidden:{
    opacity:0,
  },
  visible:{
    opacity:1,
  },
  exit:{
    opacity:0,
  }

}


function MyApp({ Component, pageProps ,router}) {
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

      

      <AnimatePresence exitBeforeEnter>

        <motion.div key={router.route} variants={pageVariants} initial="hidden" animate="visible" exit="exit">

          <Navbar/>

          <Component {...pageProps} />

        </motion.div>
        
      </AnimatePresence>

      
    </>
  ) 
}

export default MyApp
