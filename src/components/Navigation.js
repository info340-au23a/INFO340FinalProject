import React from 'react';

function NavBar() {
  return (
    <nav>
      <ul className="nav" id="navs">
        <li className="nav-item">
          <a className="nav-link" href="#/">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/">
            Community
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/">
            Product
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/">
            About Us
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}


export { NavBar };
