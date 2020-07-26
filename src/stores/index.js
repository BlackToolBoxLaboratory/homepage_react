import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { langReducer } from './langStore.js';

const persistConfig = {
  key: 'blacktoolboxlaboratory',
  storage,
  whitelist: ['languageSetting'],
};

export const store = createStore(
  combineReducers({
    language: persistReducer(persistConfig, langReducer),
  })
);

export const persistor = persistStore(store);
