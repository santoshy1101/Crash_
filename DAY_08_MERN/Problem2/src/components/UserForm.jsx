import React from 'react'
import { useTheme, themes } from './ThemeProvider'

const UserForm = () => {
  const { currentTheme, toggleTheme } = useTheme()

  return (
    <div
      style={{
        background: themes[currentTheme].background,
        color: themes[currentTheme].text,
        width: '400px',
      }}
    >
      <h2>User Form</h2>

      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}

export default UserForm
