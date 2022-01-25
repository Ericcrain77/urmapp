import React from "react";

function LogIn() {


    return (
        <div className='login'>
            <h2>Log In!</h2>
            <form className='login-form'>
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
                <div className='login-btn'>
                    <button type='submit'>Log In</button>
                </div>
                <div className='signup-btn'>
                    <button type="submit">Sign Up</button>
                </div>
            </form>
        </div>
    );
};

export default LogIn;