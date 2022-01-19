import axios from 'axios';

export const FETCH_START = "FETCH_START";
export const FETCH_FAIL = "FETCH_FAIL";
export const FETCH_SUCCESS = "FETCH_SUCCESS";

export const fetchStart = () => {
  return({type: FETCH_START});
}

export const fetchFail = (errorMessage) => {
  return({type: FETCH_FAIL, payload: errorMessage});
}

export const fetchSuccess = (stock) => {
  return({type: FETCH_SUCCESS, payload: stock});
}

export const getStock = () => (dispatch) => {
  dispatch(fetchStart());
  axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=ARKK&apikey=GS419KCS5NELZC85`)
    .then(resp => {
      console.log(resp);
      dispatch(fetchSuccess());
    })
}