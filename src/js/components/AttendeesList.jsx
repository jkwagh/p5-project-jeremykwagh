import React, { useState } from "react";
import NavBar from "./NavBar";
import { useApiContext } from "./AppContext";
import Attendees from "./Attendees";


const AttendeesList = () => {
    
    const { attendees } = useApiContext();
    console.log(attendees)

    //figure out how to display attendees and click event to drill down
    const attendeeDetails = attendees.map((attendee) => (
        <li key={attendee.id}>
          <Attendees attendee={attendee} />
        </li>
      ));
    //console.log(attendeeDetails)
    
    return (
        <div>
            <h2>Attendees List</h2>
            <ul>
                {attendeeDetails} 
            </ul>
        </div>
    )
}

export default AttendeesList;