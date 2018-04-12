import merge from 'lodash/merge';
import {
  RECEIVE_ALBUM,
  RECEIVE_ALL_ALBUMS,
  REMOVE_ALBUM,
  RECEIEVE_ERRORS
} from '../actions/album_actions';
import { RECEIEVE_ALBUM_PAYLOAD } from '../actions/album_actions';

const albumReducer = (state = {}, action) => {
  let newState = {};
  Object.freeze(state);
  switch (action.type) {
      case RECEIVE_ALL_ALBUMS:
        return merge({}, action.albums);
      case RECEIVE_ALBUM:
        newState = merge({}, state);
        newState[action.album.id] = action.album;
        return newState;
      case RECEIEVE_ALBUM_PAYLOAD:
        return merge({}, action.payload.albums);
      case REMOVE_ALBUM:
        newState = merge({},state);
        delete newState[action.albumId];
        return newState;
      case RECEIEVE_ERRORS: // set error to action's errors
        return Object.assign([], action.errors);
      default:
        return state;
    }
};

export default albumReducer;
