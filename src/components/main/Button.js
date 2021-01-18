import React from "react";
import "./Button.css";
import arrow from "../../assets/desktop/icon-arrow-up.svg";
function Button({up,setUp }) {
  return (
      <div className="Button-box" onClick={() => {
          setUp(!up)
      }}>
          {up?<p>LESS</p>:<p>MORE</p>}
      

      <img className="Ball" src={arrow} alt="arrow" />
    </div>
  );
}

export default Button;
