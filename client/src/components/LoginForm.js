import React from "react";
import logo503x145 from '../assets/logo503x145.png';

function LogIn() {
    return (
        <section className='page-body'>
            <img className="login-signup-logo" src={logo503x145} alt='UrMapp Logo' />
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
                        <button 
                            type='submit'
                            variant='success'>
                        Log In</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default LogIn;