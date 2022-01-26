import React, { useState } from 'react';
import Header from '../components/Header';
import LogIn from '../components/LoginForm';
import SignUp from '../components/SignUpForm';
import './style.css';


function Login() {
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
        <section className="page-body">
            <Header />
            {renderPage(currentPage)}
        </section>
    );
}

export default Login;