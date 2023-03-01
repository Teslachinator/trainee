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
          currentOperand: payload.digit,
          overwrite: false,
        };
      }
      if (payload.digit === "0" && state.currentOperand === "0") {
        return state;
      }
      if (payload.digit === "." && state.currentOperand.includes(".")) {
        return state;
      }

      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      };
    // if (state.overwrite) {
    //   return {
    //     ...state,
    //     currentOperand: payload,
    //     overwrite: false,
    //   };
    // } else if (state.currentOperand === "0" && payload === "0") return state;
    // else if (
    //   state.currentOperand === "." &&
    //   state.currentOperand.includes(".")
    // ) {
    //   return state;
    // }
    // return {
    //   ...state,
    //   currentOperand: `${state.currentOperand || ""}${payload}`,
    // };
    case ACTIONS.OPERATION:
      // return {
      //   ...state,
      //   currentOperand: null,
      //   operation: payload.operation,
      //   previousOperand: state.currentOperand,
      // };
      if (state.currentOperand == null && state.previousOperand == null) {
        return state;
      }

      if (state.currentOperand == null) {
        return {
          ...state,
          operation: payload.operation,
        };
      }

      if (state.previousOperand == null) {
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null,
        };
      }
      break;
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
      if (
        state.operation == null ||
        state.currentOperand == null ||
        state.previousOperand == null
      ) {
        return state;
      }

      return {
        ...state,
        overwrite: true,
        previousOperand: null,
        operation: null,
        currentOperand: calculate(state),
      };
    default:
      return state;
  }
}

const calculate = ({ previousOperand, currentOperand, operation }) => {
  const previ = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  let calc = "";
  switch (operation) {
    case "/":
      calc = previ / current;
      break;
    case "+":
      calc = previ + current;
      break;
    case "-":
      calc = previ - current;
      break;
    case "*":
      calc = previ * current;
      break;
    case "+/-":
      calc = current * -1;
      break;
    default:
      return NaN;
  }
  return calc.toString();
};

const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0,
});
function formatOperand(operand) {
  if (operand == null) return;
  const [integer, decimal] = operand.split(".");
  if (decimal == null) return INTEGER_FORMATTER.format(integer);
  return `${INTEGER_FORMATTER.format(integer)}.${decimal}`;
}

const Calculator = () => {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  return (
    <div className="calculator">
      <div className="display">
        <div className="history">
          {formatOperand(previousOperand)} {operation}
        </div>
        <div className="output">{formatOperand(currentOperand)}</div>
      </div>
      <div className="numPad">
        {btnArr.map((item) => (
          <button
            onClick={() => {
              dispatch({
                type: item.value,
                payload: item.vol,
                key: item.vol,
              });
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
