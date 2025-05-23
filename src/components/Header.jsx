import { useState, useEffect } from "react";
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`bg-[#1d1c1c] rounded-[15px] w-[30rem] max-md:w-[25rem] text-center h-[2.5rem] mt-[1rem] text-md max-md:text-sm text-gray-300 font-poppins m-auto flex justify-center place-items-center gap-[2rem] border-[2px] border-gray-300 z-50 fixed header ${
        isScrolled ? "backdrop-blur-xl bg-opacity-50 " : ""
      }`}
    >
      <a href="#experience">
        <h1 className="header_text z-50">Experiencia</h1>
      </a>
      <a href="#projects">
        <h1 className="header_text z-50">Proyectos</h1>
      </a>
      <a href="#aboutme">
        <h1 className="header_text z-50">Sobre mí</h1>
      </a>
      <a href="#certificates">
        <h1 className="header_text z-50">Certificados</h1>
      </a>
    </header>
  );
}
