import React from 'react';
import LogIn from '../components/LoginForm';
import SignUp from '../components/SignUpForm';

function LoginSignUpPage() {

    return (
        <section class='page-body'>
            <img class="login-signup-logo" src='../public/logo503x145.png' alt='UrMapp Logo' />
            <LogIn />
            <SignUp />
        </section>
    );
};

export default LoginSignUpPage;