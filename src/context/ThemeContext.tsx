import { useState, createContext, useContext } from 'react';

const defaultState = {};

const ThemeContext = createContext(defaultState);

const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState(false);

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

ThemeContextProvider.displayName = 'ThemeProvider';

export const useTheme = () => {
  const color = useContext(ThemeContext);

  return {
    color
  };
};

export default ThemeContext;
