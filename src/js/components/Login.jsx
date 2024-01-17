import { React, useContext, useState } from 'react';
import { useApiContext } from './AppContext';

const Login = () => {

    const { handleLogin } = useApiContext();
    const [loginUser, setLoginUser] = useState({
        password: "",
        email: ""
    });
    
    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin(loginUser);
        
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginUser({...loginUser, [name]: value});
    }

    return <div className="login">
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit}>
            <h2 id='title'>login</h2>
            <div className='login-form'>
                <input type='text' name='email' value={loginUser.email} onChange={handleInputChange} placeholder='email' required/>
            </div>
            <div className='login-form'>
                <input type='password' name='password' value={loginUser.password} onChange={handleInputChange} placeholder='password' required/>
            </div>
            <button type="submit" className='btn'>Login</button>
        </form>
        
    </div>
}

export default Login;