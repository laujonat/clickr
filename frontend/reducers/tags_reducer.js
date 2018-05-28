import merge from 'lodash/merge';
import {
  RECEIVE_TAG,
  RECEIVE_ALL_TAGS,
  REMOVE_TAG,
  RECEIVE_ERRORS
} from '../actions/tag_actions';


const tagReducer = (state = {}, action) => {
  let newState = {};
  Object.freeze(state);
  switch (action.type) {
      case RECEIVE_ALL_TAGS:
        return merge({}, action.tags);
      case RECEIVE_TAG:
        newState = merge({}, state);
        newState[action.tag.id] = action.tag;
        return newState;
      case REMOVE_TAG:
        newState = merge({},state);
        delete newState[action.tagId];
        return newState;
      default:
        return state;
    }
};

export default tagReducer;
