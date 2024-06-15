const initialState = { text: '' };
const InputReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_INPUT_TEXT':
        return { ...state, text: action.payload };
      default:
        return state;
    }
  };
  
  export default InputReducer;