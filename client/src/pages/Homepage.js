import React from "react";
import Map from "../components/Map";
import GeoBtn from "../components/GeoBtn";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_ME } from "../utils/queries";
import logo from "../assets/logo164x101.png";
import "./style.css";

function HomePage() {
  const { data: userData } = useQuery(GET_ME);
  

  const loggedIn = Auth.loggedIn();

  return (
    <section>
      <header className="header">
        <a href="/">
          <img className="header-logo" src={logo} alt="UrMapp Logo" />
        </a>
        <div className="header-right">
          {loggedIn && userData ? <h1>{userData.me.username}</h1> : null}
          <Link to="/" onClick={Auth.logout}>
            Logout
          </Link>
        </div>
      </header>
      <section className="page-body-2">
        {userData && <Map userData={userData} />}
      </section>
      <section>
      
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
