import React from "react";

function LogIn() {
    return (
        <div class='login'>
            <h2>Log In!</h2>
            <form class='login-form'>
                <label>Email:</label>
                <input 
                    type='email'
                    placeholder='Your email address'
                    name='email'
                    required
                />
                <label>Password:</label>
                <input 
                    type='password'
                    placeholder='Your password'
                    name='password'
                    required
                />
                <div id='login-btn'>
                    <button type='submit'>Log In</button>
                </div>
                <div id='signup-btn'>
                    <button type="submit">Sign Up</button>
                </div>
            </form>
        </div>
    );
};

export default LogIn;