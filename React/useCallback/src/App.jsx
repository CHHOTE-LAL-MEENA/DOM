import { useCallback, useState } from "react";
import ChildComponent from "./components/ChildComponent";

function App() {
  const [count, setCount] = useState(0);
  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  return (
    <>
      <div>Count: {count}</div>
      <br />
      <button onClick={handleIncrement}>Increment</button>
      <ChildComponent handleClick={handleIncrement} btnName="Click Me" />
    </>
  );
}

export default App;
