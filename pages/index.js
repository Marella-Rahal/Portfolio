import About from "../components/About";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Link from 'next/link';
import {HiOutlineChevronDoubleUp} from 'react-icons/hi';

export default function Home() {
  return (
    <>

      <Main/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>

      <div className="flex justify-center my-20">
          <div className="p-3 rounded-full shadow-xl shadow-shadowColor cursor-pointer hover:scale-[1.2]">
              <Link href="/"><HiOutlineChevronDoubleUp className="text-effectColor" size={30}/></Link>
          </div>
      </div>
  
      
    </>
  )
}
