import { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = document.body.classList.contains('dark');
    setDarkMode(isDarkMode);
  }, []);

  const handleToggle = () => {
    document.body.classList.toggle('dark');
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <button onClick={handleToggle}>
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;
