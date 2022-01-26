//This component will send someone to the login page if they are not logged in!
import React from "react";
import Auth from "../utils/auth";
import { Redirect, Route } from "react-router-dom";
import { Component } from "@amcharts/amcharts5";
import { removeDirectivesFromDocument } from "@apollo/client/utilities";

// general idea on how to do this part came from
// https://stackoverflow.com/questions/47476186/when-user-is-not-logged-in-redirect-to-login-reactjs

const PrivateRoute = ({ component: Component, ...rest }) => {
  // authenticate the user
  const loggedIn = Auth.loggedIn();

  return (
    <Route
      {...rest}
      render={(props) =>
        loggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
