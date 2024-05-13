import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../../projects";

export default function Projects() {
  return (
    <div className="pt-[5rem]" id="projects">
      <h2 className="title mb-[2rem]">Proyectos</h2>
      <div className="flex justify-center overflow-scroll no-scroll">
        {projects.map((projects) => (
          <ProjectCard
            title={projects.title}
            description={projects.description}
            img={projects.img}
            repo={projects.repo}
          />
        ))}
      </div>
    </div>
  );
}
