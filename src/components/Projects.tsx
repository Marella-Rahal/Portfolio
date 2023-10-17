import React from "react";
import ProjectItem from "./ProjectItem";
import { projects } from "@/data/data";
import ProjectsMotion from "./FramerMotion/ProjectsMotion";

const Projects = () => {
  return (
    <div id="projects" className="px-10 pt-20 space-y-7">
      <p className="text-effectColor uppercase tracking-widest">projects</p>

      <h2>What I&apos;v Built</h2>

      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 xl:p-10">
        {projects.map((one, index) => {
          return (
            <ProjectsMotion key={index} index={index}>
              <ProjectItem
                title={one.title}
                tech={one.tech}
                img={one.img}
                url={one.url}
              />
            </ProjectsMotion>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
