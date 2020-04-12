import React from 'react';
import { connect } from 'react-redux';

import Logs from '../components/Logs.js';

const LandingPage = (props) => {
  const { log } = props;

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
          <Logs log={log} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    log: state.log
  };
};

export default connect(mapStateToProps)(LandingPage);
