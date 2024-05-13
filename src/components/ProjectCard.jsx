import React, { useState } from "react";
import { projects } from "../../projects.js";

export default function ProjectCard(project) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="p-[1rem] flex relative rounded-[10px]">
      <div className="w-[14rem] bg-[#1d1c1c] bg-opacity-75 h-[19rem] flex flex-col overflow-hidden rounded-[10px] hover:border-[#e9cf5d] border-[2px] border-[#fff0] transition-all card_hover_button mb-[1rem]  ">
        <img
          src={project.img}
          className="object-cover h-[8rem] mb-[.7rem] cursor-pointer"
          alt=""
          onClick={openModal}
        />
        <div className="p-[.5rem]">
          <h2 className="text-[#e9cf5d] font-onest font-semibold text-center text-xl mt-[1rem]">
            {project.title}
          </h2>
          <p className="text-gray-300 font-onest text-md text-center">
            {project.description}
          </p>
        </div>
        <button
          className="bg-[#e9cf5d] absolute opacity-0 rounded-[10px] w-[8rem] h-[2rem] self-center transition top-[18.8rem] translate-y-[40%] font-onest font-semibold duration-[0.3s]"
          onClick={() => {
            window.open(project.repo, "_blank");
          }}
        >
          Saber más...
        </button>
      </div>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-[100]">
          <div className="rounded-lg">
            <img
              src={project.img}
              className="max-w-[45rem] max-h-[25rem] "
              alt=""
            />
            <button
              className="absolute top-2 right-2 text-red-500 text-3xl size-[2rem] font-extrabold"
              onClick={closeModal}
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
