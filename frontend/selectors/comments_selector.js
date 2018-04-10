import values from 'lodash/values';

export const commentSelector = state => {
  return (Object.values(state.entities.comments));
};
