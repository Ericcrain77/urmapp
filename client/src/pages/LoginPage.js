import React from "react";
import LogIn from "../components/LoginForm";
import SignUp from "../components/SignUpForm";
import "./style.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Login() {
  return (
    <section className="page-body">
      <Router>
        <Switch>
          <Route exact path="/login">
            <LogIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </section>
  );
}

export default Login;
