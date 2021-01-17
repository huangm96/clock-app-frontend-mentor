
import moment from "moment"
const initialState = {
  quote: null,
  author: null,
  abbreviation: null,
  time: null,
  dayOfWeek: null,
  dayOfYear: null,
    weekNum: null,
    city: null,
    country: null,
    timeZone:null
  
};

function reducer(state, action) {
    switch (action.type) {
      case "getQuoteStart":
        return {
          ...state,
          quote: null,
          author: null,
        };
      case "getQuoteSuccess":
        console.log(action.payload);
        return {
          ...state,
          quote: `"${action.payload.content}"`,
          author: action.payload.author,
        };
      case "getQuoteFailed":
        return {
          ...state,
          quote: "Something is wrong. Please try again later",
          author: null,
        };
      case "getTimeSuccess":
        var hour = moment(action.payload.time).format("HH");
        return {
          ...state,
          time: action.payload.time,
          abbreviation: action.payload.abbreviation,
          dayOfWeek: action.payload.day_of_week,
          dayOfYear: action.payload.day_of_year,
          weekNum: action.payload.week_number,
        };
      case "getLocationSuccess":
        
        return {
          ...state,
          city: action.payload.city.toUpperCase(),
          country: action.payload.country.toUpperCase(),
          timeZone: action.payload.timeZone,
        };
      default:
        return { ...state };
    }

}

export { initialState,reducer };

