import * as APITag from '../util/tag_api_util';

export const RECEIVE_TAG = "RECEIVE_TAG";
export const RECEIVE_ALL_TAGS = "RECEIVE_ALL_TAGS";
export const REMOVE_TAG = "REMOVE_TAG";
export const RECEIEVE_ERRORS = "RECEIEVE_ERRORS";

export const receiveTag = tag => ({
  type: RECEIVE_TAG,
  tag
});

export const receiveAllTags = tags => ({
  type: RECEIVE_ALL_TAGS,
  tags
});

export const removeTag = tagId => ({
  type: REMOVE_TAG,
  tagId
});

export const receiveErrors = errors => ({
  type: RECEIEVE_ERRORS,
  errors
});

export const fetchAllTags = id => dispatch => (
  APITag.fetchAllTags(id)
    .then(tags => (dispatch(receiveAllTags(tags))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const fetchTag = id => dispatch => (
  APITag.fetchTag(id)
    .then(tag => (dispatch(receiveTag(tag))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const createTag = tag => dispatch => (
  APITag.createTag(tag)
    .then(newTag => (dispatch(receiveTag(newTag))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const deleteTag = id => dispatch => (
  APITag.deleteTag(id)
    .then(tag => (dispatch(removeTag(tag))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);
