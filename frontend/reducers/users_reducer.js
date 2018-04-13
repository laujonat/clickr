import merge from 'lodash/merge';
import {
  RECEIVE_USER,
  RECEIVE_ALL_USERS,
  RECEIEVE_ERRORS
} from '../actions/user_actions';

const userReducer = (state = {}, action) => {
  let newState = {};
  Object.freeze(state);
  switch (action.type) {
      case RECEIVE_ALL_USERS:
        return merge({}, action.users);
      case RECEIVE_USER:
        newState = merge({}, state);
        newState[action.user.id] = action.user;
        return newState;
      // case RECEIEVE_ERRORS: // set error to action's errors
      //   return Object.assign([], action.errors);
      default:
        return state;
    }
};

export default userReducer;
