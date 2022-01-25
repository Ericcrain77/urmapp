import React, { useState } from "react";

import { ADD_USER } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";

const Signup = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);
  //useMutation
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
    console.log(userFormData);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...userFormData },
      });

      console.log(data);
      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div class="signup">
      <h2>Sign Up!</h2>
      <form class="signup-form" onSubmit={handleFormSubmit}>
        <label>Username:</label>
        <input
          type="text"
          placeholder="Your username"
          name="username"
          required
        />
        <label>Email:</label>
        <input
          type="email"
          placeholder="Your email address"
          name="email"
          required
        />
        <label>Password:</label>
        <input
          type="password"
          placeholder="Your password"
          name="password"
          required
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
