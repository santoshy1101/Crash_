### `Assignment 2: Refactoring a Class Component to a Functional Component with Hooks`

**Objective:**
Take a provided class component that includes state and lifecycle methods, and refactor it into a functional component using hooks.

**Provided Class Component (To Refactor):**

```jsx
import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      seconds: this.state.seconds + 1
    });
  }

  render() {
    return (
      <div>
        Seconds: {this.state.seconds}
      </div>
    );
  }
}

export default Timer;

```

**Refactoring Objectives:**

- Convert the `Timer` class component to a functional component.
- Replace the `constructor` and `state` with the `useState` hook.
- Replace the `componentDidMount` and `componentWillUnmount` lifecycle methods with the `useEffect` hook.
- Ensure the functional component behaves identically to the class component, incrementing and displaying the seconds.

**Focus Points:**

- Demonstrate the use of `useState` to manage state in a functional component.
- Utilize `useEffect` to handle side effects, such as starting the timer when the component mounts and cleaning up on unmount.
- Highlight the simplicity and readability improvements that hooks offer in functional components.