import { GET_FORECAST } from './type';
import data from '../weatherData';

export const getForecast = () => ({
  type: GET_FORECAST,
  payload: data
});

