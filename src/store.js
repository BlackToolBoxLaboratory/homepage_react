import { createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';

import hashHistory from './plugins/history.js';
import rootReducer from './reducers/index.js';

const store = createStore(rootReducer);

export const history = syncHistoryWithStore(hashHistory, store);

export default store;