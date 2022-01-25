import React from 'react';
import Map from '../components/Map';

function HomePage() {
  

  return (
    <section>
      <header className='header'>
        <a href="/">
            <img className='header-logo' src="../public/logo164x101.png" alt="UrMapp Logo" />
        </a>
        <div className="header-right">
            <h1>{Username}</h1>
            <button type="submit" className='logout-btn'>Log Out</button>
        </div>
      </header>
      <section className='page-body-2'>
        <Map />
      </section>
      <footer className='footer'>
        <h3>UrMapp © 2018</h3>
        <p><a href="mailto:test@urmappinc.com">Contact Us</a></p>
      </footer>
    </section>
  )
};

export default HomePage;