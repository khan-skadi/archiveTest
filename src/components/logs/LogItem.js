import React, { Fragment } from 'react';

const LogItem = ({ log }) => {
  return (
    <li
      className="collection-item"
      style={{ display: 'flex', justifyContent: 'space-around' }}
    >
      <a href="#!" className="waves-effect">
        {log.locationFrom}
      </a>
    </li>
  );
};

export default LogItem;
