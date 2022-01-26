import React, { useState } from "react";

import { ADD_USER } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";

const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="signup">
      <h2>Sign Up!</h2>
      <form className="signup-form" onSubmit={handleFormSubmit}>
        <label>Username:</label>
        <input
          type="text"
          placeholder="Your username"
          name="username"
          required
          value={formState.username}
          onChange={handleChange}
        />
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
        <div id="signup-btn">
          <button type="submit">Sign Up</button>
        </div>
        <div id="login-btn">
          <button type="submit">Log In</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
