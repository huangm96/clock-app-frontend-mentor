import React, { useEffect, useReducer } from "react";
import "./Quote.css";
import Axios from "axios";
import { initialState, reducer } from "../utility/Reducer";
import refreshIcon from "../../assets/desktop/icon-refresh.svg";
function Quote() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    getQuote();
  }, []);
  const getQuote = () => {
    dispatch({
      type: "getQuoteStart",
    });
    Axios.get("https://api.quotable.io/random")
      .then((res) => {
        console.log(res);
        dispatch({
          type: "getQuoteSuccess",
          payload: { content: res.data.content, author: res.data.author },
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: "getQuoteFailed",
        });
      });
  };
  return (
    <div className="Quote">
      <div className="QuoteContent">
        {state.quote ? (
          <div>
            <p>{state.quote}</p>
            <p className="author">{state.author}</p>
          </div>
        ) : null}
      </div>
      <div className="RefreshIcon" onClick={() => getQuote()}>
        <img src={refreshIcon} alt="refresh" width="20" height="20" />
      </div>
    </div>
  );
}

export default Quote;
