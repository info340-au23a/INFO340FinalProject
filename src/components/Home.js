import React from 'react';

function Home() {
  return (
        <main>
        <section class="introduction">
            <h2>Welcome to Funguy</h2>
            <p>Explore the fascinating world of fungi through our educational resources, interactive features, and vibrant community. Dive into the diversity of fungi and expand your knowledge with us.</p>
            <img src="img/mushroom.jpg" alt="An orange fungi in the middle with dark background"></img>
        </section>

        <section class="features">
            <h2>Features</h2>
            <div class="feature-item">
                <h3>Interactive Learning</h3>
                <p>Engage with our interactive tools to learn about different fungi species, their habitats, and significance.</p>
            </div>
            <div class="feature-item">
                <h3>Resources</h3>
                <p>
                    <div class="resources">
                        <a href="https://www.ffungi.org/" target="_blank">
                        <img src="img/ffungi.png" alt="A black background with words"></img></a>
                    </div>
                    <div class="resources">
                        <a href="https://www.mycobank.org/" target="_blank">
                        <img src="img/mycobank.png" alt="A fungi background with words"></img></a>
                    </div>
                    <div class="resources">
                        <a href="https://namyco.org/" target="_blank">
                        <img src="img/nama.png" alt="NAMA with mashroom figure"></img></a>
                    </div>
                </p>
            </div>
        </section>
        <form action="#" method="get">
            <fieldset>
                <legend>Discover Fungi</legend>
                <label for="search">Search:</label>
                <input type="text" id="search" name="search" placeholder="Search fungi..."></input>
                <label for="category">Category:</label>
                <select id="category" name="category">
                    <option value="all">All</option>
                    <option value="edible">Edible</option>
                    <option value="toxic">Toxic</option>
                </select>
                <button type="submit">Search</button>
            </fieldset>
        </form>
        </main>
    );
}

export default Home;


