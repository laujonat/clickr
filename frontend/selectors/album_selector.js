import values from 'lodash/values';

export const albumSelector = state => {
  return (Object.values(state.entities.albums));
};
