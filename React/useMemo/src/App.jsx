import { useMemo, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }
  function expensiveTask(num) {
    console.log("I'm inside the expensive task.");
    for (let i = 0; i < 100000000; i++) {}
    return num * 2;
  }
  let doubleValue = useMemo(() => expensiveTask(input), [input]);
  return (
    <>
      <button onClick={handleIncrement}>Increment</button>
      <p>count: {count}</p> <br />
      <input
        type="Number"
        value={input}
        placeholder="Enter a Number"
        onChange={(e) => setInput(e.target.value)}
      />
      <p>Double is : {doubleValue}</p>
    </>
  );
}

export default App;
