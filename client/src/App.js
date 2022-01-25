import React, { useState } from 'react';
import LoginSignUpPage from './pages/LoginPage';
import HomePage from './pages/Homepage';
import './App.css';


function App() {
  const [currentPage] = useState(" ");

  const renderPage = () => {
    switch (currentPage) {
      case "LoginSignUpPage":
        return <LoginSignUpPage />;
      case "HomePage":
        return <HomePage />;
      default:
        return <LoginSignUpPage />;
    }
  };

  return (
    <main>
        {renderPage(currentPage)}
    </main>
  );
};

export default App;