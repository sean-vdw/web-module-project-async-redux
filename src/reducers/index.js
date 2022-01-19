import { FETCH_START, FETCH_FAIL, FETCH_SUCCESS } from "../actions";

const initialState = {
  stock: {
    ticker: '',
    sentiment_score: '',
    sentiment: '',
    no_of_comments: ''
  },
  isFetching: false,
  error: ''
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_START:
      return {
        ...state,
        isFetching: true,
      }
    case FETCH_FAIL:
      return {
        ...state,
        error: action.payload
      }
    case FETCH_SUCCESS:
      return {
        ...state,
        stock: action.payload
      }
    default:
      return state;
  }
};

export default reducer;