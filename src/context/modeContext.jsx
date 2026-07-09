import { createContext, useState, useEffect } from "react";

export const ModeContext = createContext();

export const ModeContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <ModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </ModeContext.Provider>
  );
};
