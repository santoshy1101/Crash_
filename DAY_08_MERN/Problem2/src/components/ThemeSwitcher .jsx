import React from 'react'
import { useTheme } from './ThemeProvider'

const ThemeSwitcher = () => {
  const { currentTheme, toggleTheme } = useTheme()

  return (
    <button style={{ marginTop: '10px' }} onClick={toggleTheme}>
      Switch to {currentTheme === 'light' ? 'dark' : 'light'} theme
    </button>
  )
}

export default ThemeSwitcher
