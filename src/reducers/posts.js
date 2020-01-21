import { CREATE_POST } from '../actionsTypes';

const postsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case CREATE_POST:
      return [...state, payload];
    default:
      return state;
  }
};

export default postsReducer;
