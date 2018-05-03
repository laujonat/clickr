import { RECEIVE_COMMENT_ERRORS } from '../actions/comment_actions';
import { RECEIVE_ROUTE_CHANGE } from '../actions/app_actions';

const commentErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_COMMENT_ERRORS:
      return action.errors;
    case RECEIVE_ROUTE_CHANGE:
      return [];
    default:
      return state;
  }
};

export default commentErrorsReducer;
