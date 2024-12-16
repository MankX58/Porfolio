import React from "react";
import Background from "./Background";
import Header from "./Header";
import Main from "./Main";
import Experience from "./Experience";
import Projects from "./Projects";
import AboutMe from "./About";
import Certificates from "./Certificates";
import { certificates } from "../../certificates";

export default function App() {
  return (
    <div className="overflow-hidden">
      <Background />
      <Header />
      <Main />
      <Experience />
      <Projects />
      <AboutMe />
      <h2 className="title mb-[2rem]">Certificados</h2>
      <div className="flex flex-wrap justify-center mb-[.7rem]">
        {certificates.map((certificate) => (
          <Certificates
            src={certificate.src}
            tech={certificate.tech}
            logo={certificate.logo}
          />
        ))}
      </div>
    </div>
  );
}
