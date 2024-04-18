import React from 'react';
import { useTheme, themes  } from './ThemeProvider';

const Header = () => {
  const { currentTheme } = useTheme();

  return (
    <header style={{ background: themes[currentTheme].background, color: themes[currentTheme].text }}>
      <h1>My App</h1>
      {/* Other header content */}
    </header>
  );
};

export default Header;
