import { createStore } from 'redux';
import appReducer from '../reducers';
import { createPost } from '../actions';

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const id = Date.now();
const timeStamp = Date.now();

store.dispatch(createPost(id, '1st Post', 'This is the first post', timeStamp));

store.dispatch(
  createPost(id, '2nd Post', 'This is the second post', timeStamp)
);

console.log('initial state', store.getState());

export default store;
