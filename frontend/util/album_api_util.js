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

export const updateAlbum = album => (
  $.ajax(`api/albums/${album.id}`, {
    method: "patch",
    data: { album }
  })
);

export const createAlbum = (album, photoIds) => (
  $.ajax('api/albums', {
    method: "post",
    processData: false,
    contentType: false,
    data: album
  })
);

export const deleteAlbum = id => (
  $.ajax(`api/albums${id}`, {
    method: "delete"
  })
);
