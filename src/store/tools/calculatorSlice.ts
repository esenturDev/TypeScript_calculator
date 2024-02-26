// calculatorSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Calculator {
  value: number;
}

const initialState: Calculator = {
  value: 0,
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    addPluse: (
      state,
      action: PayloadAction<{ inputsValue: number | string  }>
    ) => {
      state.value += +action.payload.inputsValue;
    },
    addMinuse: (
      state,
      action: PayloadAction<{ inputsValue: number | string  }>
    ) => {
      state.value -= +action.payload.inputsValue;
    },
    addDel: (
      state,
      action: PayloadAction<{ inputsValue: number | string  }>
    ) => {
      state.value /= +action.payload;
    },
    addQure: (
      state,
      action: PayloadAction<{ inputsValue: number | string  }>
    ) => {
      state.value * +action.payload.inputsValue;
    },
    addResult: (
      state,
      action: PayloadAction<{ inputsValue: number | string  }>
    ) => {
      state.value % +action.payload.inputsValue;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const {
  addPluse,
  addMinuse,
  addDel,
  addQure,
  reset,
  addResult,
} = calculatorSlice.actions;
export const calculatorResults = calculatorSlice.reducer;
