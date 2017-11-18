import React from 'react';

import { Link } from 'react-router-dom';

const liStyle = {
  display: 'inline-block',
  margin: '10px 20px'
}

const TopMenu = () => {
  return (
    <div>
      <ul>
        <li style={liStyle}><Link to="/add">Add</Link></li>
        <li style={liStyle}><Link to="/search">Search</Link></li>
        <li style={liStyle}><Link to="/addsearch">AddSearch</Link></li>
        <li style={liStyle}><Link to="/apollo">apollo</Link></li>
      </ul>
    </div>
  );
};

export default TopMenu;