import React from "react";
import { useReducer } from "react";
import GlobalContext from "./GlobalContext";
const reducerFun = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "FETCH":
      console.log("Paylaod", payload);
      return { ...state, newspaper: payload };
      break;
    // case "CAT_FETCH":
    //   console.log(payload);
    //   return { ...state, newspaper: payload };
    default:
      return state;
  }
};
const initialState = {
  newspaper: [],
};
const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFun, initialState);
  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
