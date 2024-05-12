import React from "react";

export default function Timeline() {
  return (
    <section class="design-section">
      <div class="timeline">
        <div class="timeline-empty"></div>

        <div class="timeline-middle">
          <div class="timeline-circle"></div>
        </div>
        <div class="timeline-component timeline-content">
          <h3>2020</h3>
          <p>
            Aprender{" "}
            <strong className="text-[#e9cf5d] font-semibold">Html y Css</strong>{" "}
            <br /> Realizar páginas sencillas como blogs
          </p>
        </div>

        <div class="timeline-component timeline-content">
          <h3>2021</h3>
          <p>
            Aprender{" "}
            <strong className="text-[#e9cf5d] font-semibold">
              Javascript y Python
            </strong>{" "}
            <br />
            Realizar páginas interactivas y más estructuradas usando eventos y
            código de Javascript
          </p>
        </div>
        <div class="timeline-middle">
          <div class="timeline-circle"></div>
        </div>
        <div class="timeline-empty"></div>

        <div class="timeline-empty"></div>

        <div class="timeline-middle">
          <div class="timeline-circle"></div>
        </div>
        <div class=" timeline-component timeline-content">
          <h3>2022</h3>
          <p>
            Aprender{" "}
            <strong className="text-[#e9cf5d] font-semibold">ReactJS</strong>{" "}
            <br />
            Realizar páginas más complejas y con mejor rendimiento
          </p>
        </div>

        <div class="timeline-component timeline-content">
          <h3>2023</h3>
          <p>
            Aprender{" "}
            <strong className="text-[#e9cf5d] font-semibold">
              TailwindCSS
            </strong>{" "}
            <br />
            Realizar páginas con mejor diseño, mejor optimizadas y mejor
            estructuradas
          </p>
        </div>
        <div class="timeline-middle">
          <div class="timeline-circle"></div>
        </div>
        <div class="timeline-empty"></div>

        <div class="timeline-empty"></div>

        <div class="timeline-middle">
          <div class="timeline-circle"></div>
        </div>
        <div class="timeline-component timeline-content">
          <h3>2024</h3>
          <p>
            Empezar a aprender{" "}
            <strong className="text-[#e9cf5d] font-semibold">
              NextJS y bases de datos
            </strong>{" "}
            <br />
            El objetivo es realizar páginas más complejas y mejor optimizadas, y
            empezar a obtener las bases del desarrollo backend usando bases de
            datos
          </p>{" "}
        </div>
      </div>
    </section>
  );
}
