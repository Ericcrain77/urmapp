import React from 'react';
import '../App.css';

function HomePage() {
  return (
    <section>
      <header class='header'>
        <a href="/">
            <img class='header-logo' src="../public/logo164x101.png" alt="UrMapp Logo" />
        </a>
        <h1>{Username}</h1>
      </header>
      <section class='page-body-2'>
        <Map />
      </section>
      <footer class='footer'>
        <h3>UrMapp © 2018</h3>
        <p><a href="mailto:ericcrain77@gmail.com">Contact Us</a></p>
      </footer>
    </section>
  )
}

export default HomePage;