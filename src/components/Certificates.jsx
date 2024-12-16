import React from "react";

export default function Certificates(certificate) {
  const [hover, setHover] = React.useState(false);

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);
  const handleClick = () => window.open(certificate.src, "_blank");

  return (
    <div
      className="relative flex flex-wrap flex-row gap-[1rem]  max-md:h-[150px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div
        className={`absolute rounded-[10px] shadow-lg inset-0 flex items-center cursor-pointer justify-center bg-black bg-opacity-75 transition-opacity duration-300 mr-[1rem] max-sm:w-[150px] max-sm:h-[100px] max-md:w-[200px] max-md:h-[150px] ${
          hover ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="text-white text-center flex flex-col flex-wrap justify-center items-center">
          <img
            src={certificate.logo}
            alt={`${certificate.tech} logo`}
            className="w-16 h-16 mb-2 max-md:w-12 max-md:h-12 max-sm:w-8 max-sm:h-8"
          />
          <b>
            <p className="text-[19px] max-md:text-[14px] max-sm:text-[12px]">
              {certificate.tech}
            </p>
          </b>
        </div>
      </div>
      <iframe
        src={certificate.src}
        frameBorder="0"
        className=" h-[200px] w-[300px] rounded-[10px] shadow-lg mr-[1rem] max-sm:w-[150px] max-sm:h-[100px] max-md:w-[200px] max-md:h-[150px]"
      ></iframe>
    </div>
  );
}
