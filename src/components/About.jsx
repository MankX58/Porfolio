export default function AboutMe() {
  return (
    <section className="w-full pb-[6rem]" id="aboutme">
      <h2 className="title pt-[5rem] mb-[3rem]">Sobre mí</h2>
      <div className="flex max-lg:flex-col justify-center items-center gap-[1rem]">
        <p className="text-gray-300 w-[40rem] flex-none text-lg text-left max-lg:w-[70%]">
          Soy un estudiante de ingenieria de sistemas, amo lo que hago y mis
          conocimientos de la univerisdad los complemento con lo que estudio de
          manera autonoma. <br />
          Mi objetivo es convertirme en un desarrollador web destacado, ser un
          lider y trabajar en proyectos que me permitan aprender y crecer
          profesionalmente. Siempre estoy dispuesto a aprender cosas nuevas y a
          enfrentar nuevos retos que me ayuden a ser mejor cada día. Soy bueno
          adaptandome a nuevos entornos, ya sean sociales o laborales y
          trabajando en equipo.
          <br />
          <br />
          Actualmente tengo compentencias en:
          <br />
          <ul className="text-gray-300">
            <li className="font-semibold text-[#38c9b4]">ReactJS</li>
            <li className="font-semibold text-[#e7aa4e]">Python</li>
            <li className="font-semibold text-[#e4d54c]">JavaScript</li>
            <li className="font-semibold text-[#c44242]">Java</li>
            <li className="font-semibold text-[#6482d3]">CSS</li>
            <li className="font-semibold text-[#6482d3]">Tailwindcss</li>
            <li className="font-semibold text-[#da6e54]">HTML</li>
            <li className="font-semibold text-[#3E9]">SQL</li>
          </ul>
          <br />
          También tengo conocimientos en ciberseguridad y creación de
          videojuegos.
        </p>
        <img
          src="https://i.ibb.co/XY7K51x/IMG-20241205-124054-708.webp"
          alt=""
          className="size-[14rem] hover:rotate-0 rotate-12 flex-initial rounded-[10px] relative top-[0rem] shadow-lg shadow-[#e9cf5d] transition-all left-[2rem] max-lg:left-0 max-lg:top-[1.5rem] max-lg:mb-[1rem]"
        />
      </div>
    </section>
  );
}
