import React from 'react';

import Logs from '../components/Logs.js';

const LandingPage = () => {
  return (
    <div className="container">
      <div className="row center-align">
        <div className="col s12">
          <h1>Landing Page</h1>
        </div>
        <div className="col s12">
          <ul className="collection with-header">
            <li className="collection-header">Logs</li>
          </ul>
        </div>
        <div className="col s12">
          <Logs />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
