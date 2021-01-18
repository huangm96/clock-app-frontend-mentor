import moment from "moment";
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
  timeZone: null,
    greeting: null,

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
      var hour = parseInt(moment(action.payload.time).format("HH"));
      if (hour >= 5 && hour < 12) {
          state.greeting = "GOOD MORNING";
      } else if (hour >= 12 && hour < 18) {
          state.greeting = "GOOD AFTERNOON";
      } else {
          state.greeting = "GOOD EVENING";
      }
      return {
        ...state,
        time: action.payload.time,
        abbreviation: action.payload.abbreviation,
        dayOfWeek: action.payload.dayOfWeek,
        dayOfYear: action.payload.dayOfYear,
        weekNum: action.payload.weekNum,
      };
    case "getLocationSuccess":
      return {
        ...state,
        city: action.payload.city.toUpperCase(),
        country: action.payload.country.toUpperCase(),
        timeZone: action.payload.timeZone,
      };
      case "addSecond":
          
      return {
          ...state,
        time: moment(state.time).add(1, "seconds"),
      };
    default:
      return { ...state };
  }
}

export { initialState, reducer };
