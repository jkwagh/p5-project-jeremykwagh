import React from "react";
import { useAppContext } from "./AppContext";


const AttendeesList = () => {
    const { attendees, setAttendees} = useAppContext();

    
    return <div>
        <h1>This is the Attendees List</h1>
    </div>
}

export default AttendeesList;