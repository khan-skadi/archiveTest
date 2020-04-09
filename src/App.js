import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
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

  return (
    <Provider store={store}>
      <LandingPage />
    </Provider>
  );
};

export default App;
