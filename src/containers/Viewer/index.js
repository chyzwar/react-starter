import React from 'react';
import { Link } from 'react-router-dom';

function Viewer() {
  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/create">Create</Link></li>
      <li><Link to="/topics">Topics</Link></li>
    </ul>
  );
}

export default Viewer;