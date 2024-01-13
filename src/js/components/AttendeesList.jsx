import React, { useState } from "react";
import NavBar from "./NavBar";
import { useApiContext } from "./AppContext";
import Attendees from "./Attendees";


const AttendeesList = () => {
    
    const { attendees } = useApiContext();
    console.log(attendees)

    //figure out how to display attendees and click event to drill down
    const attendeeDetails = attendees.map((attendee) => {
        return <Attendees key={attendee.id} attendee={attendee}/>
    })
    console.log(attendeeDetails)
    
    return (
        <div>
            <h2>Attendees List</h2>
            <ul className="attendee-list">
                {attendeeDetails}
            </ul>
        </div>
    )
}

export default AttendeesList;