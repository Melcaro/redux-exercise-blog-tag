import uniq from 'lodash.uniq';

import { CREATE_POST } from '../actionsTypes';

export const createPost = ({ postTitle, postDescription, postTag }) => {
  return {
    type: CREATE_POST,
    payload: {
      postID: Math.random()
        .toString(36)
        .substr(2, 9),
      postTitle,
      postDescription,
      postTag: uniq(postTag.split(' ')),
      postTimeStamp: Date.now(),
    },
  };
};
