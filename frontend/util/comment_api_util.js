export const fetchComment = id => (
  $.ajax(`api/comments/${id}`, {
    method: "get"
  })
);

export const fetchAllPhotoComments = id => (
  $.ajax('api/comments', {
    method: "get",
    data: { photo_id: id }
  })
);

export const createComment = comment => (
  $.ajax('api/comments', {
    method: "post",
    // processData: false,
    // contentType: false,
    data: { comment },
  })
);

export const deleteComment = id => (
  $.ajax(`api/comments/${id}`, {
    method: "delete",
  })
);

export const updateComment = (comment, id) => (
  $.ajax(`api/comments/${id}`, {
    method: "patch",
    data: { comment }
  })
);
