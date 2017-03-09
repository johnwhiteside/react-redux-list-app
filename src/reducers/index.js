import { combineReducers } from 'redux';
import list from 'reducers/list';

const todoApp = combineReducers({
  list
});

export default todoApp;
