import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { useApiContext } from "./AppContext";
import { useNavigate } from "react-router-dom";


const AttendeesList = () => {
    
    const { attendees } = useApiContext();
    const navigate = useNavigate();

    const handleNavigate = (id) => {
        navigate(`/attendees/${id}`)
    }
          
    return (
        <div>
          <h2>Attendees List</h2>
          <ul>
            {attendees.map((attendee) => (
              <div key={attendee.id} className="row">
                <div className="col-sm-6">
                  <div><strong>{attendee.last_name}, {attendee.first_name}</strong></div>
                  <div>{attendee.organization}</div>
                </div>
                <div className="col-sm-3">
                  <button className="btn btn-sm btn-secondary fw-bold border-white bg-white" onClick={() => handleNavigate(attendee.id)}>Details</button>
                </div>
                <div className="attendee-break"></div>
              </div>
            ))}
          </ul>
          
        </div>
      );
}

export default AttendeesList;