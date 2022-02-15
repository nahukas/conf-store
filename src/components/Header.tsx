import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const { color } = useTheme();
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    setDarkMode((prevState) => !prevState);
  };

  return (
    <div className='header'>
      <h1 style={{ color: color as string }}>React Hooks</h1>
      <button type='button' onClick={handleClick}>
        {darkMode ? 'Dark Mode' : 'Light Mode'}
      </button>
    </div>
  );
};

export default Header;
