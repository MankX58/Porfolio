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
    <>
      <Background />
      <Header />
      <Main />
      <Experience />
      <Projects />
      <AboutMe />
      <h2 className="title mb-[2rem]">Certificados</h2>
      <div className="flex flex-wrap justify-center">
        {certificates.map((certificate) => (
          <Certificates src={certificate.src} />
        ))}
      </div>
    </>
  );
}
