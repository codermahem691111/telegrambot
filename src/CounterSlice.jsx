import React from 'react'
import { createSlice } from '@reduxjs/toolkit'
const CounterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    setCounter: (state, action) => action.payload,
  },
});

export const { increment, setCounter } = CounterSlice.actions;
export default CounterSlice.reducer;
