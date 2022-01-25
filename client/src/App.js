import React, { useState } from "react";
import LoginSignUpPage from "./pages/LoginPage";
import HomePage from "./pages/Homepage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  HttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import "./App.css";

function App() {
  const [currentPage] = useState(" ");

  const renderPage = () => {
    switch (currentPage) {
      case "LoginSignUpPage":
        return <LoginSignUpPage />;
      case "HomePage":
        return <HomePage />;
      default:
        return <LoginSignUpPage />;
    }
  };

  const httpLink = createHttpLink({
    uri: "/graphql",
  });

  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem("id_token");
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Router>
        <main>{renderPage(currentPage)}</main>
      </Router>
    </ApolloProvider>
  );
}

export default App;
