import { configureStore } from "@reduxjs/toolkit";
import calcSlice from "./calculatorSlice";

export const store = configureStore({
  reducer: {
    calculator: calcSlice,
  },
});
