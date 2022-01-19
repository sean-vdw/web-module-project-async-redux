import axios from 'axios';

export const FETCH_START = "FETCH_START";
export const FETCH_FAIL = "FETCH_FAIL";
export const FETCH_SUCCESS = "FETCH_SUCCESS";

const date = new Date().toISOString().slice(0, 10);

export const fetchStart = () => {
  return({type: FETCH_START});
}

export const fetchFail = (errorMessage) => {
  return({type: FETCH_FAIL, payload: errorMessage});
}

export const fetchSuccess = (ticker) => {
  return({type: FETCH_SUCCESS, payload: ticker});
}

export const getTicker = (symbol) => (dispatch) => {
  dispatch(fetchStart());
  axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=GS419KCS5NELZC85`)
    .then(resp => {
      console.log("Ticker TODAY: ", resp.data['Time Series (Daily)'][`${date}`]);
      dispatch(fetchSuccess(resp.data['Time Series (Daily)'][`${date}`]));
    })
    .catch(err => {
      dispatch(fetchFail(err));
    });
}