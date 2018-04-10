export const fetchAllUsers = () => (
  $.ajax('api/users', {
    method: "get"
  })
);

export const fetchUser = id => (
  $.ajax(`api/users/${id}`, {
    method: "get"
  })
);

export const updateUser = user => (
  $.ajax(`ajax/users/${user.id}`, {
    method: "patch",
    data: { user }
  })
);
