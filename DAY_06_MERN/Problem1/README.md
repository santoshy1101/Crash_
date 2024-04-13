### `Assignment 1: Building a Simple React Application to Demonstrate State and Props`

**Objective:**
Create a "User Profile" application where user data is passed down as props to display user information, and use state to toggle between "Edit Mode" and "View Mode".

**Requirements:**

- The application should have a parent component (`App`) and at least two child components (`UserProfile` and `EditProfile`).
- The `App` component should pass user data (e.g., name, email, bio) to `UserProfile` as props.
- Use state in the `App` component to manage whether the profile is in "Edit Mode" or "View Mode".
- The `UserProfile` component displays user information in "View Mode".
- The `EditProfile` component shows form inputs pre-populated with user data in "Edit Mode", allowing the data to be edited. It doesn't need to actually save changes for this assignment.
- Include a button in the `App` component that toggles between "Edit Mode" and "View Mode".

**Focus Points:**

- Demonstrate understanding of props by passing data to the `UserProfile` component.
- Use the `useState` hook in the `App` component to manage the mode.
- Highlight the reusability of components and the importance of state and props in React applications.