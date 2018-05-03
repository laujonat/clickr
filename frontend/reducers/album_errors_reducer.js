import { RECEIVE_ALBUM_ERRORS } from '../actions/album_actions';
import { RECEIVE_ROUTE_CHANGE } from '../actions/app_actions';

const albumErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALBUM_ERRORS:
      return action.errors;
    case RECEIVE_ROUTE_CHANGE:
      return [];
    default:
      return state;
  }
};

export default albumErrorsReducer;
