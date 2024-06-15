import { createSlice } from '@reduxjs/toolkit';

const HistorySlice = createSlice({
  name: 'history',
  initialState: [],
  reducers: {
    addToHistory: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addToHistory } = HistorySlice.actions;
export default HistorySlice.reducer;