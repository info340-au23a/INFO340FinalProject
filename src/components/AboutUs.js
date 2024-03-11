import React from 'react';

function AboutUs() {
  return (
    <div className="container">
      <nav className="links">
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="community.html">Community</a></li>
          <li><a href="product.html">Product</a></li>
        </ul>
      </nav>
      <main>
        <section className="about-us">
          <h2>About Us</h2>
          <p>Learn more about our mission, vision, and the team behind Funguy.</p>
          <div className="fungi-video">
            <iframe src="https://www.youtube.com/embed/BlcKBKJ8uro" title="Funguy Introduction Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;
