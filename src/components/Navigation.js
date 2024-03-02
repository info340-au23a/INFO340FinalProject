import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {

  const handleClick = (e, path) => {
    console.log(`${path} link clicked`);
  };

  return (
    <nav>
      <ul className="nav" id="navs">
        
        <li className="nav-item">
        <Link to="/about" onClick={(e) => handleClick(e, '/about')}>About</Link>
        </li>
        <li className="nav-item">
        <Link to="/community" onClick={(e) => handleClick(e, '/community')}>Community</Link>
        </li>
        <li className="nav-item">
          <Link to="/education" onClick={(e) => handleClick(e, '/education')}>Education</Link>
        </li>
      </ul>
    </nav>
  );
};


