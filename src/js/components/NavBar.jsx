import React from "react";
import { Link, useNavigate } from 'react-router-dom'; 
import * as bootstrap from 'bootstrap'

const NavBar = () =>{
    return <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="/#"><img src="/logo.png" width="30" height="30" class="d-inline-block align-top" alt="event planner logo" />Event Planner</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="/#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/#/schedule">Schedule</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/#/login">Login</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/#/signup">Signup</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/#/attendees">Attendees</a>
                </li>
            </ul>
        </div>
        </nav>
    </div>
}

export default NavBar;