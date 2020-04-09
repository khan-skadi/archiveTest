import { combineReducers } from 'redux';
import logReducer from './logReducer.js';

const rootReducer = combineReducers({
  log: logReducer
});

export default rootReducer;
