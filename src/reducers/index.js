import { combineReducers } from 'redux';
import list from './list';

const todoApp = combineReducers({
  list
});

export default todoApp;
