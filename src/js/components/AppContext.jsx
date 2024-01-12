import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [attendees, setAttendees] = useState([]);

  return (
    <AppContext.Provider value={{ attendees, setAttendees }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
