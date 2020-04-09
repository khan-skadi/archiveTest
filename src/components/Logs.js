import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addLog } from '../redux/actions/logActions.js';
import LogItem from './logs/LogItem.js';

const Log = ({ addLog, log: { logs } }) => {
  const [locationFrom, setLocationFrom] = useState('');

  const handleSubmit = () => {
    const newLog = {
      locationFrom
    };
    addLog(newLog);
  };

  return (
    <div className="section section-logs">
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
        {logs.map((log) => (
          <LogItem log={log} />
        ))}
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
  );
};

export default connect(null, { addLog })(Log);
