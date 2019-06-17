import { combineReducers } from 'redux';
import forecastReducer from './forecastReducer';
import modalReducer from './modalReducer';

export default combineReducers({
  forecast: forecastReducer,
  modal: modalReducer
});