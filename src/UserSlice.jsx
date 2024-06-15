import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  counters: {},
};

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      const username = action.payload;
      state.currentUser = username;
      if (!(username in state.counters)) {
        state.counters[username] = 0;
      }
    },
    incrementCounter: (state) => {
      if (state.currentUser) {
        state.counters[state.currentUser] += 1;
      }
    },
  },
});

export const { login, incrementCounter } = UserSlice.actions;
export default UserSlice.reducer;