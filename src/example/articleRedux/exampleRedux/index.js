import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './containers/app.js';
import rootReducer from './reducers/index.js';

const store = createStore(rootReducer);

const Index = () => {
  let content = [];
  content.push(
    <Provider store={store}>
      <App />
    </Provider>
  );
  return content;
};

export default Index;
