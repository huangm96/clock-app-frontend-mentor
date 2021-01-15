

const initialState = {
    time: 12,
    quote: null,
    author:null
}

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
      default:
        return { ...state };
    }

}

export { initialState,reducer };

