import React, { useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./AppContext";
import Home from "./Home";
import NavBar from "./NavBar";
import Attendees from "./Attendees";
import Schedule from "./Schedule";
import SignUp from "./Signup";
import AttendeesList from "./AttendeesList";

const App = () => {
    return ( 
        <Router>
            <AppProvider>
                <div>
                    <NavBar/>
                    <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/attendees" element={<AttendeesList />}>
                        <Route path="attendees/:id" element={<Attendees/>}/>
                    </Route>
                    <Route path="/schedule" element={<Schedule />} />
                    <Route path="/signup" element={<SignUp />} />
                    </Routes>
                </div>
            </AppProvider>
        </Router>
      
      );
}

export default App;