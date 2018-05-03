import { RECEIVE_PHOTO_ERRORS } from '../actions/photo_actions';
import { RECEIVE_ROUTE_CHANGE } from '../actions/app_actions';

const photoErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_PHOTO_ERRORS:
      return action.errors;
    case RECEIVE_ROUTE_CHANGE:
      return [];
    default:
      return state;
  }
};

export default photoErrorsReducer;
