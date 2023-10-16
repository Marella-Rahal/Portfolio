import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />

      <div className="flex justify-center my-20">
        <div className="p-3 rounded-full shadow-xl shadow-shadowColor cursor-pointer hover:scale-[1.03] transition ease-linear duration-75">
          <Link href="/#main">
            <HiOutlineChevronDoubleUp className="text-effectColor" size={30} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
