import Certificates from "./Certificates";
import { certificates } from "../../certificates";

export default function CertificatesSection() {
  return (
    <div id="certificates">
      <h2 className="title mb-[2rem]">Certificados</h2>
      <div className="flex flex-wrap justify-center mb-[.7rem]">
        {certificates.map((certificate) => (
          <Certificates
            key={certificate.tech}
            src={certificate.src}
            tech={certificate.tech}
            logo={certificate.logo}
          />
        ))}
      </div>
    </div>
  );
}
