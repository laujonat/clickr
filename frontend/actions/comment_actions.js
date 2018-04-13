import * as APIComment from '../util/comment_api_util';

export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const receiveAllComments = comments => ({
  type: RECEIVE_ALL_COMMENTS,
  comments
});

export const removeComment = commentId => ({
  type: REMOVE_COMMENT,
  commentId
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const fetchAllComments = id => dispatch => (
  APIComment.fetchAllPhotoComments(id)
    .then(comments => (dispatch(receiveAllComments(comments))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const fetchComment = id => dispatch => (
  APIComment.fetchComment(id)
    .then(comment => (dispatch(receiveComment(comment))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const createComment = comment => dispatch => (
  APIComment.createComment(comment)
    .then(newComment => (dispatch(receiveComment(newComment))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const deleteComment = id => dispatch => (
  APIComment.deleteComment(id)
    .then(comment => (dispatch(removeComment(comment))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const updateComment = (comment, id) => dispatch => (
  APIComment.updateComment(comment, id)
    .then(newComment => (dispatch(receiveComment(newComment))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);
