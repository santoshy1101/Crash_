import React, { useState } from 'react';

// EditProfile component to edit user information
function EditProfile({ name, email, bio }) {
    const [formData, setFormData] = useState({ name, email, bio });
  
    const handleChange = e => {
      const { name, value } = e.target;
      setFormData(prevData => ({
        ...prevData,
        [name]: value
      }));
    };
  
    return (
      <div>
        <h2>Edit Profile</h2>
        <form>
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </label>
          <label>
            Bio:
            <textarea name="bio" value={formData.bio} onChange={handleChange} />
          </label>
        </form>
      </div>
    );
  }
  
  export default EditProfile