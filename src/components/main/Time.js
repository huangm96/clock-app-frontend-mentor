import React from "react";
import Moment from "react-moment";
import "./Time.css";
import sunIcon from "../../assets/desktop/icon-sun.svg";
import moonIcon from "../../assets/desktop/icon-moon.svg";

function Time({time,city,country,greeting,abbreviation}) {

  return (
    <div className="Time">
          <div className="Greeting-Box">
            {greeting == "GOOD EVENING" ? (
              <img src={moonIcon} alt="moon" width="20" height="20" />
            ) : (
              <img src={sunIcon} alt="sun" width="20" height="20" />
            )}

            <p className="Greeting-content">{`${greeting}, IT'S CURRENTLY`}</p>
          </div>
          <div className="TimeBox">
            <div className="Current-time">
              <Moment format="hh:mm">{time}</Moment>
            </div>
            <div className="Abbreviation">
              <p>{abbreviation}</p>
            </div>
          </div>
      
      {city ? (
        <div className="Location">
          <span>{`IN ${city}, ${country}`}</span>
        </div>
      ) : null}
    </div>
  );
}

export default Time;
