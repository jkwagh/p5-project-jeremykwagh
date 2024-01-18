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
              <dd key={attendee.id}>
                {/* Use onClick to trigger navigation */}
                <span onClick={() => handleNavigate(attendee.id)}>
                 {attendee.last_name}, {attendee.first_name} - {attendee.organization}
                </span>
              </dd>
            ))}
          </ul>
          
        </div>
      );
}

export default AttendeesList;