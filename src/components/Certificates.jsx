import React from "react";

export default function Certificates(certificate) {
  return (
    <div className="flex flex-row gap-[1rem]">
      {/* <object
        data={certificate.src}
        type="application/pdf"
        className="p-[1rem] min-w-[25rem] min-h-[23rem]"
      >
        <p>
          alternate text <a href={certificate.src}>link</a>
        </p>
      </object> */}
      <iframe src={certificate.src} height="200" width="300" frameborder="0" className="m-[.5rem]"></iframe>
    </div>
  );
}
