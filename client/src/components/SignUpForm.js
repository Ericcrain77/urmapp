import React from "react";

function SignUp() {
    return (
        <div class="signup">
            <h2>Sign Up!</h2>
            <form class='signup-form'>
                <label>Username:</label>
                <input
                    type='text'
                    placeholder='Your username'
                    name='username'
                    required
                />
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
                <div id='signup-btn'>
                    <button type="submit">Sign Up</button>
                </div>
                <div id='login-btn'>
                    <button type='submit'>Log In</button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;