import React from "react";
import Map from "../components/Map";

import { useQuery } from "@apollo/client";
import { GET_ME } from "../utils/queries";
import logo from "../assets/0.png";
import Auth from "../utils/auth";

const loggedIn = Auth.loggedIn();

function HomePage() {
  const { data: userData } = useQuery(GET_ME);

  return (
    <section>
      <header className="header">
        <a href="/">
          <img className="header-logo" src={logo} alt="UrMapp Logo" />
        </a>
        <div className="header-right">
        {loggedIn && userData ? <h1>{userData.me.username}</h1> : null}
          <button type="submit" id="logout-btn">
            Log Out
          </button>
        </div>
      </header>
      <section className="page-body-2">
        <Map />
      </section>
      <footer className="footer">
        <h3>UrMapp © 2018</h3>
        <p>
          <a href="mailto:test@urmappinc.com">Contact Us</a>
        </p>
      </footer>
    </section>
  );
}

export default HomePage;

