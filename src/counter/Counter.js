import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div class="wrapper">
      <div onClick={decrement} class="minus">
        Минус
      </div>
      <div class="number">
        <p>{count}</p>
      </div>
      <div onClick={increment} class="plus">
        Плюс
      </div>
    </div>
  );
};

export default Counter;
