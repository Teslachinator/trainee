import { createSlice } from "@reduxjs/toolkit";

export const calcSlice = createSlice({
  name: "calculator",
  initialState: {
    operator: null,
    currentValue: "0",
    lastValue: "",
    previousValue: null,
    history: [],
    result: "",
  },

  reducers: {
    deleteCurrent(state, action) {
      if (state.result !== null) {
        state.result = null;
        state.currentValue = "0";
      } else if (state.currentValue === "" || state.currentValue.length === 1) {
        state.currentValue = "0";
      } else {
        state.currentValue = state.currentValue.slice(0, -1);
      }
    },
    clear(state, action) {
      state.currentValue = "0";
      state.operator = null;
      state.previousValue = null;
      state.lastValue = null;
      state.result = null;
    },
    setCurrentValue(state, action) {
      if (state.currentValue === "0") {
        state.currentValue = action.payload;
        state.result = null;
      } else if (state.result !== null) {
        state.currentValue = state.result;
        state.result = null;
      } else {
        state.currentValue += action.payload;
        state.result = null;

        console.log(state.lastValue);
      }
    },
    setOperator: (state, action) => {
      state.operator = action.payload;
      state.previousValue = state.currentValue;
      state.currentValue = "0";
      state.lastValue = "";
      if (state.result !== null) {
        state.currentValue = state.result;
        state.previousValue = state.currentValue;
        state.result = null;
        state.currentValue = "0";
      }
    },
    calculate(state, action) {
      const current = parseFloat(state.currentValue);
      const previous = parseFloat(state.previousValue);
      switch (state.operator) {
        case "+":
          state.result = previous + current;
          break;
        case "-":
          state.result = previous - current;
          break;
        case "*":
          state.result = previous * current;
          break;
        case "/":
          state.result = previous / current;
          break;
        default:
          break;
      }
      state.history.push({
        previous: state.previousValue,
        operator: state.operator,
        last: state.currentValue,
        result: state.result,
      });
      state.currentValue = null;
      state.operator = null;
      state.lastValue = null;
      state.previousValue = "";
    },
  },
});
export const { calculate, setOperator, clear, setCurrentValue, deleteCurrent } =
  calcSlice.actions;

export default calcSlice.reducer;
