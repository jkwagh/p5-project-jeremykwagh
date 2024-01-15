import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { useApiContext } from "./AppContext";
import { useNavigate } from "react-router-dom";


const AttendeesList = () => {
    
    const { attendees } = useApiContext();
    const navigate = useNavigate();

    //figure out how to display attendees and click event to drill down
    // const attendeeDetails = attendees.map((attendee) => (
    //     <li key={attendee.id} onClick={() => handleOnClick(attendee.id)}>
    //       <Attendees attendee={attendee} />
    //     </li>
    //   ));
    //console.log(attendeeDetails)
    const handleNavigate = (id) => {
        navigate(`/attendees/${id}`)
    }

    return (
        <div>
          <h2>Attendees List</h2>
          <ul>
            {attendees.map((attendee) => (
              <li key={attendee.id}>
                {/* Use onClick to trigger navigation */}
                <span onClick={() => handleNavigate(attendee.id)}>
                 {attendee.last_name}, {attendee.first_name}
                </span>
              </li>
            ))}
          </ul>
          
        </div>
      );
}

export default AttendeesList;