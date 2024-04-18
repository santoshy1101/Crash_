import React, { useState, useRef } from 'react';

const UserForm = () => {
  // State for controlled input
  const [name, setName] = useState('');
  
  // Ref for uncontrolled input
  const emailRef = useRef(null);

  // Validation function
  const validateName = () => {
    return name.length >= 3;
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Log values to console
    console.log("Name:", name);
    console.log("Email:", emailRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Controlled input for name */}
      <label>
        Name:
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
      </label>
      {/* Validation display */}
      {!validateName() && <p>Name must be at least 3 characters long.</p>}
      
      {/* Uncontrolled input for email */}
      <label>
        Email:
        <input 
          type="text" 
          ref={emailRef} 
        />
      </label>

      {/* Submit button */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
