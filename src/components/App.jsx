import Background from "./Background";
import Header from "./Header";
import Main from "./Main";
import Experience from "./Experience";
import Projects from "./Projects";
import AboutMe from "./About";
import CertificatesSection from "./CertificatesSection";

export default function App() {
  return (
    <div className="overflow-hidden">
      <Background />
      <Header />
      <Main />
      <Experience />
      <Projects />
      <AboutMe />
      <CertificatesSection />
    </div>
  );
}
