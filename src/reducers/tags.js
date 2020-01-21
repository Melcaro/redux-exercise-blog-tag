import { ADD_TAGS } from '../actionsTypes';

const tagsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_TAGS:
      return [...state, ...payload.split(' ')];
    default:
      return state;
  }
};

export default tagsReducer;
