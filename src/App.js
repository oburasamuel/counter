import "./styles.css";
import React from "react";

const App = () => {
  const [counter, setCounter] = React.useState(0);

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
    </div>
  );
};
