import React, { useEffect, useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(230);
  // const [colorL, setColorL] = useState(50);
  useEffect(() => {
    switch (true) {
      case count === 15:
        setColor(40);
        break;
      case count === 14:
        setColor(202);
        break;
      case count < -12:
        setColor(250);
        break;
      case count > 35:
        setColor(0);
      default:
        break;
    }
  }, [count]);

  const increment = () => {
    setColor(color - 2);
    setCount(count + 1);
    console.log(color);

    // switch (true) {
    //   case count === 15:
    //     setColor(40);
    //     break;
    //   case count > 15:
    //     setColor(color - 2);
    //     break;
    //   case count >= 0:
    //     setColor(color - 2);
    //     console.log(color);
    //     break;

    //   default:
    //     break;
    // }

    // setCount(count + 1);
    // if (color === 400) {
    //   setColorL(colorL + 2);
    // } else if (color === 260) {

    // } else if (count >= -5) {
    //   setColor(color + 5);
    // }
    // if (count === -5) {
    //   setColorL(50);
    //   setColor(180);
    // }
    // console.log(color);
    // console.log(colorL);
  };
  const decrement = () => {
    setCount(count - 1);
    setColor(color + 2);
    console.log(color);
    // switch (true) {
    //   case count === 16:
    //     setColor(202);
    //     break;
    //   case count > 15:
    //     setColor(color + 2);
    //     break;
    //   case count >= 0:
    //     setColor(color + 2);
    //     console.log(color);
    //     break;

    //   default:
    //     break;
    // }
    // setCount(count - 1);
    // if (colorL > 50) {
    //   setColorL(colorL - 2);
    // }
    // if (color === 180) {
    //   setColorL(colorL + 2);
    // } else if (count > 41) {
    //   setColorL(colorL - 2);
    // } else {
    //   setColor(color - 5);
    // }
    // if (colorL > 80) {
    //   setColorL(colorL);
    // }
    // console.log(color);
    // console.log(colorL);
  };

  return (
    <div class="wrapper">
      <div onClick={decrement} class="minus">
        Минус
      </div>
      <div style={{ background: `hsl(${color}, 100%, 50%)` }} class="number">
        <p>{count}°C</p>
      </div>
      <div onClick={increment} class="plus">
        Плюс
      </div>
    </div>
  );
};

export default Counter;
