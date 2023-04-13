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
import { Button, ListGroup } from "react-bootstrap";

const Calculator = () => {
  const dispatch = useDispatch();
  const { currentValue, history, result } = useSelector(
    (state) => state.calculator
  );
  const handleFormat = (value, vol) => {
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
  console.log(history);
  return (
    <div className="">
      <div className="calculator">
        <div className="display">
          <div className="output">
            {currentValue}
            {result}
          </div>
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
      <div className="history reverse">
        {history.map((item, index) => (
          <ListGroup key={index}>
            <ListGroup.Item className="history-list mt-2">
              {item.previous} {item.operator} {item.last} = {item.result}
            </ListGroup.Item>
          </ListGroup>
        ))}
      </div>
    </div>
  );
};
export default Calculator;
