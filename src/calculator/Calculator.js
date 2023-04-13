import React from "react";
import btnArr from "./btnArr";
import "./Calculator.css";
import { useDispatch, useSelector } from "react-redux";
import {
  calculate,
  clear,
  deleteCurrent,
  setCurrentValue,
  setOperator,
} from "../store/calculatorSlice";
import { Button } from "react-bootstrap";

const Calculator = () => {
  const dispatch = useDispatch();
  const { currentValue } = useSelector((state) => state.calculator);
  console.log(btnArr);
  const handleFormat = (value, vol) => {
    console.log(value, vol);

    if (value === "add-digit") {
      dispatch(setCurrentValue(vol));
    } else if (value === "operation") {
      dispatch(setOperator(vol));
    } else if (value === "calculate") {
      dispatch(calculate());
    } else if (value === "clear") {
      dispatch(clear());
    } else if (value === "delete-digit") {
      dispatch(deleteCurrent());
    }
  };

  return (
    <div className="container-sm">
      <div className="history">123</div>
      <div className="calculator">
        <div className="display">
          <div className="output">{currentValue}</div>
        </div>
        <div className="numPad">
          {btnArr.map((item) => (
            <Button
              key={item.vol}
              onClick={() => {
                handleFormat(item.value, item.vol);
              }}
            >
              {item.vol}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Calculator;
