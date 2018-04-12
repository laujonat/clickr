import merge from 'lodash/merge';
import {
  RECEIVE_PHOTO,
  RECEIVE_ALL_PHOTOS,
  REMOVE_PHOTO,
  RECEIEVE_ERRORS
} from '../actions/photo_actions';
import { RECEIEVE_ALBUM_PAYLOAD } from '../actions/album_actions';

const photoReducer = (state = {}, action) => {
  let newState = {};
  Object.freeze(state);
  switch (action.type) {
      case RECEIVE_ALL_PHOTOS:
        return merge({}, action.photos);
      case RECEIVE_PHOTO:
        newState = merge({}, state);
        newState[action.photo.id] = action.photo;
        return newState;
      case RECEIEVE_ALBUM_PAYLOAD:
        return merge({}, action.payload.photos);
      case REMOVE_PHOTO:
        newState = merge({},state);
        delete newState[action.photoId];
        return newState;
      case RECEIEVE_ERRORS: // set error to action's errors
        return Object.assign([], action.errors);
      default:
        return state;
    }
};

export default photoReducer;
