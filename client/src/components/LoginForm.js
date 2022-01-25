import React from "react";
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

function LogIn(props) {
    const [userFormData, setUserFormData] = useState({ email: '', password: '' });
    const [login] = useMutation(LOGIN_USER);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        try {
          const formResponse = await login({
            variables: { 
              ...userFormData,
            },
        });
          const token = formResponse.data.login.token;
          Auth.login(token);
        } catch (err) {
          console.log(err);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ 
          ...userFormData, 
          [name]: value,
        });
    };
    

    return (
        <div className='login'>
            <h2>Log In!</h2>
            <form className='login-form' onSubmit={handleFormSubmit}>
                <label>Email:</label>
                <input 
                    type='email'
                    placeholder='Your email address'
                    name='email'
                    onChange={handleInputChange}
                    value={userFormData.email}
                    required
                />
                <label>Password:</label>
                <input 
                    type='password'
                    placeholder='Your password'
                    name='password'
                    onChange={handleInputChange}
                    value={userFormData.password}
                    required
                />
                <div className='login-btn'>
                    <button 
                        type='submit'
                        variant='success'>
                    Log In</button>
                </div>
                <div className='signup-btn'>
                    <button type="submit">Sign Up</button>
                </div>
            </form>
        </div>
    );
};

export default LogIn;