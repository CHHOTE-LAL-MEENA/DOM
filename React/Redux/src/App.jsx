import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increament,
  increamentByAmount,
  reset,
} from "./Features/CounterSlice";
import { useState } from "react";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);

  function handleIncrement() {
    dispatch(increament());
  }

  function handleDecrement() {
    dispatch(decrement());
  }

  function handleIncrementByAmount() {
    dispatch(increamentByAmount(amount));
  }
  function handleReset() {
    dispatch(reset());
  }

  return (
    <>
      <div className="container">
        <button onClick={handleIncrement}>+</button>
        <p>count: {count}</p>
        <button onClick={handleDecrement}>-</button>
        <br />
        <br />
        <button onClick={handleReset}>Reset</button>
        <br />
        <br />
        <input
          type="Number"
          value={amount}
          placeholder="Enter value"
          onChange={(e) => setAmount(e.target.value)}
        />{" "}
        <br />
        <br />
        <button onClick={handleIncrementByAmount}>Increment By Amount</button>
      </div>
    </>
  );
}

export default App;
