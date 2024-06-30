import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type counterType = {
  count: number;
};
const initialState: counterType = { count: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
    incrementByValue: (state, action) => {
      state.count = state.count + action.payload.value;
    },
    decrementByValue: (state, action: PayloadAction<number>) => {
      state.count = state.count - action.payload;
    },
  },
});
export const { increment, decrement, incrementByValue, decrementByValue } =
  counterSlice.actions;
export default counterSlice.reducer;
