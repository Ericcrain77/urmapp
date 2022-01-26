import React from 'react';

function Header(props) {
    
    return (
        <header>
            <nav className='login-nav'>
                <ul>
                    <li>
                        <a href="" className='header-login-btn' onClick={() => {
                            props.setCurrentPage("#login")
                        }}>Log In</a>
                    </li>
                    <li>
                        <a href='' className='header-signup-btn' onClick={() => {
                            props.setCurrentPage("#signup")
                        }}>Sign Up</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;