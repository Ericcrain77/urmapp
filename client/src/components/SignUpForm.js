import React from "react";
import logo503x145 from '../assets/logo503x145.png';

function SignUp() {
    
    return (
        <section className='page-body'>
                <img className="login-signup-logo" src={logo503x145} alt='UrMapp Logo' />
                <div className="signup">
                    <h2>Sign Up!</h2>
                    <form className='signup-form'>
                        <label htmlFor='username'>Username:</label>
                        <input
                            type='text'
                            placeholder='Your username'
                            name='username'
                            required
                        />
                        <label htmlFor='email'>Email:</label>
                        <input 
                            type='email'
                            placeholder='Your email address'
                            name='email'
                            required
                        />
                        <label htmlFor='password'>Password:</label>
                        <input 
                            type='password'
                            placeholder='Your password'
                            name='password'
                            required
                        />
                        <div className='signup-btn'>
                            <button 
                                type="submit"
                                variant='success'>
                            Sign Up</button>
                        </div>
                        
                    </form>
                </div>
        </section>
    );
};

export default SignUp;