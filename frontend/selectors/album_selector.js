import values from 'lodash/values';

export const albumSelector = state => {
  return (Object.values(state.entities.albums).sort(function sortByCreatedAt(a, b) {
    if (a.created_at < b.created_at) {
      return 1;
    }
    if (a.created_at > b.created_at) {
      return -1;
    }
    return 0;
  }));
};
