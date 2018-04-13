import * as APIUser from "../util/user_api_util";

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIEVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const receieveAllUsers = users => ({
  type: RECEIEVE_ALL_USERS,
  users
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const fetchUser = id => dispatch => (
  APIUser.fetchUser(id)
    .then(user => (dispatch(receiveUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const fetchAllUsers = () => dispatch => (
  APIUser.fetchAllUsers()
    .then(users => (dispatch(receieveAllUsers(users))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);
