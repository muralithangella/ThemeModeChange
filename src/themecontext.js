import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  const Theme = isDarkMode ? "dark" : "light";
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", Theme);
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ Theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
