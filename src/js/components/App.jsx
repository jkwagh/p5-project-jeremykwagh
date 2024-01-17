import React, { useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import AttendeePage from "./AttendeePage";
import Schedule from "./Schedule";
import SignUp from "./Signup";
import AttendeesList from "./AttendeesList";
import { ApiProvider } from "./AppContext";
import Login from "./Login";
import ActivityPage from "./ActivityPage";

const App = () => {
    return ( 
        <Router>
            <ApiProvider>
                <div>
                    <NavBar/>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/attendees/*" element={<AttendeesList />} />
                        <Route path="/attendees/:id" element={<AttendeePage />} />
                        <Route path="/schedule" element={<Schedule />} />
                        <Route path="/schedule/:id" element={<ActivityPage />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </div>
            </ApiProvider>
        </Router>
      
      );
}

export default App;