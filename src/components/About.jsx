import React from "react";

export default function AboutMe() {
  return (
    <section className="w-full pb-[6rem]" id="aboutme">
      <h2 className="title pt-[5rem] mb-[3rem]">Sobre mí</h2>
      <div className="flex justify-center items-center gap-[1rem]">
        <p className="text-gray-300 w-[40rem] flex-none text-lg text-left">
          Hola, soy un estudiante de programación autodidacta que busca aprender
          y mejorar cada día. <br />
          Mi objetivo es convertirme en un desarrollador web full-stack y
          trabajar en proyectos que me permitan aprender y crecer
          profesionalmente.
          <br />
          <br />
          Actualmente estoy aprendiendo:
          <br />
          <ul className="text-gray-300">
            <li className="font-semibold text-[#38c9b4]">React</li>
            <li className="font-semibold text-[#e7aa4e]">Python</li>
            <li className="font-semibold text-[#e4d54c]">JavaScript</li>
            <li className="font-semibold text-[#6482d3]">
              CSS <i>(Tailwindcss)</i>
            </li>
            <li className="font-semibold text-[#da6e54]">HTML</li>
          </ul>
          <br />
          También tengo conocimientos en ciberseguridad y creación de
          videojuegos.
        </p>
        <img
          src="https://cdn.picrew.me/shareImg/org/202404/2259682_ad2opgHu.png"
          alt=""
          className="size-[14rem] hover:rotate-0 rotate-12 flex-initial rounded-[10px] relative top-[0rem] shadow-lg shadow-[#e9cf5d] transition-all"
        />
      </div>
    </section>
  );
}
