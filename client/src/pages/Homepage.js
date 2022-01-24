import React from 'react';
import Map from '../components/Map';

function HomePage() {


  return (
    <section>
      <header class='header'>
        <a href="/">
            <img class='header-logo' src="../public/logo164x101.png" alt="UrMapp Logo" />
        </a>
        <div class="header-right">
            <h1>{Username}</h1>
            <button type="submit" id='logout-btn'>Log Out</button>
        </div>
      </header>
      <section class='page-body-2'>
        <Map />
      </section>
      <footer class='footer'>
        <h3>UrMapp © 2018</h3>
        <p><a href="mailto:test@urmappinc.com">Contact Us</a></p>
      </footer>
    </section>
  )
};

export default HomePage;