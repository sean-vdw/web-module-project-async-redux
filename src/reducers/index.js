import { FETCH_START, FETCH_FAIL, FETCH_SUCCESS, FETCH_TICKER } from "../actions";

const initialState = {
  ticker: {},
  isFetching: false,
  error: '',
  symbol: ''
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_START:
      return {
        ...state,
        isFetching: true,
      }
    case FETCH_TICKER:
      return {
        ...state,
        symbol: action.payload
      }
    case FETCH_FAIL:
      return {
        ...state,
        error: action.payload
      }
    case FETCH_SUCCESS:
      return {
        ...state,
        ticker: action.payload
      }
    default:
      return state;
  }
};

export default reducer;