import { combineReducers } from "redux";
import InputReducer from './InputReducer'
import CounterReducer from './CounterReducer'
const RootReducer = combineReducers({
    InputReducer,
    CounterReducer,
  });
  
  export default RootReducer;