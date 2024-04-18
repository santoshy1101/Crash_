import React, { createContext, useState, useContext } from 'react'

// Define the themes
const themes = {
  light: {
    background: '#ffffff',
    text: '#000000',
  },
  dark: {
    background: '#333333',
    text: '#ffffff',
  },
}

// Create the ThemeContext
const ThemeContext = createContext()

// ThemeProvider component
const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('light')

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// Custom hook to consume the ThemeContext
const useTheme = () => {
  return useContext(ThemeContext)
}

export { ThemeProvider, useTheme, themes }
