import React from "react";
import ProjectItem from "./ProjectItem";
import { projects } from "@/data/data";
import ProjectsMotion from "./FramerMotion/ProjectsMotion";

const Projects = () => {
  return (
    <div id="projects" className="pt-20 space-y-7">
      <p className="text-effectColor uppercase tracking-widest px-3 xl:px-10">
        projects
      </p>

      <h2 className="px-3 xl:px-10">What I&apos;v Built</h2>

      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 px-3 pb-10 xl:p-10 overflow-hidden">
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
