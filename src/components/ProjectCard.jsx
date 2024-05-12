import React from "react";
import { projects } from "../../projects.js";

export default function ProjectCard(project) {
  return (
    <div className="p-[1rem] flex relative rounded-[10px] ">
      <div className="w-[14rem] bg-[#1d1c1c] bg-opacity-75 h-[19rem] flex flex-col overflow-hidden rounded-[10px] hover:border-[#e9cf5d] hover:border-[2px] transition-all duration-75 card_hover_button mb-[1rem]">
        <img
          src={project.img}
          className="object-cover h-[8rem] mb-[.7rem]"
          alt=""
        />
        <div className="p-[.5rem]">
          <h2 className="text-[#e9cf5d] font-onest font-semibold text-center text-xl mt-[1rem]">
            {project.title}
          </h2>
          <p className="text-gray-300 font-onest text-md text-center">
            {project.description}
          </p>
        </div>
        <button className="bg-[#e9cf5d] absolute opacity-0 rounded-[10px] w-[8rem] self-center transition top-[19rem] translate-y-[40%] font-onest font-semibold">
          Saber más...
        </button>
      </div>
    </div>
  );
}
