import React, { useEffect, useReducer } from "react";
import Axios from "axios";
import Moment from "react-moment";
import { initialState, reducer } from "../utility/Reducer";
import "./Time.css";

function Time() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
        getTime();
  }, [])

  const getTime = () => {
    Axios.get("http://worldtimeapi.org/api/ip/")
      .then((time) => {
        console.log(time);
        // var now = moment(time.data.datetime).format("HH");
        // console.log("now", now,parseInt(now));
        dispatch({
          type: "getTimeSuccess",
          payload: {
            time: time.data.datetime,
            abbreviation: time.data.abbreviation,
            dayOfWeek: time.data.day_of_week,
            dayOfYear: time.data.day_of_year,
            weekNum:time.data.week_number
          },
        });
        Axios.get(
          "https://cors-anywhere.herokuapp.com/" +
            `https://freegeoip.app/json/${time.data.client_ip}`
        )
          .then((loc) => {
            console.log(loc);
            dispatch({
              type: "getLocationSuccess",
              payload: {
                city: loc.data.city,
                country: loc.data.country_code,
                timeZone:loc.data.time_zone
              },
            });
          })
          .catch();
      })
      .catch();
}
  return (
    <div className="Time">
      <div className="Greeting">
        <p>Good morning</p>
      </div>
      <div className="TimeBox">
        <div className="Current-time">
          <Moment format="hh:mm:ss">{state.time}</Moment>
        </div>
        <div className="Abbreviation">
          <p>{state.abbreviation}</p>
        </div>
      </div>
      <div className="Location">
        <span>{`IN ${state.city}, ${state.country}`}</span>
        
      </div>
    </div>
  );
}

export default Time;
