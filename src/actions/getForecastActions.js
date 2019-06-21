import { GET_FORECAST } from './type';
import axios from 'axios';

export const getForecast = payload => {
  const url = `https://flamboyant-poincare-40ffc3.netlify.com/.netlify/functions/getforecast`;
  const postData = { address: payload };

  console.log(postData);

  const request = axios.post(url, postData);

  return dispatch =>
    request.then(({ data }) => {
      dispatch({
        type: GET_FORECAST,
        payload: data
      });
    });
};
