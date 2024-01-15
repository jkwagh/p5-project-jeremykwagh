
import React, { createContext, useContext, useState, useEffect } from 'react';

const ApiContext = createContext();

export const useApiContext = () => useContext(ApiContext);

export const ApiProvider = ({ children }) => {
  
    const [attendees, setAttendees] = useState([]);
    const [ userToEdit, setUserToEdit] = useState([]);
  
    useEffect(() => {
        fetch('http://localhost:5555/attendees')
        .then((resp) => resp.json())
        .then((data) => setAttendees(data))
    }, [])

    const postData = (data) => {
        fetch('http://localhost:5555/attendees', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then((resp) => resp.json())
        .then((data) => setAttendees([...attendees, data]))
    }

    const patchData = (data) => {
        fetch(`http://localhost:5555/attendees/${data.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then((resp) => {
            if(resp.ok) {
                resp.json().then((data) => setAttendees(attendees.map(attendee => {
                    if (attendee.id === data.id) {
                        return data
                    }
                    else {
                        return attendee
                    }
                })))
            }
        })
    }

    const deleteData = (id) => {
        fetch(`http://localhost:5555/attendees/${id}`, {
            method: 'DELETE'
        })
        .then((resp) => {
            if(resp.ok){
                alert("Deleted")
            } else {
                alert("Error: Unable to Delete")
            }
        })
        
    }

    // const attendeeData = (id) => {
    //     fetch(`http://localhost:5555/attendees/${id}`)
    //     .then((resp) => resp.json())
    //     .then((data) => setAttendees(data))
    // }


  return (
    <ApiContext.Provider value={{ postData, patchData, attendees, userToEdit, deleteData }}>
      {children}
    </ApiContext.Provider>
  );
};
