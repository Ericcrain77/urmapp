import React from "react";

function LogIn() {
    return (
        <form>
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

export default LogIn;