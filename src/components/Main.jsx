import Badges from "./Badges";

export default function Main() {
  return (
    <div className="mb-[3rem]">
      <div className="z-[50] flex flex-row-reverse mt-[8rem] mb-[1.5rem] justify-center gap-[1rem]">
        <h1 className="font-poppins font-semibold text-4xl mt-[2rem] text-gray-200">
          MankX_
        </h1>
        <img
          src="https://i.ibb.co/nc3Vhpk/1734165597860.jpg"
          alt="MankX_"
          className="size-[5.5rem]  object-cover relative top-[5px] rounded-[100px] border-gray-300 border-[2px] inline"
        />
      </div>
      <div className="flex justify-center">
        <button
          className="button_job w-[6rem] h-[1.5rem] font-poppins ml-[4.5rem] my-[-2.3rem]"
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/manuel-gutierrez-80616a264/",
              "_blank"
            );
          }}
        >
          Disponible
        </button>
      </div>
      <div className="flex justify-center">
        <p className="w-[50%] font-poppins font-light text-gray-200 text-center">
          <b>¡Hola!</b> soy Manuel Gutiérrez, también conocido como MankX_
          <br />
          Soy{" "}
          <strong className="text-[#e9cf5d] font-bold">
            estudiante de la Unviersidad de Medellín con conocimientos en React,
            Python, Javascript, Css <i>(Tailwindcss)</i> y Html
          </strong>
          . Me enfoco principalmente en el desarrollo web, pero también tengo
          conocimientos sobre ciberseguridad y creación de videojuegos.
        </p>
      </div>
      <div className="py-[1rem]">
        <Badges />
      </div>
    </div>
  );
}
