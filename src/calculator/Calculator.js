import React, { useReducer } from "react";
import btnArr from "./btnArr";
import "./Calculator.css";
import { ACTIONS } from "./btnArr";

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: payload,
          overwrite: false,
        };
      } else if (state.currentOperand === "0" && payload === "0") return state;
      else if (
        state.currentOperand === "." &&
        state.currentOperand.includes(".")
      ) {
        return state;
      }
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload}`,
      };
    case ACTIONS.OPERATION:
      return {};
    case ACTIONS.CLEAR:
      return {};
    case ACTIONS.DELETE:
      if (state.currentOperand.length === 0) {
        return state;
      }
      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      };
    case ACTIONS.CALC:
      return {};
    default:
      return state;
  }
}

const Calculator = () => {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  return (
    <div className="calculator">
      <div className="display">
        <div className="history">126+56</div>
        <div className="output">
          {previousOperand}
          {operation}
          {currentOperand}
        </div>
      </div>
      <div className="numPad">
        {btnArr.map((item) => (
          <button
            onClick={() => {
              dispatch({ type: item.value, payload: item.vol });
            }}
          >
            {item.vol}
          </button>
        ))}
        {/* {btns.btnOperations.map((item) => (
          <button
            onClick={() => {
              tapeOpertion(item.vol);
            }}
          >
            {item.vol}
          </button> */}
      </div>
    </div>
  );
};
export default Calculator;
