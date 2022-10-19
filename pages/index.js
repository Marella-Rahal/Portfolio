import About from "../components/About";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Link from 'next/link';
import {HiOutlineChevronDoubleUp} from 'react-icons/hi';
import {motion,AnimatePresence} from 'framer-motion';
import { buttonVariants } from "../components/Main";

export const indexVariants={

    hidden:{
      opacity:0,
      x:"100%"
    },
    visible:{
      opacity:1,
      x:0,
      transition:{
        delay:0.5,
        duration:0.75
      }
    },

}


export default function Home() {
  return (
      <motion.div variants={indexVariants} initial="hidden" animate="visible">

        <Main/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>

        <div className="flex justify-center my-20">
            <motion.div className="p-3 rounded-full shadow-xl shadow-shadowColor cursor-pointer hover:scale-[1.2]"
              variants={buttonVariants}
              animate="hover"
            >
                <Link href="/"><HiOutlineChevronDoubleUp className="text-effectColor" size={30}/></Link>
            </motion.div>
        </div>
    
        
      </motion.div>
  )
}
