import { useEffect, useState } from "react";
import "./Counter.css";

function Counter() {
  const [counter, setCounter] = useState(0);

  // restricting response data

  const [add, setAdd] = useState(0);
  useEffect(() => {
    console.log("no dependency");
  }, [counter]);

  useEffect(() => {
    console.log("add use effect");
  }, [add]);

  useEffect(() => {
    console.log("run every time");
  });

  const increase = () => {
    setCounter(counter + 1);
  };

  const decrease = () => {
    if (counter === 0) {
      return;
    }
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(0);
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Counter App</h2>
      <div className="counter">
        <b>{counter}</b>
      </div>
      <div className="buttons">
        <div>
          <button onClick={() => increase()}>+</button>
        </div>
        <div>
          <button onClick={() => decrease()}>-</button>
        </div>
        <div>
          <button onClick={() => reset()}>0</button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
