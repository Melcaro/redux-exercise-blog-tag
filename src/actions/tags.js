import { ADD_TAGS } from '../actionsTypes';

export const addTags = (tags = '') => {
  return {
    type: ADD_TAGS,
    payload: tags,
  };
};
