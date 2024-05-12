import React from "react";
import Header from "./Header";
import Main from "./Main";
import Experience from "./Experience";

export default function App() {
  return (
    <>
      <div class="area" className="fixed w-full h-full z-[-1]">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <Header />
      <Main />
      <Experience />
    </>
  );
}
