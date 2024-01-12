import React, { useState } from "react";
import NavBar from "./NavBar";
import { useApiContext } from "./AppContext";
import Attendees from "./Attendees";

const AttendeesList = () => {
    
    const { attendees } = useApiContext();
    const {attendeeID, setAttendeeID } = useState();

    const attendeeDetails = attendees.map((attendee) => {
        <Attendees key={attendee.id} attendee={attendee}/>
    })
    
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