import React, { useEffect, useReducer } from "react";
import Axios from "axios";

import { initialState, reducer } from "../utility/Reducer";
import "./Time.css";

function Time() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    getTime()
  },[])
  const getTime = () => {
    Axios.get("https://freegeoip.app/json/", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch();
  };

  return (
    <div className="Time">
      <div className="Greeting">
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
