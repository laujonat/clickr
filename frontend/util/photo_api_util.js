export const fetchPhoto = id => (
  $.ajax(`api/photos/${id}`, {
    method: "get",
  })
);

export const fetchAllPhotos = () => (
  $.ajax('api/photos', {
    method: "get"
  })
);

export const updatePhoto = photo => (
  $.ajax(`api/photos/${photo.id}`, {
    method: "patch",
    data: { photo }
  })
);

export const createPhoto = photo => (
  $.ajax('api/photos', {
    method: "post",
    data: { photo }
  })
);

export const deletePhoto = id => (
  $.ajax(`api/photos${id}`, {
    method: "delete"
  })
);
