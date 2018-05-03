import * as APIPhoto from "../util/photo_api_util";

export const RECEIVE_PHOTO = "RECEIVE_PHOTO";
export const RECEIVE_ALL_PHOTOS = "RECEIVE_ALL_PHOTOS";
export const REMOVE_PHOTO = "REMOVE_PHOTO";
export const RECEIVE_PHOTO_ERRORS = "RECEIVE_PHOTO_ERRORS";

export const receivePhoto = photo => ({
  type: RECEIVE_PHOTO,
  photo
});

export const receiveAllPhotos = photos => ({
  type: RECEIVE_ALL_PHOTOS,
  photos
});

export const removePhoto = photoId => ({
  type: REMOVE_PHOTO,
  photoId
});

export const receiveErrors = errors => ({
  type: RECEIVE_PHOTO_ERRORS,
  errors
});

export const fetchAllPhotos = id => dispatch => (
  APIPhoto.fetchAllPhotos(id)
    .then(photos => (dispatch(receiveAllPhotos(photos))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const fetchPhoto = id => dispatch => (
  APIPhoto.fetchPhoto(id)
    .then(photo => (dispatch(receivePhoto(photo))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const createPhoto = photo => dispatch => (
  APIPhoto.createPhoto(photo)
    .then(newPhoto => (dispatch(receivePhoto(newPhoto))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const deletePhoto = id => dispatch => (
  APIPhoto.deletePhoto(id)
    .then(photo => (dispatch(removePhoto(photo))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const updatePhoto = (photo, id) => dispatch => (
  APIPhoto.updatePhoto(photo, id)
    .then(newPhoto => (dispatch(receivePhoto(newPhoto))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const clearErrors = () => dispatch => (
  dispatch(receiveErrors([]))
);
