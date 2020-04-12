import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import logReducer from './logReducer.js';

const rootReducer = combineReducers({
  log: logReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

export default rootReducer;
