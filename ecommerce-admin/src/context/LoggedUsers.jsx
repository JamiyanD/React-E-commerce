import { createContext, useState } from "react";

const LoggedUsersContext = createContext(null);

const LoggedUsersProvider = ({ children }) => {
  const [showLoggedUsers, setShowLoggedUsers] = useState({});

  return (
    <LoggedUsersContext.Provider value={[showLoggedUsers, setShowLoggedUsers]}>
      {children}
    </LoggedUsersContext.Provider>
  );
};

export { LoggedUsersContext, LoggedUsersProvider };
