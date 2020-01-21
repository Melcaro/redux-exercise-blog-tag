import { CREATE_POST } from '../actionsTypes';

export const createPost = (postTitle, postDescription) => {
  return {
    type: CREATE_POST,
    payload: {
      postID: Math.random()
        .toString(36)
        .substr(2, 9),
      postTitle,
      postDescription,
      postTimeStamp: Date.now(),
    },
  };
};
