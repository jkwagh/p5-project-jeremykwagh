import React, { useEffect, useState } from "react";

const App = () => {

    const [attendees, setAttendees] = useState([]);

    useEffect(() => {
        fetch('/attendees')
        .then((resp) => resp.json())
        .then((data) => {
            setAttendees(data);
        })
        .catch((error) => {
            console.error(`Error fetching attendees: ${error}`);
        })
    }, [])

  return <div>
    <h1>Project Client</h1>
    </div>

}

export default App;