import React from 'react';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import './App.css';

import ConnectedBlog from './containers/Blog';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ConnectedBlog />
      </div>
    </Provider>
  );
}

export default App;
