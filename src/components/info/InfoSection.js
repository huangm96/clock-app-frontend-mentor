import React  from "react";

import "./InfoSection.css";

function InfoSection({ title, data}) {
  return (
    <div className="InfoSection">
      <p className="Title">{title}</p>
      <p className="Data">{data}</p>
    </div>
  );
}

export default InfoSection;
