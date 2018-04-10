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

export const createComment = formData => (
  $.ajax('api/comments', {
    method: "post",
    // processData: false,
    // contentType: false,
    data: formData,
  })
);

export const updateComment = comment => (
  $.ajax(`api/comments/${comment.id}`, {
    method: "patch",
    data: { comment }
  })
);
