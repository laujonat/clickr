export const signup = user => (
  $.ajax('/api/users',{
    method: 'post',
    data: { user }
  })
);

export const login = user => (
  $.ajax('/api/session', {
    method: 'post',
    data: { user }
  })
);

export const logout = () => (
  $.ajax('/api/session', {
    method: 'delete'
  })
);
