import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// reducers

const rootReducer = combineReducers({
  routing: routerReducer
});

export default rootReducer;