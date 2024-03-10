import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NavBar from './Navigation'; // Ensure correct import, removed braces if default export
import About from './AboutUs';
import Community from './Community';
import Education from './Education';
import Home from './Home';


function App() {
  return (
      <div>
        <div className="container">
          <header>
            <h1>Funguy</h1>
            <div id="hamburger-menu">
              <a href="#">
                <i className="fa fa-bars" aria-label="menu"></i>
              </a>
            </div>
          </header>
          <div id="nav" className="col-3">
            <NavBar />
          </div>
        </div>

        
        {<Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/community" element={<Community />} />
          <Route path="/education" element={<Education />} />
        </Routes> }
        
        <footer>
          <p>&copy; 2024 Funguy. INFO 340 Team 5, Win 24, University of Washington.</p>
        </footer>
      </div>
  );
}

export default App;

