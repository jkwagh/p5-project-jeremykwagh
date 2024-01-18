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
        <form onSubmit={handleSubmit}>
            <h2 id='title'>Login</h2>
            <br/>
            <div class="col-3">
                <label for="email">Email Address</label>
                <input type='email' name='email' value={loginUser.email} onChange={handleInputChange} placeholder='Enter Email' class="form-control" id="email" aria-describedby="emailHelp"required/>
            </div>
            <br/>
            <div class="col-3">
                <label for="password">Password</label>
                <input type='password' name='password' value={loginUser.password} onChange={handleInputChange} placeholder='Enter Password' class="form-control" id="password" required/>
            </div>
            <br/>
            <button type="submit" class="btn btn-primary col-3">Login</button>
        </form>
        
    </div>
}

export default Login;