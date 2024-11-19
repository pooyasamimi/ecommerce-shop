import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      setTheme(theme);
    }
  }, []);

  function changeThemeLocalStorageHandler(mode) {
    localStorage.setItem("theme", mode);
  }
  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, changeThemeLocalStorageHandler }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
