import React, { useState } from "react";
import { LOGIN_USER } from "../utils/mutations";
import { useMutation } from "@apollo/client";

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
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    event.preventDefault();

    console.log(formState);

    try {
      const { data } = await login({
        variables: { ...formState },
      });
      console.log(`huh`, data);
      const token = data.login.token;
      Auth.login(token);
    } catch (err) {
      console.error(err);
    }

    // clear values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <div className="login">
      <h2>Log In!</h2>
      <form className="login-form" onSubmit={handleFormSubmit}>
        <label>Email:</label>
        <input
          type="email"
          placeholder="Your email address"
          name="email"
          id="email"
          required
          value={formState.email}
          onChange={handleChange}
        />
        <label>Password:</label>
        <input
          type="password"
          placeholder="Your password"
          name="password"
          id="password"
          required
          value={formState.password}
          onChange={handleChange}
        />
        <div id="login-btn">
          <button type="submit">Log In</button>
        </div>
        <div id="signup-btn">
          {/* <button type="submit">Sign Up</button> */}

        </div>
      </form>

      {error && <div>Login Failed</div>}
    </div>
  );
};

export default LogIn;
