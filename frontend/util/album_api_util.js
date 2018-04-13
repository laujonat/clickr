export const fetchAlbum = id => (
  $.ajax(`api/albums/${id}`, {
    method: "get",
  })
);

export const fetchAllAlbums = id => (
  $.ajax('api/albums', {
    method: "get",
    data: { user_id: id }
  })
);

export const updateAlbum = (album, id) => (
  $.ajax(`api/albums/${id}`, {
    method: "patch",
    processData: false,
    contentType: false,
    data: album 
  })
);

// ignore photoIds, array placed in FormData
export const createAlbum = (album, photoIds) => (
  $.ajax('api/albums', {
    method: "post",
    processData: false,
    contentType: false,
    data: album
  })
);

export const deleteAlbum = id => (
  $.ajax(`api/albums/${id}`, {
    method: "delete"
  })
);
