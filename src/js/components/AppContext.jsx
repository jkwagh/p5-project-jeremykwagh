
import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [attendees, setAttendees] = useState([]);
  
    useEffect(() => {
        fetch('/attendees')
        .then((resp) => resp.json())
        .then((data) => {
            setAttendees(data)
        })
        .then(console.log(attendees))
        .catch((error) => {
            console.log(`Error fetching attendees: ${error}`)
        });
    }, [])

  return (
    <AppContext.Provider value={{ attendees, setAttendees }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
