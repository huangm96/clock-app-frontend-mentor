import React, { useReducer } from "react";
import Axios from "axios";

import { initialState, reducer } from "../utility/Reducer";
import "./Time.css";

function Time() {
    const [state, dispatch] = useReducer(reducer, initialState)

   
    return (
      <div className="Time">
        <div
          className="Greeting"
                
        >
          <p>Good morning</p>
        </div>
        <div className="Current-time">
          <p>11:37</p>
        </div>
        <div className="Location">
          <p>LonDon</p>
        </div>
      </div>
    );
}

export default Time;