import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import firebase from './firebase/fbConfig.js';
import store from './redux/configureStore.js';

import LandingPage from './pages/LandingPage.js';

import M from 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

const App = () => {
  useEffect(() => {
    M.AutoInit();

    // eslint-disable-next-line
  }, []);

  const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true
  };
  const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
  };

  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <LandingPage />
      </ReactReduxFirebaseProvider>
    </Provider>
  );
};

export default App;
