import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { addLog, getLogs } from '../redux/actions/logActions.js';
import LogItem from './logs/LogItem.js';

const Logs = (props) => {
  const [locationFrom, setLocationFrom] = useState('');
  const { getLogs, addLog, logs } = props;

  useEffect(() => {
    getLogs();
  }, [getLogs]);

  const handleSubmit = () => {
    const newLog = {
      locationFrom
    };
    addLog(newLog);
  };
  return (
    <div className="section section-logs">
      <div className="row">
        <h2>Logs</h2>
        <ul className="collection with-header">
          <li className="collection-header">
            <h4>Active Logs</h4>
          </li>
          <li
            className="collection-item"
            style={{ display: 'flex', justifyContent: 'space-around' }}
          >
            <a href="#!" className="waves-effect">
              Location From
            </a>
            <a href="#!" className="waves-effect">
              Location To
            </a>
            <a href="#!" className="waves-effect">
              Distance
            </a>
            <a href="#!" className="waves-effect">
              Posted By
            </a>
          </li>
          {logs && logs.map((log) => <LogItem log={log} key={log.id} />)}
        </ul>
        <div className="col s12">
          <div className="input-field col s6">
            <input
              id="locationFrom"
              type="text"
              className="validate"
              onChange={(e) => setLocationFrom(e.target.value)}
              value={locationFrom}
            />
            <label htmlFor="locationFrom">Location From</label>
          </div>
          <div className="row">
            <div className="col s12">
              <a
                href="#!"
                className="waves-effect waves-light btn"
                onClick={handleSubmit}
              >
                Submit
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    logs: state.firestore.ordered.logs
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addLog: (log) => {
      dispatch(addLog(log));
    },
    getLogs: (id) => {
      dispatch(getLogs(id));
    }
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: 'logs' }])
)(Logs);
