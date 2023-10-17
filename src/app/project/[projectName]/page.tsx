import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { fetchProject } from "@/lib/fetchProject";
import Image from "next/image";
import { projectDetail } from "@/data/data";
import type { Metadata } from "next";
import EnterExitMotion from "@/components/FramerMotion/EnterExitMotion";

type propsType = {
  params: {
    projectName: string;
  };
};

export async function generateMetadata({
  params: { projectName },
}: propsType): Promise<Metadata> {
  const displayedProject = fetchProject(projectName);
  return {
    title: displayedProject.title,
    description: displayedProject.description.join(),
    keywords: displayedProject.technologies,
  };
}

export async function generateStaticParams() {
  return projectDetail.map((one) => ({
    projectName: one.param,
  }));
}

const Project = ({ params: { projectName } }: propsType) => {
  const displayedProject = fetchProject(projectName);
  return (
    <EnterExitMotion>
      <div className="relative w-full h-[375px] shadow-xl shadow-shadowColor flex">
        <Image
          className="opacity-30"
          src={displayedProject.img}
          alt={displayedProject.title}
          placeholder="blur"
          blurDataURL={displayedProject.img}
          fill
          priority
        />
        <div className="self-end ml-7 mb-7">
          <h2>{displayedProject.title}</h2>
          <p className="mt-2 pl-1">{displayedProject.tech}</p>
        </div>
      </div>

      <div className="flex flex-col space-y-5 md:space-y-0 md:flex-row my-20 mx-[10%] justify-between md:items-center">
        {/* left */}
        <div className="md:w-[50%]">
          <p>Project</p>

          <h2>Overview</h2>

          <ul className="mt-4 ml-4 list-disc space-y-2">
            {displayedProject.description.map((one, index) => {
              return <li key={index}>{one}</li>;
            })}
          </ul>

          <div className="mt-5">
            <button className="uppercase text-white mr-4 px-5 py-2 hover:scale-[1.05] transition ease-linear duration-150">
              <Link href={displayedProject.demo}>demo</Link>
            </button>

            <button className="uppercase text-white px-5 py-2 hover:scale-[1.05] transition ease-linear duration-150">
              <Link href={displayedProject.code}>code</Link>
            </button>
          </div>
        </div>

        {/* right */}
        <div className="flex flex-col  rounded-xl shadow-xl shadow-shadowColor p-5 space-y-2 select-none">
          <p className="font-bold text-center">Technologies</p>

          {displayedProject.technologies.map((one, index) => {
            return (
              <div key={index} className="flex items-center">
                <RiRadioButtonFill />
                <p className="ml-2">{one}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-full flex justify-center items-center">
        <iframe
          src={displayedProject.video}
          allow="autoplay"
          allowFullScreen
          className="w-[80%] aspect-video bg-black"
        ></iframe>
      </div>

      <div className="my-20 mx-[12%] underline hover:text-effectColor">
        <Link href="/#projects">Back</Link>
      </div>
    </EnterExitMotion>
  );
};

export default Project;
