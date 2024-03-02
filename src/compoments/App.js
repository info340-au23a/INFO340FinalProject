import React from 'react';
import About from './components/About';
import Community from './components/Community';
import Product from './components/Product';

function App() {
  return (
    <div>
      <div class="container">
        <header>
            <h1>Funguy</h1>
            <div id="hamburger-menu"><a href="#"><i class="fa fa-bars" aria-label="menu"></i></a></div>
        </header>
        <nav class="links">
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="community.html">Community</a></li>
                <li><a href="product.html">Product</a></li>
            </ul>
        </nav>
    </div>

    <main>
        <section class="about-us">
            <h2>About Us</h2>
            <p>Learn more about our mission, vision, and the team behind Funguy.</p>
            <div class="fungi-video">
                <iframe src="https://www.youtube.com/embed/BlcKBKJ8uro" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 Funguy. INFO 340 Team 5, Win 24, University of Washington.</p>
    </footer>
    </div>
  );
}

export default App;