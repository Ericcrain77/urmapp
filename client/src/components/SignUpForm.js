import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth.js';
import { ADD_USER } from '../utils/mutations.js';

function SignUp() {
    const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
    const [addUser] = useMutation(ADD_USER);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
    
        const formResponse = await addUser({
          variables: { 
            ...userFormData,
           },
        });
        const token = formResponse.data.addUser.token;
        Auth.login(token);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ 
          ...userFormData, 
          [name]: value, 
        });
    };

    return (
        <div className="signup">
            <h2>Sign Up!</h2>
            <form className='signup-form' onSubmit={handleFormSubmit}>
                <label htmlFor='username'>Username:</label>
                <input
                    type='text'
                    placeholder='Your username'
                    name='username'
                    onChange={handleInputChange}
                    value={userFormData.username}
                    required
                />
                <label htmlFor='email'>Email:</label>
                <input 
                    type='email'
                    placeholder='Your email address'
                    name='email'
                    onChange={handleInputChange}
                    value={userFormData.email}
                    required
                />
                <label htmlFor='password'>Password:</label>
                <input 
                    type='password'
                    placeholder='Your password'
                    name='password'
                    onChange={handleInputChange}
                    value={userFormData.password}
                    required
                />
                <div className='signup-btn'>
                    <button 
                        type="submit"
                        variant='success'>
                    Sign Up</button>
                </div>
                <div className='login-btn'>
                    <button type='submit'>Log In</button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;