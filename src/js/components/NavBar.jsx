import React from "react";
import { Link, useNavigate } from 'react-router-dom'; 

const NavBar = () =>{
    return <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="/#/">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            {/* <div className="logo" onClick={() => Navigate('/home')}>
                NavBar
            </div> */}
            <ul>
                <li className="Home">
                    <Link to="/" className="NavBarLinks">Home</Link>
                </li>
                <li className="Schedule">
                    <Link to="/schedule" className="NavBarLinks">Schedule</Link>
                </li>
                <li className="Attendees">
                    <Link to="/attendees" className="NavBarLinks">Attendees</Link>
                </li>
                <li className="Login">
                    <Link to="/login" className="NavBarLinks">Login</Link>
                </li>
                <li className="SignUp">
                    <Link to="/signup" className="NavBarLinks">Signup</Link>
                </li>
            </ul>

        </nav>
    </div>
}

export default NavBar;