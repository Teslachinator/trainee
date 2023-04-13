import { createSlice } from "@reduxjs/toolkit";

export const calcSlice = createSlice({
  name: "calculator",
  initialState: {
    operation: null,
    currentValue: "0",
    previousValue: null,
  },

  reducers: {
    deleteCurrent(state, action) {
      const inputt = state.currentValue;
      state.currentValue = inputt.slice(0, -1);
      // state.currentValue = inputt.substring(0, inputt.length - 1);
    },
    clear(state, action) {
      state.currentValue = "0";
      state.operator = null;
      state.previousValue = null;
    },
    setCurrentValue(state, action) {
      if (state.currentValue === "0") {
        state.currentValue = action.payload;
      } else {
        state.currentValue += action.payload;
      }
    },
    setOperator: (state, action) => {
      state.operator = action.payload;
      state.previousValue = state.currentValue;
      state.currentValue = "0";
    },
    calculate(state, action) {
      const current = parseFloat(state.currentValue);
      const previous = parseFloat(state.previousValue);
      switch (state.operator) {
        case "+":
          state.currentValue = previous + current;
          break;
        case "-":
          state.currentValue = previous - current;
          break;
        case "*":
          state.currentValue = previous * current;
          break;
        case "/":
          state.currentValue = previous / current;
          break;
        default:
          break;
      }
      state.operator = null;
      state.previousValue = null;
    },
  },
});
export const { calculate, setOperator, clear, setCurrentValue, deleteCurrent } =
  calcSlice.actions;

export default calcSlice.reducer;
