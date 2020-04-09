import { combineReducers } from 'redux';
import logReducer from './logReducer.js';

const rootReducer = combineReducers({
  logs: logReducer
});

export default rootReducer;
