import { combineReducers } from 'redux';
import leftList from './leftList.js';
import rightList from './rightList.js';

const reducers = combineReducers({
  leftList,
  rightList
});

export default reducers;
