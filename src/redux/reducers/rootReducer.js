import { combineReducers } from "redux";
import { inputsReducer } from "./inputsReducer";
import { arrReducer } from "./arrReducer";

export const rootReducer = combineReducers({
  inputs: inputsReducer,
  arr: arrReducer,
});
