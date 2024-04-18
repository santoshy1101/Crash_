import React from 'react';
import { ThemeProvider } from './components/ThemeProvider'; // Import the ThemeProvider
import UserForm from './components/UserForm';
import Header from './components/Header';
import ThemeSwitcher from './components/ThemeSwitcher ';

const App = () => {
  return (
    <ThemeProvider> {/* Wrap your entire application with the ThemeProvider */}
      <Header />
       <UserForm /> 
      <ThemeSwitcher />
    </ThemeProvider>
  );
};

export default App
