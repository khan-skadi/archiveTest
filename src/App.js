import React, { useEffect } from 'react';
import configureStore from './redux/configureStore.js';
import LandingPage from './pages/LandingPage.js';

import M from 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

const store = configureStore();

const App = () => {
  useEffect(() => {
    M.AutoInit();

    // eslint-disable-next-line
  }, []);

  return <LandingPage />;
};

export default App;
