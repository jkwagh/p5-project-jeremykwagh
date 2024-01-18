import { React, useContext, useState } from 'react';
import { useApiContext } from './AppContext';
import "/scss/styles.scss";

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
        <form onSubmit={handleSubmit} class="px-3">
            <h2 id='title'>Login</h2>
            <div class="col-3">
                <label for="email" class="form-label">Email Address</label>
                <input type='email' name='email' value={loginUser.email} onChange={handleInputChange} placeholder='Enter Email' class="form-control" id="email" aria-describedby="emailHelp"required/>
            </div>
            <br/>
            <div class="col-3">
                <label for="password" class="form-label">Password</label>
                <input type='password' name='password' value={loginUser.password} onChange={handleInputChange} placeholder='Enter Password' class="form-control" id="password" required/>
            </div>
            <br/>
            <p class="lead">
                <button type="submit" class="btn btn-lg btn-secondary fw-bold border-white bg-white">Login</button>
            </p>
        </form>
        
    </div>
}

export default Login;