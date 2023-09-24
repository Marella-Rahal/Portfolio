import Head from "next/head";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const pageVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Portfolio | Marella Rahal</title>
        {/* <meta charset="UTF-8"/> */}
        <meta
          name="description"
          content="Marella Rahal's Portfolio using Next.Js and TailwindCSS "
        />
        <meta
          name="keywords"
          content="React.Js , Next.Js, TailwindCSS, Css, javascript ,portfolio, Marella, Rahal "
        />
        <meta name="author" content="Marella Rahal" />
        <link rel="icon" href="logo.svg" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0"/> */}
      </Head>

      <Navbar />

      <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          variants={pageVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
