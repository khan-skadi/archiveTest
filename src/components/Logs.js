import React from 'react';
import LogsItem from './logs/LogsItem.js';

const Logs = () => {
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
        <LogsItem />
      </ul>
    </div>
  );
};

export default Logs;
