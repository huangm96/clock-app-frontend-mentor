import React from "react";

import "./Info.css";
import InfoSection from "./InfoSection.js"
function Info({ timeZone, dayOfWeek, dayOfYear, weekNum }) {
  return (
    <div className="Detail-info">
      <div className="Content">
        <InfoSection title="CURRENT TIMEZONE" data={timeZone} />
        <InfoSection title="DAY OF THE YEAR" data={dayOfYear} />
      </div>
      <div className="Content Right-Content">
        <InfoSection title="DAY OF THE WEEK" data={dayOfWeek} />
        <InfoSection title="WEEK NUMBER" data={weekNum} />
      </div>
    </div>
  );
}

export default Info;
