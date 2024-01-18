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
              <dl key={attendee.id}>
                <dt class="col-sm-3"><span>{attendee.last_name}, {attendee.first_name}
                </span></dt>
                <dd class="col-sm-9">{attendee.organization}</dd>
                <button class="btn btn-primary" onClick={() => handleNavigate(attendee.id)}>Details</button>
              </dl>
            ))}
          </ul>
          
        </div>
      );
}

export default AttendeesList;