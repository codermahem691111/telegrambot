import React from 'react'
const initialState = { data: [] };
const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ENTRY':
      return {
        ...state,
        data: [...state.data, { text: action.payload.text, history: [0] }],
      };
    case 'INCREMENT_COUNTER':
      const index = state.data.findIndex((entry) => entry.text === action.payload.text);
      if (index !== -1) {
        const newData = [...state.data];
        newData[index].history.push(newData[index].history[newData[index].history.length - 1] + 1); // Append new count
        return { ...state, data: newData };
      }
      return state;
    default:
      return state;
    }
  };
  
  export default CounterReducer;