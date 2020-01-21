import { createStore } from 'redux';
import appReducer from '../reducers';
import { createPost, addTags } from '../actions';

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch(
  createPost({
    postTitle: '1st Post',
    postDescription: 'This is the first post',
    postTag: 'newPost',
  })
);

store.dispatch(
  createPost({
    postTitle: '2nd Post',
    postDescription: 'This is the second post',
    postTag: 'newPost',
  })
);

store.dispatch(addTags('newPost'));

store.dispatch(addTags('travel'));

console.log('initial state', store.getState());

export default store;
