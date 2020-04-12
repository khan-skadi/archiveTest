import { createStore, applyMiddleware, compose } from 'redux';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import firebase from '../firebase/fbConfig.js';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer.js';

const initialState = {};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [thunk.withExtraArgument({ getFirestore })];

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middlewares), reduxFirestore(firebase))
);

export default store;
