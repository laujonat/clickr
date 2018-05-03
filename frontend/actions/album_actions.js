import * as APIAlbum from '../util/album_api_util';

export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const RECEIVE_ALL_ALBUMS = "RECEIVE_ALL_ALBUMS";
export const REMOVE_ALBUM = "REMOVE_ALBUM";
export const RECEIVE_ALBUM_ERRORS = "RECEIVE_ALBUM_ERRORS";
export const RECEIVE_ALBUM_PAYLOAD = "RECEIVE_ALBUM_PAYLOAD";

export const receiveAlbum = album => ({
  type: RECEIVE_ALBUM,
  album
});

export const receiveAllAlbums = albums => ({
  type: RECEIVE_ALL_ALBUMS,
  albums
});

export const receiveAlbumPayload = payload => ({
  type: RECEIVE_ALBUM_PAYLOAD,
  payload
});

export const removeAlbum = albumId => ({
  type: REMOVE_ALBUM,
  albumId
});

export const receiveErrors = errors => ({
  type: RECEIVE_ALBUM_ERRORS,
  errors
});

export const fetchAllAlbumPayloads = id => dispatch => (
  APIAlbum.fetchAllAlbums(id)
    .then(payload => (dispatch(receiveAlbumPayload(payload))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const fetchAllAlbums = id => dispatch => (
  APIAlbum.fetchAllAlbums(id)
    .then(albums => (dispatch(receiveAllAlbums(albums))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const fetchAlbum = id => dispatch => (
  APIAlbum.fetchAlbum(id)
    .then(album => (dispatch(receiveAlbum(album))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const createAlbum = (album, photoIdArray) => dispatch => (
  APIAlbum.createAlbum(album, photoIdArray)
    .then(newAlbum => (dispatch(receiveAlbum(newAlbum))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const deleteAlbum = id => dispatch => (
  APIAlbum.deleteAlbum(id)
    .then(album => (dispatch(removeAlbum(album))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const updateAlbum = (album, id) => dispatch => (
  APIAlbum.updateAlbum(album, id)
    .then(newAlbum => (dispatch(receiveAlbum(newAlbum))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const clearErrors = () => dispatch => (
  dispatch(receiveErrors([]))
);
