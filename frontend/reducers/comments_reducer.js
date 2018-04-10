import merge from 'lodash/merge';
import {
  RECEIVE_COMMENT,
  RECEIVE_ALL_COMMENTS,
  REMOVE_COMMENT,
  RECEIEVE_ERRORS
} from '../actions/comment_actions';

const commentReducer = (state = {}, action) => {
  let newState = {};
  Object.freeze(state);
  switch (action.type) {
      case RECEIVE_ALL_COMMENTS:
        return merge({}, action.comments);
      case RECEIVE_COMMENT:
        newState = merge({}, state);
        newState[action.comment.id] = action.comment;
        return newState;
      case REMOVE_COMMENT:
        newState = merge({},state);
        delete newState[action.commentId];
        return newState;
      case RECEIEVE_ERRORS: // set error to action's errors
        return Object.assign([], action.errors);
      default:
        return state;
    }
};

export default commentReducer;
