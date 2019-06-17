import {
  CLOSE_MODAL,
  OPEN_MODAL
} from '../actions/type';

const initialState = {
  modalIsOpen: false,
  index: null,
  current: false
};

export default function(state = initialState, action) {
  switch(action.type) {
    case CLOSE_MODAL:
      return {
        ...state,
        modalIsOpen: false,
        index: null,
        current: false
      }
    case OPEN_MODAL:
      return {
        ...state,
        modalIsOpen: true,
        index: action.payload,
        current: action.current || false
      };
    default:
      return state;
  }
}