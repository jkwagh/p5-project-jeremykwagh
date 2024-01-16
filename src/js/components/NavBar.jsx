import React from "react";
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () =>{
    return <div>
        <nav className="navbar">
            <div className="logo" onClick={() => Navigate('/home')}>
                NavBar
            </div>
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