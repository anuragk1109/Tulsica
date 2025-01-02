import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px', background: '#f4f4f4', textAlign: 'center' }}>
      <Link to="/" style={{ margin: '10px' }}>Home</Link>
      <Link to="/about" style={{ margin: '10px' }}>About</Link>
      <Link to="/services" style={{ margin: '10px' }}>Services</Link>
    </nav>
  );
}

export default Navbar;
