import { initState } from "../initState";

export const arrReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_ARR":
      return [...state, payload];
    default:
      return state;
  }
};
