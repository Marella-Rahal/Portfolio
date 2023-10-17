import React from "react";
import Link from "next/link";
import Image from "next/image";
import AboutLeftMotion from "./FramerMotion/AboutLeftMotion";
import AboutRightMotion from "./FramerMotion/AboutRightMotion";

const About = () => {
  return (
    <div
      id="about"
      className="px-3 xl:px-10 pt-20 flex flex-col md:flex-row md:justify-between md:items-start overflow-hidden"
    >
      <AboutLeftMotion>
        <p className="text-effectColor uppercase tracking-widest">About</p>

        <h2>Who I Am</h2>

        <p className="max-w-[90%] md:max-w-[75%]">
          &#128516; I&apos;m not your normal developer <br />
          &#128516; Graduated from the Faculty of Informatics Engineering,
          Department of Software Engineering. <br />
          &#128516; I previously participated in the university programming
          competition (<span className="text-effectColor">ICPC</span>) for two
          years.
          <br />
          &#128516; I have the <span className="text-effectColor">
            desire
          </span>{" "}
          , the <span className="text-effectColor">passion</span> and the
          ability to <span className="text-effectColor">learn quickly</span>.
        </p>

        <p className="underline cursor-pointer hover:text-effectColor">
          <Link href="/#projects">Check out some of my latest projects</Link>
        </p>
      </AboutLeftMotion>

      <AboutRightMotion>
        <Image
          className="rounded-xl shadow-lg shadow-shadowColor"
          src="/MR.webp"
          alt="Marella Photo"
          sizes="(min-width: 1840px) 450px, (min-width: 780px) 25vw, 300px"
          placeholder="blur"
          blurDataURL="/MR.webp"
          fill
          priority
        />
      </AboutRightMotion>
    </div>
  );
};

export default About;
