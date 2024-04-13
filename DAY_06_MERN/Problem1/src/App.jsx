import React, { useState } from 'react';
import EditProfile from './components/EditProfile';
import UserProfile from './components/UserProfile';
import "./index.css"
function App() {
  const [editMode, setEditMode] = useState(false);
  const userData = {
    name: "Santosh Yadav",
    email: "santosh@gamil.com",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  };

  const toggleEditMode = () => {
    setEditMode(prevMode => !prevMode);
  };

  return (
    <div className='app'>
      <h1>User Profile Application</h1>
      {editMode ? (
        <EditProfile {...userData} />
      ) : (
        <UserProfile {...userData} />
      )}
      <button onClick={toggleEditMode}>
        {editMode ? 'View Mode' : 'Edit Mode'}
      </button>
    </div>
  );
}

export default App;