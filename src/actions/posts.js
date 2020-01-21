import { CREATE_POST } from '../actionsTypes';

export const createPost = (
  postID,
  postTitle,
  postDescription,
  postTimeStamp
) => {
  return {
    type: CREATE_POST,
    payload: {
      postID,
      postTitle,
      postDescription,
      postTimeStamp,
    },
  };
};
