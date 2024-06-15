export const setInputText = (text) => ({
    type: 'SET_INPUT_TEXT',
    payload: text,
  });
  
  export const addEntry = (text) => ({
    type: 'ADD_ENTRY',
    payload: { text },
  });
  
  export const incrementCounter = (text, increment) => ({
    type: 'INCREMENT_COUNTER',
    payload: { text, increment },
  });