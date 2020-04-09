import React, { Fragment } from 'react';

const LogsItem = () => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default LogsItem;
