// reducer to keep track of error messages
import {
    RECEIVE_CURRENT_USER,
    RECEIVE_ERRORS
  } from '../actions/session_actions';

const errorsReducer = (state=[], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return [];
    case RECEIVE_ERRORS:
      return Object.assign([], action.errors);
    default:
      return state;
  }
};

export default errorsReducer;
