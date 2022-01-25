import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

import Auth from "../utils/auth";

const LogIn = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN_USER);

  //submit the thing
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // update when inputs happen
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });

      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.error(e);
    }

    // clear values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <div class="login">
      <h2>Log In!</h2>
      <form class="login-form" onSubmit={handleFormSubmit}>
        <label>Email:</label>
        <input
          type="email"
          placeholder="Your email address"
          name="email"
          required
          value={formState.email}
          onChange={handleChange}
        />
        <label>Password:</label>
        <input
          type="password"
          placeholder="Your password"
          name="password"
          required
          value={formState.password}
          onChange={handleChange}
        />
        <div id="login-btn">
          <button type="submit">Log In</button>
        </div>
        <div id="signup-btn">
          <button type="submit">Sign Up</button>
        </div>
      </form>

      {error && <div>Login Failed</div>}
    </div>
  );
};

export default LogIn;
