import { ADD_TAGS } from '../actionsTypes';

export const addTags = (tags = '') => {
  console.log(tags);
  return {
    type: ADD_TAGS,
    payload: tags,
  };
};
