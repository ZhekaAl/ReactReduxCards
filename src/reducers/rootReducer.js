import { combineReducers } from "redux";
import { appReducer } from "./appReducer";

const baseReducer = combineReducers({
  app: appReducer
});

export const rootReducer = (state, action) => {
  return baseReducer(state, action);
};
