import React from "react";

import "./Main.css"

import Quote from "./Quote.js"
import Time from "./Time.js"
import Button from "./Button.js"

function Main() {
    return (
      <div className="Main Main-whole Main-day">
            <Quote />
            <div className="Bottom-container">
                <Time />
                <Button />
            </div>
            
      </div>
    );
}

export default Main;
