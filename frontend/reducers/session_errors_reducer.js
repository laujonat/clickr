// DON'T NEED THIS FILE. REMOVE!

import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER,
} from '../actions/session_actions';


export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS: // set error to action's errors
      return action.errors;
    case RECEIVE_CURRENT_USER: // clears errors
      return [];
    default:
      return state;
  }
};
