import React from 'react';
import LogIn from '../components/LoginForm';
import SignUp from '../components/SignUpForm';
import './style.css';
import logo503x145 from '../assets/logo503x145.png';

function Login() {

    return (
        <section className='page-body'>
            <img className="login-signup-logo" src={logo503x145} alt='UrMapp Logo' />
            <LogIn />
            <SignUp />
        </section>
    );
};

export default Login;