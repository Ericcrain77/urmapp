import React from "react";

function SignUp() {
    return (
        <form>
            <label>Username:</label>
            <input
                type='text'
                placeholder='Your username'
                name='username'
                // onChange={handleInputChange}
                // value={userFormData.username}
                required
            />
            <label>Email:</label>
            <input 
                type='email'
                placeholder='Your email address'
                name='email'
                // onChange={handleInputChange}
                // value={userFormData.email}
                required
            />
            <label>Password:</label>
            <input 
                type='password'
                placeholder='Your password'
                name='password'
                // onChange={handleInputChange}
                // value={userFormData.password}
                required
            />
        </form>
    );
};

export default SignUp;