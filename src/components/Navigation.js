import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul className="nav" id="navs">
        <li className="nav-item">
          <NavLink to="/" className="nav-link">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/community" className="nav-link">Community</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/education" className="nav-link">Education</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
