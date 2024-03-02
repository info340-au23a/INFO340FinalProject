import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import About from './components/About';
import Community from './components/Community';
import Product from './components/Product';

function App() {
  return (
    <Router>
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
          <nav className="links">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/community">Community</Link>
              </li>
              <li>
                <Link to="/product">Product</Link>
              </li>
            </ul>
          </nav>
        </div>

        <main>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/community" component={Community} />
            <Route path="/product" component={Product} />
            <Route path="/" exact>
            </Route>
          </Switch>
        </main>

        <footer>
          <p>&copy; 2024 Funguy. INFO 340 Team 5, Win 24, University of Washington.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
