import { useEffect, useRef, useState } from "react";

function App() {
  const [time, setTime] = useState(0);
  // const [count, setCount] = useState(0);
  // let val = useRef(0);
  // let btnRef = useRef();
  let timeRef = useRef(null);

  // function handleIncrement() {
  //   setCount(count + 1);
  //   val.current = val.current + 1;
  //   console.log("value is :", val.current);
  // }

  // useEffect(() => {
  //   console.log("m fir se render ho rha hu");
  // });

  // function handelColor() {
  //   btnRef.current.style.background = "red";
  // }

  function startTime() {
    timeRef.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
  }

  function stopTime() {
    clearInterval(timeRef.current);
    timeRef.current = null;
  }

  function resetTime() {
    stopTime();
    setTime(0);
  }

  return (
    <>
      {/* <button ref={btnRef} onClick={handleIncrement}>
        Increment
      </button>
      <p>count: {count}</p>
      <br /> <br />
      <button onClick={handelColor}>Change color of the Button</button> */}
      <div>StopWatch: {time} Seconds </div> <br />
      <button onClick={startTime}>Start</button>
      <br /> <br />
      <button onClick={stopTime}>Stop</button>
      <br /> <br />
      <button onClick={resetTime}>Reset</button>
    </>
  );
}

export default App;
