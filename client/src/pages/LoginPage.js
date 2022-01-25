import React, { useState} from 'react';
import LogIn from '../components/LoginForm';
import SignUp from '../components/SignUpForm';

function LoginSignUpPage() {

    const [currentPage, setCurrentPage] = useState("LogIn");

    const renderPage = () => {
        switch (currentPage) {
            case "Login":
                return <LogIn />;
            case "SignUp":
                return <SignUp />;
            default:
                return <LogIn />;
        }
    };

    return (
        <section className='page-body'>
            <img className="login-signup-logo" src='../public/logo503x145.png' alt='UrMapp Logo' />
            {renderPage(currentPage)}
        </section>
    );
};

export default LoginSignUpPage;