import React from "react";
import { Link, useNavigate } from 'react-router-dom'; 
import * as bootstrap from 'bootstrap'

const NavBar = () =>{
    return <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="/#"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-calendar-heart-fill" viewBox="0 0 16 16">
        <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"/>
        </svg> EventPlanner</a>
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