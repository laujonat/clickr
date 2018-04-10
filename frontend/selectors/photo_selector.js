import values from 'lodash/values';


export const photoSelector = state => {
  return (Object.values(state.entities.photos).sort(function sortByCreatedAt(a, b) {
    if (a.created_at < b.created_at) {
      return 1;
    }
    if (a.created_at > b.created_at) {
      return -1;
    }
    return 0;
  }));
};
