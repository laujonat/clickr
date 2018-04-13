export const fetchTag = id => (
  $.ajax(`api/tags/${id}`, {
    method: "get",
  })
);

export const fetchAllTags = id => (
  $.ajax('api/tags', {
    method: "get",
    data: { photo_id: id }
  })
);

export const updateTag = (tag, id) => (
  $.ajax(`api/tags/${id}`, {
    method: "patch",
    processData: false,
    contentType: false,
    data: tag
  })
);

export const createTag = tag => (
  $.ajax('api/tags', {
    method: "post",
    // processData: false,
    // contentType: false,
    data: { tag }
  })
);

export const deleteTag = id => (
  $.ajax(`api/tags/${id}`, {
    method: "delete"
  })
);
