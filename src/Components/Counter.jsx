import React, { useState } from "react";
import "./styleCounter.css";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {setCount(count+1)}
  const decrement = () => {setCount(count-1)}



  return (
    <>
      <div className="container">
        <h1 className="number">{count}</h1>
      </div>

      <section className="btns-container">
        <button className="increment" onClick={increment}>
            +
        </button>

        <button className="increment" onClick={decrement}>
            -
        </button>
      </section>
    </>
  );
}

export default Counter;