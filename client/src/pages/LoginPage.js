import React, { useState } from "react";
import LogIn from "../components/LoginForm";
import SignUp from "../components/SignUpForm";

import logo from "../assets/0.png";

function LoginSignUpPage() {
  const [currentPage, setCurrentPage] = useState("LogIn");

  const renderPage = () => {
    switch (currentPage) {
      case "Login":
        return <LogIn />;
      case "SignUp":
        return <SignUp />;
      default:
        return <LogIn />;
    }
  };

  return (
    <section className="page-body">
      <img className="login-signup-logo" src={logo} alt="UrMapp Logo" />
      {renderPage(currentPage)}
    </section>
  );
}

export default LoginSignUpPage;