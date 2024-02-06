import React, { useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  <AppContext.Provider value="Hello">{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
