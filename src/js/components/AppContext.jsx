
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ApiContext = createContext();

export const useApiContext = () => useContext(ApiContext);

export const ApiProvider = ({ children }) => {
  
    const [attendees, setAttendees] = useState([]);
    const [activities, setActivities] = useState([]);
    const [ userToEdit, setUserToEdit] = useState([]);
    const navigate = useNavigate();
  
    useEffect(() => {
        fetch('http://localhost:5555/attendees')
        .then((resp) => resp.json())
        .then((data) => setAttendees(data))
    }, [])

    useEffect(() => {
        fetch('http://localhost:5555/activities')
        .then((resp) => resp.json())
        .then((data) => setActivities(data))
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
        .then(() => {
            fetch('http://localhost:5555/attendees')
            .then((resp) => resp.json())
            .then((data) => setAttendees(data))
        })
        .then(() => navigate('/'))
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
        .then(() => {
            fetch('http://localhost:5555/attendees')
            .then((resp) => resp.json())
            .then((data) => setAttendees(data))
        })
        .then(() => navigate('/attendees'))
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
        .then(() => {
            fetch('http://localhost:5555/attendees')
            .then((resp) => resp.json())
            .then((data) => setAttendees(data))
        })
        .then(() => navigate('/attendees'))
        
    }

    const attendeeData = (id) => {
        fetch(`http://localhost:5555/attendees/${id}`)
          .then((resp) => {
            if (!resp.ok) {
              throw new Error(`Failed to fetch attendee data for ID ${id}`);
            }
            return resp.json();
          })
          .then((data) => setUserToEdit(data))
          .catch((error) => {
            console.error(error);
          });
      };
      


  return (
    <ApiContext.Provider value={{ postData, patchData, attendees, userToEdit, deleteData, attendeeData, setUserToEdit, activities}}>
      {children}
    </ApiContext.Provider>
  );
};
