import React from "react";
import { projects } from "../../projects.js";

export default function ProjectCard(project) {
  return (
    <div className="p-[1rem] flex flex-wrap relative rounded-[10px] h-auto">
      <div className="w-[11rem] sm:w-[14rem] bg-[#1d1c1c] bg-opacity-75 h-auto sm:h-[19rem] flex flex-col overflow-hidden rounded-[10px] hover:border-[#e9cf5d] border-[2px] border-[#fff0] transition-all card_hover_button mb-[1rem]">
        <img
          src={project.img}
          className="object-cover h-[8rem] mb-[.7rem] cursor-pointer"
          alt=""
          onClick={() => {
            window.open(project.url, "_blank");
          }}
        />
        <div className="p-[.5rem]">
          <h2 className="text-[#e9cf5d] font-onest font-semibold text-center text-xl mt-[1rem]">
            {project.title}
          </h2>
          <p className="text-gray-300 font-onest text-md text-center hidden sm:block">
            {project.description}
          </p>
        </div>
        <button
          className="bg-[#e9cf5d] absolute opacity-0 rounded-[10px] w-[8rem] h-[2rem] self-center transition top-[18.8rem] translate-y-[40%] font-onest font-semibold duration-[0.3s] hidden sm:block"
          onClick={() => {
            window.open(project.repo, "_blank");
          }}
        >
          Saber más...
        </button>
      </div>
    </div>
  );
}
