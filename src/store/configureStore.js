import { createStore } from 'redux';
import appReducer from '../reducers';
import { createPost, addTags } from '../actions';

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch(createPost('1st Post', 'This is the first post', 'newPost'));

store.dispatch(createPost('2nd Post', 'This is the second post', 'newPost'));

store.dispatch(addTags('newPost'));

store.dispatch(addTags('travel'));

console.log('initial state', store.getState());

export default store;
