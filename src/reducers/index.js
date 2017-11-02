import { combineReducers } from 'redux';
import panels from './panels';
import enable from './enable';
import lists from './lists';

const redirectApp = combineReducers({
  panels,
  enable,
  lists,
});

export default redirectApp;
