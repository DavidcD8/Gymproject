import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function NavBar() {
  return (
    <nav>
      <ul className="nav-list">
        <li className="logo-item">
        </li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/membership">Membership</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
       </ul>
    </nav>
  );
}

export default NavBar;
