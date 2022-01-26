import React, { useState } from 'react';
import Header from '../components/Header';
import LogIn from '../components/LoginForm';
import SignUp from '../components/SignUpForm';
import './style.css';


function Login() {
    const [currentPage, setCurrentPage] = useState("#login");

    const renderPage = () => {
        switch (currentPage) {
        case "#login":
            return <LogIn />;
        case "#signup":
            return <SignUp />;
        default:
            return <LogIn />;
        }
    };

    return (
        <div>
            <Header currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
            {renderPage(currentPage)}
        </div>
    );
};

export default Login;