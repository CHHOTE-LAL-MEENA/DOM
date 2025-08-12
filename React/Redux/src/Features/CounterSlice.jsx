import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increament: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    increamentByAmount: (state, action) => {
      state.value += Number(action.payload);
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { increament, decrement, increamentByAmount, reset } =
  counterSlice.actions;
export default counterSlice.reducer;
