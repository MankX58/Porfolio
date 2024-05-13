import React from "react";

export default function Certificates(certificate) {
  return (
    <div className="flex">
      <object
        data={certificate.src}
        type="application/pdf"
        className="p-[1rem] min-w-[25rem] min-h-[23rem]"
      >
        <p>
          alternate text <a href={certificate.src}>link</a>
        </p>
      </object>
    </div>
  );
}
