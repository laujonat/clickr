import values from 'lodash/values';

export const userSelector = state => {
  return (Object.values(state.entities.users));
};
