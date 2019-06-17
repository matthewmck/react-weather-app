import { GET_FORECAST } from '../actions/type';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_FORECAST: 
      return action.payload;
    default:
      return state;
  }
}