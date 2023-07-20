import React from "react";
import { createContext } from "react";
import { useState } from "react";
export const StateContex = createContext();

const StateProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <StateContex.Provider value={{ open, setOpen }}>
      {children}
    </StateContex.Provider>
  );
};

export default StateProvider;
